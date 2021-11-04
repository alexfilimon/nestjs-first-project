import { Module } from '@nestjs/common';
import { PostsModule } from './modules/posts/posts.module';
import { DatabaseModule } from './core/database/database.module';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PostsModule, 
    DatabaseModule, 
    UsersModule
  ]
})
export class AppModule {}
