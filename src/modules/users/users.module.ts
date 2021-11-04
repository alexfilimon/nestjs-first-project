import { Module } from '@nestjs/common';
import { userProviders } from './users.providers';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';

@Module({
  providers: [UsersService, ...userProviders],
  exports: [UsersService],
  controllers: [UsersController]
})
export class UsersModule {}
