/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import Long = require("long");

export const protobufPackage = "main";

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

function createBaseUserFollowCreateOneInput(): UserFollowCreateOneInput {
  return { followerId: "", followeeId: "" };
}

export const UserFollowCreateOneInput = {
  encode(message: UserFollowCreateOneInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.followerId !== "") {
      writer.uint32(10).string(message.followerId);
    }
    if (message.followeeId !== "") {
      writer.uint32(18).string(message.followeeId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserFollowCreateOneInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserFollowCreateOneInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.followerId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.followeeId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UserFollowCreateOneInput {
    return {
      followerId: isSet(object.followerId) ? globalThis.String(object.followerId) : "",
      followeeId: isSet(object.followeeId) ? globalThis.String(object.followeeId) : "",
    };
  },

  toJSON(message: UserFollowCreateOneInput): unknown {
    const obj: any = {};
    if (message.followerId !== "") {
      obj.followerId = message.followerId;
    }
    if (message.followeeId !== "") {
      obj.followeeId = message.followeeId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UserFollowCreateOneInput>, I>>(base?: I): UserFollowCreateOneInput {
    return UserFollowCreateOneInput.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UserFollowCreateOneInput>, I>>(object: I): UserFollowCreateOneInput {
    const message = createBaseUserFollowCreateOneInput();
    message.followerId = object.followerId ?? "";
    message.followeeId = object.followeeId ?? "";
    return message;
  },
};

function createBaseUserFollowRemoveOneInput(): UserFollowRemoveOneInput {
  return { id: "" };
}

export const UserFollowRemoveOneInput = {
  encode(message: UserFollowRemoveOneInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserFollowRemoveOneInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserFollowRemoveOneInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UserFollowRemoveOneInput {
    return { id: isSet(object.id) ? globalThis.String(object.id) : "" };
  },

  toJSON(message: UserFollowRemoveOneInput): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UserFollowRemoveOneInput>, I>>(base?: I): UserFollowRemoveOneInput {
    return UserFollowRemoveOneInput.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UserFollowRemoveOneInput>, I>>(object: I): UserFollowRemoveOneInput {
    const message = createBaseUserFollowRemoveOneInput();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseUserFindFollowersFilter(): UserFindFollowersFilter {
  return { followeeId: "" };
}

export const UserFindFollowersFilter = {
  encode(message: UserFindFollowersFilter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.followeeId !== "") {
      writer.uint32(10).string(message.followeeId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserFindFollowersFilter {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserFindFollowersFilter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.followeeId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UserFindFollowersFilter {
    return { followeeId: isSet(object.followeeId) ? globalThis.String(object.followeeId) : "" };
  },

  toJSON(message: UserFindFollowersFilter): unknown {
    const obj: any = {};
    if (message.followeeId !== "") {
      obj.followeeId = message.followeeId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UserFindFollowersFilter>, I>>(base?: I): UserFindFollowersFilter {
    return UserFindFollowersFilter.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UserFindFollowersFilter>, I>>(object: I): UserFindFollowersFilter {
    const message = createBaseUserFindFollowersFilter();
    message.followeeId = object.followeeId ?? "";
    return message;
  },
};

function createBaseUserFindFollowersOpts(): UserFindFollowersOpts {
  return { limit: 0, offset: 0 };
}

export const UserFindFollowersOpts = {
  encode(message: UserFindFollowersOpts, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.limit !== 0) {
      writer.uint32(8).uint64(message.limit);
    }
    if (message.offset !== 0) {
      writer.uint32(16).uint64(message.offset);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserFindFollowersOpts {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserFindFollowersOpts();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.limit = longToNumber(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.offset = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UserFindFollowersOpts {
    return {
      limit: isSet(object.limit) ? globalThis.Number(object.limit) : 0,
      offset: isSet(object.offset) ? globalThis.Number(object.offset) : 0,
    };
  },

  toJSON(message: UserFindFollowersOpts): unknown {
    const obj: any = {};
    if (message.limit !== 0) {
      obj.limit = Math.round(message.limit);
    }
    if (message.offset !== 0) {
      obj.offset = Math.round(message.offset);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UserFindFollowersOpts>, I>>(base?: I): UserFindFollowersOpts {
    return UserFindFollowersOpts.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UserFindFollowersOpts>, I>>(object: I): UserFindFollowersOpts {
    const message = createBaseUserFindFollowersOpts();
    message.limit = object.limit ?? 0;
    message.offset = object.offset ?? 0;
    return message;
  },
};

function createBaseUserFindFollowersInput(): UserFindFollowersInput {
  return { filter: undefined, opts: undefined };
}

export const UserFindFollowersInput = {
  encode(message: UserFindFollowersInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.filter !== undefined) {
      UserFindFollowersFilter.encode(message.filter, writer.uint32(10).fork()).ldelim();
    }
    if (message.opts !== undefined) {
      UserFindFollowersOpts.encode(message.opts, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserFindFollowersInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserFindFollowersInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.filter = UserFindFollowersFilter.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.opts = UserFindFollowersOpts.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UserFindFollowersInput {
    return {
      filter: isSet(object.filter) ? UserFindFollowersFilter.fromJSON(object.filter) : undefined,
      opts: isSet(object.opts) ? UserFindFollowersOpts.fromJSON(object.opts) : undefined,
    };
  },

  toJSON(message: UserFindFollowersInput): unknown {
    const obj: any = {};
    if (message.filter !== undefined) {
      obj.filter = UserFindFollowersFilter.toJSON(message.filter);
    }
    if (message.opts !== undefined) {
      obj.opts = UserFindFollowersOpts.toJSON(message.opts);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UserFindFollowersInput>, I>>(base?: I): UserFindFollowersInput {
    return UserFindFollowersInput.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UserFindFollowersInput>, I>>(object: I): UserFindFollowersInput {
    const message = createBaseUserFindFollowersInput();
    message.filter = (object.filter !== undefined && object.filter !== null)
      ? UserFindFollowersFilter.fromPartial(object.filter)
      : undefined;
    message.opts = (object.opts !== undefined && object.opts !== null)
      ? UserFindFollowersOpts.fromPartial(object.opts)
      : undefined;
    return message;
  },
};

function createBaseUserFindFollowersResultMeta(): UserFindFollowersResultMeta {
  return { offset: 0 };
}

export const UserFindFollowersResultMeta = {
  encode(message: UserFindFollowersResultMeta, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.offset !== 0) {
      writer.uint32(8).uint64(message.offset);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserFindFollowersResultMeta {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserFindFollowersResultMeta();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.offset = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UserFindFollowersResultMeta {
    return { offset: isSet(object.offset) ? globalThis.Number(object.offset) : 0 };
  },

  toJSON(message: UserFindFollowersResultMeta): unknown {
    const obj: any = {};
    if (message.offset !== 0) {
      obj.offset = Math.round(message.offset);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UserFindFollowersResultMeta>, I>>(base?: I): UserFindFollowersResultMeta {
    return UserFindFollowersResultMeta.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UserFindFollowersResultMeta>, I>>(object: I): UserFindFollowersResultMeta {
    const message = createBaseUserFindFollowersResultMeta();
    message.offset = object.offset ?? 0;
    return message;
  },
};

function createBaseUserFindFollowersResult(): UserFindFollowersResult {
  return { meta: undefined, followers: [] };
}

export const UserFindFollowersResult = {
  encode(message: UserFindFollowersResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.meta !== undefined) {
      UserFindFollowersResultMeta.encode(message.meta, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.followers) {
      Follower.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserFindFollowersResult {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserFindFollowersResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.meta = UserFindFollowersResultMeta.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.followers.push(Follower.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UserFindFollowersResult {
    return {
      meta: isSet(object.meta) ? UserFindFollowersResultMeta.fromJSON(object.meta) : undefined,
      followers: globalThis.Array.isArray(object?.followers)
        ? object.followers.map((e: any) => Follower.fromJSON(e))
        : [],
    };
  },

  toJSON(message: UserFindFollowersResult): unknown {
    const obj: any = {};
    if (message.meta !== undefined) {
      obj.meta = UserFindFollowersResultMeta.toJSON(message.meta);
    }
    if (message.followers?.length) {
      obj.followers = message.followers.map((e) => Follower.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UserFindFollowersResult>, I>>(base?: I): UserFindFollowersResult {
    return UserFindFollowersResult.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UserFindFollowersResult>, I>>(object: I): UserFindFollowersResult {
    const message = createBaseUserFindFollowersResult();
    message.meta = (object.meta !== undefined && object.meta !== null)
      ? UserFindFollowersResultMeta.fromPartial(object.meta)
      : undefined;
    message.followers = object.followers?.map((e) => Follower.fromPartial(e)) || [];
    return message;
  },
};

function createBaseFollower(): Follower {
  return { id: "", createdAt: 0, updatedAt: 0, followeeId: "", followerId: "" };
}

export const Follower = {
  encode(message: Follower, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.createdAt !== 0) {
      writer.uint32(16).uint64(message.createdAt);
    }
    if (message.updatedAt !== 0) {
      writer.uint32(24).uint64(message.updatedAt);
    }
    if (message.followeeId !== "") {
      writer.uint32(34).string(message.followeeId);
    }
    if (message.followerId !== "") {
      writer.uint32(42).string(message.followerId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Follower {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFollower();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.createdAt = longToNumber(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.updatedAt = longToNumber(reader.uint64() as Long);
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.followeeId = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.followerId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Follower {
    return {
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      createdAt: isSet(object.createdAt) ? globalThis.Number(object.createdAt) : 0,
      updatedAt: isSet(object.updatedAt) ? globalThis.Number(object.updatedAt) : 0,
      followeeId: isSet(object.followeeId) ? globalThis.String(object.followeeId) : "",
      followerId: isSet(object.followerId) ? globalThis.String(object.followerId) : "",
    };
  },

  toJSON(message: Follower): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.createdAt !== 0) {
      obj.createdAt = Math.round(message.createdAt);
    }
    if (message.updatedAt !== 0) {
      obj.updatedAt = Math.round(message.updatedAt);
    }
    if (message.followeeId !== "") {
      obj.followeeId = message.followeeId;
    }
    if (message.followerId !== "") {
      obj.followerId = message.followerId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Follower>, I>>(base?: I): Follower {
    return Follower.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Follower>, I>>(object: I): Follower {
    const message = createBaseFollower();
    message.id = object.id ?? "";
    message.createdAt = object.createdAt ?? 0;
    message.updatedAt = object.updatedAt ?? 0;
    message.followeeId = object.followeeId ?? "";
    message.followerId = object.followerId ?? "";
    return message;
  },
};

function createBaseUserFindFolloweesFilter(): UserFindFolloweesFilter {
  return { followerId: "" };
}

export const UserFindFolloweesFilter = {
  encode(message: UserFindFolloweesFilter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.followerId !== "") {
      writer.uint32(10).string(message.followerId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserFindFolloweesFilter {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserFindFolloweesFilter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.followerId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UserFindFolloweesFilter {
    return { followerId: isSet(object.followerId) ? globalThis.String(object.followerId) : "" };
  },

  toJSON(message: UserFindFolloweesFilter): unknown {
    const obj: any = {};
    if (message.followerId !== "") {
      obj.followerId = message.followerId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UserFindFolloweesFilter>, I>>(base?: I): UserFindFolloweesFilter {
    return UserFindFolloweesFilter.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UserFindFolloweesFilter>, I>>(object: I): UserFindFolloweesFilter {
    const message = createBaseUserFindFolloweesFilter();
    message.followerId = object.followerId ?? "";
    return message;
  },
};

function createBaseUserFindFolloweesOpts(): UserFindFolloweesOpts {
  return { limit: 0, offset: 0 };
}

export const UserFindFolloweesOpts = {
  encode(message: UserFindFolloweesOpts, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.limit !== 0) {
      writer.uint32(8).uint64(message.limit);
    }
    if (message.offset !== 0) {
      writer.uint32(16).uint64(message.offset);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserFindFolloweesOpts {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserFindFolloweesOpts();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.limit = longToNumber(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.offset = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UserFindFolloweesOpts {
    return {
      limit: isSet(object.limit) ? globalThis.Number(object.limit) : 0,
      offset: isSet(object.offset) ? globalThis.Number(object.offset) : 0,
    };
  },

  toJSON(message: UserFindFolloweesOpts): unknown {
    const obj: any = {};
    if (message.limit !== 0) {
      obj.limit = Math.round(message.limit);
    }
    if (message.offset !== 0) {
      obj.offset = Math.round(message.offset);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UserFindFolloweesOpts>, I>>(base?: I): UserFindFolloweesOpts {
    return UserFindFolloweesOpts.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UserFindFolloweesOpts>, I>>(object: I): UserFindFolloweesOpts {
    const message = createBaseUserFindFolloweesOpts();
    message.limit = object.limit ?? 0;
    message.offset = object.offset ?? 0;
    return message;
  },
};

function createBaseUserFindFolloweesInput(): UserFindFolloweesInput {
  return { filter: undefined, opts: undefined };
}

export const UserFindFolloweesInput = {
  encode(message: UserFindFolloweesInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.filter !== undefined) {
      UserFindFolloweesFilter.encode(message.filter, writer.uint32(10).fork()).ldelim();
    }
    if (message.opts !== undefined) {
      UserFindFolloweesOpts.encode(message.opts, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserFindFolloweesInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserFindFolloweesInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.filter = UserFindFolloweesFilter.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.opts = UserFindFolloweesOpts.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UserFindFolloweesInput {
    return {
      filter: isSet(object.filter) ? UserFindFolloweesFilter.fromJSON(object.filter) : undefined,
      opts: isSet(object.opts) ? UserFindFolloweesOpts.fromJSON(object.opts) : undefined,
    };
  },

  toJSON(message: UserFindFolloweesInput): unknown {
    const obj: any = {};
    if (message.filter !== undefined) {
      obj.filter = UserFindFolloweesFilter.toJSON(message.filter);
    }
    if (message.opts !== undefined) {
      obj.opts = UserFindFolloweesOpts.toJSON(message.opts);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UserFindFolloweesInput>, I>>(base?: I): UserFindFolloweesInput {
    return UserFindFolloweesInput.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UserFindFolloweesInput>, I>>(object: I): UserFindFolloweesInput {
    const message = createBaseUserFindFolloweesInput();
    message.filter = (object.filter !== undefined && object.filter !== null)
      ? UserFindFolloweesFilter.fromPartial(object.filter)
      : undefined;
    message.opts = (object.opts !== undefined && object.opts !== null)
      ? UserFindFolloweesOpts.fromPartial(object.opts)
      : undefined;
    return message;
  },
};

function createBaseUserFindFolloweesResultMeta(): UserFindFolloweesResultMeta {
  return { offset: 0 };
}

export const UserFindFolloweesResultMeta = {
  encode(message: UserFindFolloweesResultMeta, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.offset !== 0) {
      writer.uint32(8).uint64(message.offset);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserFindFolloweesResultMeta {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserFindFolloweesResultMeta();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.offset = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UserFindFolloweesResultMeta {
    return { offset: isSet(object.offset) ? globalThis.Number(object.offset) : 0 };
  },

  toJSON(message: UserFindFolloweesResultMeta): unknown {
    const obj: any = {};
    if (message.offset !== 0) {
      obj.offset = Math.round(message.offset);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UserFindFolloweesResultMeta>, I>>(base?: I): UserFindFolloweesResultMeta {
    return UserFindFolloweesResultMeta.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UserFindFolloweesResultMeta>, I>>(object: I): UserFindFolloweesResultMeta {
    const message = createBaseUserFindFolloweesResultMeta();
    message.offset = object.offset ?? 0;
    return message;
  },
};

function createBaseUserFindFolloweesResult(): UserFindFolloweesResult {
  return { meta: undefined, followees: [] };
}

export const UserFindFolloweesResult = {
  encode(message: UserFindFolloweesResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.meta !== undefined) {
      UserFindFolloweesResultMeta.encode(message.meta, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.followees) {
      Followee.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserFindFolloweesResult {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserFindFolloweesResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.meta = UserFindFolloweesResultMeta.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.followees.push(Followee.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UserFindFolloweesResult {
    return {
      meta: isSet(object.meta) ? UserFindFolloweesResultMeta.fromJSON(object.meta) : undefined,
      followees: globalThis.Array.isArray(object?.followees)
        ? object.followees.map((e: any) => Followee.fromJSON(e))
        : [],
    };
  },

  toJSON(message: UserFindFolloweesResult): unknown {
    const obj: any = {};
    if (message.meta !== undefined) {
      obj.meta = UserFindFolloweesResultMeta.toJSON(message.meta);
    }
    if (message.followees?.length) {
      obj.followees = message.followees.map((e) => Followee.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UserFindFolloweesResult>, I>>(base?: I): UserFindFolloweesResult {
    return UserFindFolloweesResult.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UserFindFolloweesResult>, I>>(object: I): UserFindFolloweesResult {
    const message = createBaseUserFindFolloweesResult();
    message.meta = (object.meta !== undefined && object.meta !== null)
      ? UserFindFolloweesResultMeta.fromPartial(object.meta)
      : undefined;
    message.followees = object.followees?.map((e) => Followee.fromPartial(e)) || [];
    return message;
  },
};

function createBaseFollowee(): Followee {
  return { id: "", createdAt: 0, updatedAt: 0, followerId: "", followeeId: "" };
}

export const Followee = {
  encode(message: Followee, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.createdAt !== 0) {
      writer.uint32(16).uint64(message.createdAt);
    }
    if (message.updatedAt !== 0) {
      writer.uint32(24).uint64(message.updatedAt);
    }
    if (message.followerId !== "") {
      writer.uint32(34).string(message.followerId);
    }
    if (message.followeeId !== "") {
      writer.uint32(42).string(message.followeeId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Followee {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFollowee();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.createdAt = longToNumber(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.updatedAt = longToNumber(reader.uint64() as Long);
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.followerId = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.followeeId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Followee {
    return {
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      createdAt: isSet(object.createdAt) ? globalThis.Number(object.createdAt) : 0,
      updatedAt: isSet(object.updatedAt) ? globalThis.Number(object.updatedAt) : 0,
      followerId: isSet(object.followerId) ? globalThis.String(object.followerId) : "",
      followeeId: isSet(object.followeeId) ? globalThis.String(object.followeeId) : "",
    };
  },

  toJSON(message: Followee): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.createdAt !== 0) {
      obj.createdAt = Math.round(message.createdAt);
    }
    if (message.updatedAt !== 0) {
      obj.updatedAt = Math.round(message.updatedAt);
    }
    if (message.followerId !== "") {
      obj.followerId = message.followerId;
    }
    if (message.followeeId !== "") {
      obj.followeeId = message.followeeId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Followee>, I>>(base?: I): Followee {
    return Followee.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Followee>, I>>(object: I): Followee {
    const message = createBaseFollowee();
    message.id = object.id ?? "";
    message.createdAt = object.createdAt ?? 0;
    message.updatedAt = object.updatedAt ?? 0;
    message.followerId = object.followerId ?? "";
    message.followeeId = object.followeeId ?? "";
    return message;
  },
};

export interface UserFollowService {
  CreateOne(request: UserFollowCreateOneInput): Promise<Follower>;
  RemoveOne(request: UserFollowRemoveOneInput): Promise<Follower>;
  FindFollowers(request: UserFindFollowersInput): Promise<UserFindFollowersResult>;
  FindFollowees(request: UserFindFolloweesInput): Promise<UserFindFolloweesResult>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function longToNumber(long: Long): number {
  if (long.gt(globalThis.Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
