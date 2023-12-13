import { Module } from '@nestjs/common';
import { PermissionModule } from '@appstack-io/permissions';
import { IdentityServicesModule } from '@appstack-io/identity';
import { SocialServicesModule } from '../../../social.services.module';

const imports = [
  PermissionModule,
  IdentityServicesModule,
  SocialServicesModule,
];

export { imports };

@Module({
  imports,
})
export class MainMicroservicesModule {
  static __filename = __filename;
}
