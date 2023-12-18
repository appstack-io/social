import { Empty } from './google/protobuf/empty';

import { Observable } from 'rxjs';

import type { CallContext, CallOptions } from "nice-grpc-common";

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

type DeepPartial<T> = T extends Builtin ? T
      : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
      : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
      : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
      : Partial<T>;
    

export interface UserFollowCreateOneInput {
  followerId: string;
  followeeId: string;
}

export interface UserFollowRemoveOneInput {
  id: string;
}

export interface UserFindFollowersFilter {
  followeeId: string;
}

export interface UserFindFollowersOpts {
  limit: number;
  offset: number;
}

export interface UserFindFollowersInput {
  filter: UserFindFollowersFilter | undefined;
  opts: UserFindFollowersOpts | undefined;
}

export interface UserFindFollowersResultMeta {
  offset: number;
}

export interface UserFindFollowersResult {
  meta: UserFindFollowersResultMeta | undefined;
  followers: Follower[];
}

export interface Follower {
  id: string;
  createdAt: number;
  updatedAt: number;
  followeeId: string;
  followerId: string;
}

export interface UserFindFolloweesFilter {
  followerId: string;
}

export interface UserFindFolloweesOpts {
  limit: number;
  offset: number;
}

export interface UserFindFolloweesInput {
  filter: UserFindFolloweesFilter | undefined;
  opts: UserFindFolloweesOpts | undefined;
}

export interface UserFindFolloweesResultMeta {
  offset: number;
}

export interface UserFindFolloweesResult {
  meta: UserFindFolloweesResultMeta | undefined;
  followees: Followee[];
}

export interface Followee {
  id: string;
  createdAt: number;
  updatedAt: number;
  followerId: string;
  followeeId: string;
}

export interface UserFollowServiceImplementation<CallContextExt = {}> {
  createOne(request: UserFollowCreateOneInput, context: CallContext & CallContextExt): Promise<DeepPartial<Follower>>;
  removeOne(request: UserFollowRemoveOneInput, context: CallContext & CallContextExt): Promise<DeepPartial<Follower>>;
  findFollowers(
    request: UserFindFollowersInput,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<UserFindFollowersResult>>;
  findFollowees(
    request: UserFindFolloweesInput,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<UserFindFolloweesResult>>;
}

export interface UserFollowServiceClient<CallOptionsExt = {}> {
  createOne(request: DeepPartial<UserFollowCreateOneInput>, options?: CallOptions & CallOptionsExt): Promise<Follower>;
  removeOne(request: DeepPartial<UserFollowRemoveOneInput>, options?: CallOptions & CallOptionsExt): Promise<Follower>;
  findFollowers(
    request: DeepPartial<UserFindFollowersInput>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<UserFindFollowersResult>;
  findFollowees(
    request: DeepPartial<UserFindFolloweesInput>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<UserFindFolloweesResult>;
}