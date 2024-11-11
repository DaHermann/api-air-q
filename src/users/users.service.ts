import { Injectable, NotFoundException , BadRequestException} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';




@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private  repo: Repository<User>) {}


  async create(username: string, email: string, password: string) {
    const isUser = await this.repo.findOneBy({email});
    if (isUser) {
      throw new BadRequestException('Ce compte existe déja');
    }else{
      const user = await this.repo.create({ username, email, password });
      return this.repo.save(user);
    }
    
  }

  findOneById(id: number) {
    if (!id) {
      return null;
    }
    return this.repo.findOneBy({ id });
  }

  async findByEmail(email: string, password: string) {
    console.log("Email:  "+email, "Password:   "+password);
    const user = await this.repo.findOneBy({email});
    if (!user) {
      throw new NotFoundException('Utilisateur Introuvable');
    }
    if (user.password !== password) {
      throw new NotFoundException('Mot de passe incorrect');
    }
    return user;
  }


  findAll() {
    return this.repo.find();
  }

   async update(id: number, attrs: Partial<User>) {
    const user =  await this.repo.findOneBy({id});
    if (!user) {
      throw new NotFoundException('Utilisateur Introuvable');
    }
    Object.assign(user, attrs);

    return await this.repo.save(user);
  }

  async delete(id: number) {
    const  user = await this.repo.findOneBy({id});
    if (!user) {
      throw new NotFoundException('Utilisateur Introuvable');
    }
    return this.repo.remove(user);
  }
}
