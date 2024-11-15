import { Body,Param, Controller, Delete, Get, Patch, Post , NotFoundException} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './users-dto/create-users.dto';
import { updateUsersDto } from './users-dto/update-users.dto';
import { signinUsersDto } from './users-dto/signin-users.dto';
import * as bcrypt from 'bcrypt';




@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    /**
     * Route pour obtenir tous les Users
     * @returns 
     */
    @Get()
    getAllUser(){
        return this.usersService.findAll();
    }

    /**
     * Route d'obtention d'un user
     * @param id 
     * @returns 
     */

    @Get('/:id')
    getOneUser(@Param('id') id: number) {
        return this.usersService.findOneById(id);
    }

    /**
     * Route de creation  d'un User
     * @param body 
     * @returns 
     */
    @Post('/signup')
    async createUser(@Body() body: CreateUserDto) {
        console.log(body);
        const passwordHash = await PasswordHasher(body.password)
        return await this.usersService.create(body.username, body.email, passwordHash);
    }

    /**
     * Route d'authentification d"un user
     * 
     * @param body 
     * @returns 
     */
    @Post('/signin')
    async signinUser(@Body() body: signinUsersDto){

        const user =  await this.usersService.findByEmail(body.email);

        if (!user) {
            throw new NotFoundException('Compte Inexistant')
        }
        // const passwordHash = await PasswordHasher()
        const  isTheSamePassword = await PasswordCompare(body.password, user.password)

        if (!isTheSamePassword) {
            throw new NotFoundException('Compte Inexistant / Mot de pass incorrect')
        }
        return user;
    }

    /**
     * Route de Suppression d'un User
     * @param id 
     * @returns 
     */

    @Delete('/:id')
    removeUser(@Param('id') id: string) {
        return this.usersService.delete(parseInt(id));
    }

    /**
     * Route Mise à jour d'un User
     * 
     * @param id 
     * @param body 
     * @returns 
     */

    @Patch('/:id')
    async updateUser(@Param('id') id: string, @Body() body: updateUsersDto) { 
        console.log(body)
        if(body.password){
            const passwordHash = await PasswordHasher(body.password)
            body.password = passwordHash;
        }
        return await this.usersService.update(parseInt(id),body)     
    }

}


/**
 * Function de Hashage de mot de passe
 * 
 * @param password 
 * @returns Mot de passe hashé
 */
async function PasswordHasher(password:string):Promise<string>{
    // const saltOrRounds = 10;
    console.log('Password to hash :'+ password);
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const hash = await bcrypt.hash(password, salt);

    console.log('salt :'+ salt);
    console.log('hash :'+ hash);

    return hash
}
/**
 * Fonction de comparaison de mot de passe
 * 
 * @param passwordTocompare 
 * @param userPassord 
 * @returns 
 */
async function PasswordCompare(passwordTocompare:string, userPassord: string):Promise<boolean> {
 
    const isMatch = await bcrypt.compare(passwordTocompare, userPassord);
    // console.log('sMatch :'+isMatch)
    if(!isMatch){
        return false;
    }
    return true;
}