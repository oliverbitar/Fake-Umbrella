import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDto } from 'src/user/dto/user.dto';
import { Repository } from 'typeorm';
import { UserEntity } from 'src/user/entity/user.entity';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity)
        private userRepository: Repository<UserEntity>
    ){}

    findAll(): Promise<UserDto[]>{
        return this.userRepository.find();
    }

    create(user: UserDto): Promise<UserDto> {
        return this.userRepository.save(user);
    }
}
