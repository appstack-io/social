import { Module } from '@nestjs/common';
import { UserFollowService } from './userFollow.service';
import { UserFollowController } from './userFollow.controller';
import { UserFollowLogic } from './userFollow.logic';
import { LimitsModule } from '@appstack-io/limits';
import { PermissionModule } from '@appstack-io/permissions';

@Module({
  imports: [LimitsModule, PermissionModule],
  controllers: [UserFollowController],
  providers: [UserFollowService, UserFollowLogic],
  exports: [],
})
export class UserFollowModule {}
