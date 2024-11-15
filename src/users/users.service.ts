import { Injectable, NotFoundException , BadRequestException, UnauthorizedException} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { JwtService } from '@nestjs/jwt'


/**
 * Service des Users
 */
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private  repo: Repository<User>,
    private jwtService: JwtService
  ) {}

  /**
   * Creer un Nouveau User
   * @param username 
   * @param email 
   * @param password 
   * @returns 
   */
  async create(username: string, email: string, password: string) {
    const isUser = await this.repo.findOneBy({email});
    if (isUser) {
      throw new BadRequestException('Ce compte existe déja');
    }else{
      
      // const payload = { sub: user.id, username: user.username };
      const payload = { email: email, username: username};
      
      const api_key = await this.jwtService.signAsync(payload);

      const user = await this.repo.create({ username, email, password, api_key});

      return this.repo.save(user);
    }
    
  }

  /**
   * Trous=ver User avec son ID
   * @param id 
   * @returns 
   */
  async findOneById(id: number) {
    if (!id) {
      return null;
    }
    const user =  await this.repo.findOneBy({id});
    if (!user) {
      throw new NotFoundException('Utilisateur Introuvable');
    }
    
    return user;
  }

  /**
   * Trouvcer une Cle API
   * @param api_key 
   * @returns 
   */
  async findOneApi_key(api_key: string) {

    console.log('findOneApi_key api_key:' +api_key);

    if (!api_key) {
      return null;
    }
    const user =  await this.repo.findOneBy({api_key});
    
    console.log('user:' +user);
    
    if (!user) {
      return false;
    }
    
    return true;
  }


  /**
   * Trouver un User avec son Mail
   * @param email 
   * @param password 
   * @returns 
   */
  async findByEmail(email: string) {
    // console.log("Email:  "+email, "Password:   "+password);
    const user = await this.repo.findOneBy({email});
    if (!user) {
      throw new NotFoundException('Utilisateur Introuvable');
    }
    // if (user.password !== password) {
    //   throw new UnauthorizedException('Utilisateur Introuvable');
    // }
    return user;
  }

  /**
   * Trouver Tous les Users
   * @returns 
   */
  findAll() {
    return this.repo.find();
  }

  /**
   * Mise à jour d'un User
   * @param id 
   * @param attrs 
   * @returns 
   */
   async update(id: number, attrs: Partial<User>) {
    const user =  await this.repo.findOneBy({id});
    if (!user) {
      throw new NotFoundException('Utilisateur Introuvable');
    }
    Object.assign(user, attrs);

    return await this.repo.save(user);
  }

  /**
   * Suppression d'un user
   * @param id 
   * @returns 
   */

  async delete(id: number) {
    const  user = await this.repo.findOneBy({id});
    if (!user) {
      throw new NotFoundException('Utilisateur Introuvable');
    }
    return this.repo.remove(user);
  }

}
