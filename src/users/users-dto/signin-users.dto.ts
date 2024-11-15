import {IsString, IsEmail, IsNotEmpty} from 'class-validator';



export class signinUsersDto {  
   
    @IsEmail()                             
    email: string;                                        

    @IsString()                                                         
    password: string;
    
}  
