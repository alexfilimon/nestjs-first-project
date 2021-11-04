import { Body, Controller, Post } from '@nestjs/common';
import { UserDto } from './user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private userService: UsersService) {}

    @Post('create')
    async createUser(@Body() user: UserDto) {
        return await this.userService.create(user)
    }
}
