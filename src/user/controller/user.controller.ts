import { Controller, Get, Post } from '@nestjs/common';
import { UserDto } from '../dto/user.dto';
import { UserService } from '../service/user/user.service';

@Controller('user')
export class UserController {
    constructor(private userService: UserService){}

@Get('/')
    async findAll(): Promise<UserDto[]> {
        return this.userService.findAll();
    }

@Post()
   create(): string {
        return 'create customer';
  }
}
