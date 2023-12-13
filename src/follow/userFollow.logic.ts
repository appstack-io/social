import { Injectable } from '@nestjs/common';
import {
  Follower,
  UserFindFolloweesInput,
  UserFindFolloweesResult,
  UserFindFollowersInput,
  UserFindFollowersResult,
  UserFollowCreateOneInput,
  UserFollowRemoveOneInput,
} from '../combined.interfaces';
import { UserFollowService } from './userFollow.service';

@Injectable()
export class UserFollowLogic {
  constructor(private service: UserFollowService) {}

  async createOne(input: UserFollowCreateOneInput): Promise<Follower> {
    return await this.service.createOne(input);
  }

  async removeOne(input: UserFollowRemoveOneInput): Promise<Follower> {
    return await this.service.removeOne(input);
  }

  async findFollowers(
    input: UserFindFollowersInput,
  ): Promise<UserFindFollowersResult> {
    return await this.service.findFollowers(input);
  }

  async findFollowees(
    input: UserFindFolloweesInput,
  ): Promise<UserFindFolloweesResult> {
    return await this.service.findFollowees(input);
  }
}
