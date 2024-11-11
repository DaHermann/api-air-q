import { Body,Param, Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './users-dto/create-users.dto';
import { updateUsersDto } from './users-dto/update-users.dto';
import { signinUsersDto } from './users-dto/signin-users.dto';





@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get()
    getAllUser(){
        return this.usersService.findAll();
    }


    @Get('/:id')
    getOneUser(@Param('id') id: number) {
        return this.usersService.findOneById(id);
    }


    @Post('/signup')
    createUser(@Body() body: CreateUserDto) {
        console.log(body);
        return this.usersService.create(body.username, body.email, body.password);
    }


    @Post('/signin')
    signinUser(@Body() body: signinUsersDto) {
        return this.usersService.findByEmail(body.email, body.password);
    }


    @Delete('/:id')
    removeUser(@Param('id') id: string) {
        return this.usersService.delete(parseInt(id));
    }


    @Patch('/:id')
    async updateUser(@Param('id') id: string, @Body() body: updateUsersDto) { 
        console.log(body)
        return await this.usersService.update(parseInt(id),body)     
    }


}
