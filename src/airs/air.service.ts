import { Injectable, NotFoundException } from '@nestjs/common';
import { Air } from './air.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAirDto, UpdateAirDto } from './air-dto/air.dto';

@Injectable()
export class AirsService {
  constructor(@InjectRepository(Air) private repo: Repository<Air>) {}

  async findAll(){
    return this.repo.find();
  }

  async findAllByStation(station_name: string) {
    return this.repo.findBy({ station_name });
  }

  async findAllByTimestamp(station_name: string, day: string) {
    return await this.repo.findBy({ station_name , day});
 
  }

  async createAirData(airs:CreateAirDto) {
    const air = this.repo.create(airs);
    return await this.repo.save(air);
  }

  async update(id: number, attrs: Partial<Air>) {
    const isExistAir = await this.repo.findOneBy({ id });

    if (!isExistAir) {
      throw new NotFoundException('Enregistrement non Trouvé !');
    }

    Object.assign(isExistAir, attrs);

    return await this.repo.save(isExistAir);
  }

  async delete(id: number) {
    const air = await this.repo.findOneBy({ id });
    if (!air) {
      throw new NotFoundException('Air Introuvable');
    }
    return this.repo.remove(air);
  }
}
