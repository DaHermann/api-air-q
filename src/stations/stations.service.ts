import { BadRequestException, Injectable, NotFoundException} from '@nestjs/common';
import {Station} from './station.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class StationsService {

    constructor(
        @InjectRepository(Station) private  repo: Repository<Station>
    ) {}


    /**
     * Crée une nouvelle station.
     * @param station la station  créer
     * @returns la promesse de la station créé
     */
    async createStation(
            station_name: string,
            station_id: number,
            station_lat: number,
            station_lon: number
    ) {
        const isStationExist = await this.repo.findOneBy({station_name});
        if (isStationExist) {
            throw new BadRequestException('La station existe deja');  
        }
        const newStation =  this.repo.create({station_name, station_id, station_lat, station_lon})
        return await this.repo.save(newStation);
    }


    /**
     * Renvoie toutes les stations.
     * @returns Une Promesse contenant un tableau de stations
     */
    async getAllStations() {
        console.log('Get all stations');
        return await this.repo.find({});
    }

    /**
     * retourne une station par son ID.
     * @returns Une Promesse contenant une station
     */
    async getOneStation(id: number) {
        return await this.repo.findOneBy({id});
    }

    /**
     * Mise  jour d'une station.
     * @returns la station mise  jour
     */
    async updateStation(id: number,  attrs: Partial<Station>) {
         const station = await this.repo.findOneBy({id});
        if (!station) {
            throw new NotFoundException('Station Introuvable');
        }

        Object.assign(station, attrs);

        return await this.repo.save(station);
    }


    /**
     * Supprime une station d'ID donn e.
     * @param id l'ID de la station  supprimer
     * @throws {NotFoundException} si la station n'existe pas
     */
    async deleteStation(id: number) {
        const station = await this.repo.findOneBy({id});
        if (!station) {
            throw new NotFoundException('Station Introuvable');
        }
        return this.repo.remove(station);
    }


  
    
}
