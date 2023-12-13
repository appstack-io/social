import { Module } from '@nestjs/common';
import { UserFollowService } from './userFollow.service';
import { UserFollowController } from './userFollow.controller';
import { UserFollowLogic } from './userFollow.logic';
import { LimitsModule } from '@appstack-io/limits';

@Module({
  imports: [LimitsModule],
  controllers: [UserFollowController],
  providers: [UserFollowService, UserFollowLogic],
  exports: [],
})
export class UserFollowModule {}
