import { Injectable, Inject } from '@nestjs/common';
import { UserDto } from './user.dto';
import { USER_REPOSITORY } from 'src/core/constants';
import { User } from './user.entity';

@Injectable()
export class UsersService {

    constructor(@Inject(USER_REPOSITORY) private readonly userRepository: typeof User) {}

    async create(user: UserDto): Promise<User> {
        return await this.userRepository.create<User>(user)
    }

    async findOneByEmail(email: string): Promise<User | null> {
        return await this.userRepository.findOne<User>({ where: { email } })
    }

    async findOneById(id: number): Promise<User | null> {
        return await this.userRepository.findOne<User>({ where: { id } })
    }

}
