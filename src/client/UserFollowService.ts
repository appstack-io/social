
  export interface UserFollowCreateOneInput {
  followerId: string;
  followeeId: string;
}

export interface Follower {
  id: string;
  createdAt: number;
  updatedAt: number;
  followeeId: string;
  followerId: string;
}

export interface UserFollowRemoveOneInput {
  id: string;
}

export interface UserFindFollowersInput {
  filter: UserFindFollowersFilter | undefined;
  opts: UserFindFollowersOpts | undefined;
}

export interface UserFindFollowersFilter {
  followeeId: string;
}

export interface UserFindFollowersOpts {
  limit: number;
  offset: number;
}

export interface UserFindFollowersResult {
  meta: UserFindFollowersResultMeta | undefined;
  followers: Follower[];
}

export interface UserFindFollowersResultMeta {
  offset: number;
}

export interface UserFindFolloweesInput {
  filter: UserFindFolloweesFilter | undefined;
  opts: UserFindFolloweesOpts | undefined;
}

export interface UserFindFolloweesFilter {
  followerId: string;
}

export interface UserFindFolloweesOpts {
  limit: number;
  offset: number;
}

export interface UserFindFolloweesResult {
  meta: UserFindFolloweesResultMeta | undefined;
  followees: Followee[];
}

export interface UserFindFolloweesResultMeta {
  offset: number;
}

export interface Followee {
  id: string;
  createdAt: number;
  updatedAt: number;
  followerId: string;
  followeeId: string;
}
  import { postToUnary } from './utils';
  import { Metadata } from 'nice-grpc';
 
  export class UserFollowService {
    private readonly serviceName: string = "UserFollowService";
    
    constructor(private opts?: {port?: string, host?: string}){}
    
    
    async createOne(data: Partial<UserFollowCreateOneInput>, metadata: Metadata=new Metadata()): Promise<Follower> {
      return postToUnary<Follower>(this.serviceName, 'createOne', data, metadata, this.opts);
    }
  
    async removeOne(data: Partial<UserFollowRemoveOneInput>, metadata: Metadata=new Metadata()): Promise<Follower> {
      return postToUnary<Follower>(this.serviceName, 'removeOne', data, metadata, this.opts);
    }
  
    async findFollowers(data: Partial<UserFindFollowersInput>, metadata: Metadata=new Metadata()): Promise<UserFindFollowersResult> {
      return postToUnary<UserFindFollowersResult>(this.serviceName, 'findFollowers', data, metadata, this.opts);
    }
  
    async findFollowees(data: Partial<UserFindFolloweesInput>, metadata: Metadata=new Metadata()): Promise<UserFindFolloweesResult> {
      return postToUnary<UserFindFolloweesResult>(this.serviceName, 'findFollowees', data, metadata, this.opts);
    }
  
  }
