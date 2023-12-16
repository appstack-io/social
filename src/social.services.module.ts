import { Module } from '@nestjs/common';
import { ArangodbModule } from '@appstack-io/arangodb';
import { UserFollowModule } from './follow/userFollow.module';

@Module({
  imports: [UserFollowModule, ArangodbModule],
})
export class SocialServicesModule {
  static getDirname() {
    return __dirname;
  }
}
