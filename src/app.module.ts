import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { UserController } from './user/controller/user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './user/entity/user.entity';
import { UserService } from './user/service/user/user.service';

@Module({
  imports: [
    UserModule,
    TypeOrmModule.forFeature([
      UserEntity,
    ]),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'password',
      database: 'fakeumbrella',
      entities: [UserEntity],
      synchronize: false
  }),
    ],
  controllers: [AppController, UserController],
  providers: [AppService, UserService],
})
export class AppModule {}
