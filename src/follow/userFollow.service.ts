import { Injectable, OnModuleInit } from '@nestjs/common';
import { ArangodbService } from '@appstack-io/arangodb';
import { EdgeCollection } from 'arangojs/collection';
import {
  Follower,
  UserFindFolloweesInput,
  UserFindFolloweesResult,
  UserFindFollowersInput,
  UserFindFollowersResult,
  UserFollowCreateOneInput,
  UserFollowRemoveOneInput,
} from '../combined.interfaces';

@Injectable()
export class UserFollowService implements OnModuleInit {
  collection: EdgeCollection;

  constructor(private arangodb: ArangodbService) {
    this.collection = this.arangodb.db.collection('followers');
  }

  async createOne(input: UserFollowCreateOneInput): Promise<Follower> {
    const edge = this.arangodb.utils.format(
      (
        await this.collection.save(
          this.arangodb.utils.addTs({
            _from: input.followerId,
            _to: input.followeeId,
          }),
          { returnNew: true },
        )
      ).new,
    );
    return {
      ...edge,
      followerId: edge._from,
      followeeId: edge._to,
    };
  }

  async removeOne(input: UserFollowRemoveOneInput): Promise<Follower> {
    const query = `
      FOR edge IN followers
      FILTER edge._id == @id
      LIMIT 1
      RETURN edge
    `;
    const vars = {
      ...input,
    };
    const cursor = await this.arangodb.db.query(query, vars);
    const result = await cursor.all();
    if (result?.length > 0) {
      const edge = result[0];
      await this.collection.remove({ _id: edge._id });
      return {
        ...edge,
        followerId: edge._from,
        followeeId: edge._to,
      };
    }
  }

  async findFollowers(
    input: UserFindFollowersInput,
  ): Promise<UserFindFollowersResult> {
    const { filter, opts } = input;
    const query = `
      FOR edge IN followers
      FILTER edge._to == @followeeId
      LIMIT @offset, @limit
      RETURN edge
    `;
    const vars = {
      ...filter,
      offset: Number(opts.offset) || 0,
      limit: Number(opts.limit) || 0,
    };
    const cursor = await this.arangodb.db.query(query, vars);
    const result = await cursor.all();
    return {
      meta: { offset: result.length },
      followers: result.map((r) =>
        this.arangodb.utils.format({
          followerId: r._from,
          followeeId: r._to,
          ...r,
        }),
      ),
    };
  }

  async findFollowees(
    input: UserFindFolloweesInput,
  ): Promise<UserFindFolloweesResult> {
    const { filter, opts } = input;
    const query = `
      FOR edge IN followers
      FILTER edge._from == @followerId
      LIMIT @offset, @limit
      RETURN edge
    `;
    const vars = {
      ...filter,
      offset: Number(opts.offset) || 0,
      limit: Number(opts.limit) || 0,
    };
    const cursor = await this.arangodb.db.query(query, vars);
    const result = await cursor.all();
    return {
      meta: { offset: result.length },
      followees: result.map((r) =>
        this.arangodb.utils.format({
          followerId: r._from,
          followeeId: r._to,
          ...r,
        }),
      ),
    };
  }

  async onModuleInit(): Promise<void> {
    await this.arangodb.utils.tryDdl(() =>
      this.arangodb.db.createEdgeCollection('followers', {}),
    );
  }
}
