import { Module } from '@nestjs/common';
import { ArangodbModule } from '@appstack-io/arangodb';
import { ClientModule } from '@appstack-io/client';
import { UserFollowModule } from './follow/userFollow.module';

@Module({
  imports: [UserFollowModule, ArangodbModule, ClientModule],
})
export class SocialServicesModule {
  static getDirname() {
    return __dirname;
  }
}
