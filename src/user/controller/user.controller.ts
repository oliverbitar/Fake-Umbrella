import { Controller, Get, Post, Delete, Param, Patch, Put } from '@nestjs/common';
import { UserDto } from '../dto/user.dto';
import { UserService } from '../service/user/user.service';
import { Body } from '@nestjs/common';

@Controller('user')
export class UserController {
    constructor(private userService: UserService){}

@Get('/')
    async findAll(): Promise<UserDto[]> {
        return this.userService.findAll();
    }

@Post('/')
   create(@Body() user: UserDto): Promise<UserDto> {
        return this.userService.create(user);
  }

@Delete(':id')
    delete(@Param('id') id: string): Promise<any> {
       return this.userService.delete(+id);
    }

@Put(':id')
    update(@Param('id') id: string, @Body() user: UserDto): Promise<any>{
        return this.userService.update(+id,user);
    }
}
