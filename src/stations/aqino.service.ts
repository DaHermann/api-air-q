import { Injectable, OnModuleInit, OnApplicationBootstrap, ConsoleLogger } from '@nestjs/common';
import { StationsService } from 'src/stations/stations.service';
import { AirsService } from 'src/airs/air.service';




@Injectable()
export class AqinoService implements OnModuleInit {
  constructor(
    private readonly stationsService: StationsService,
    private readonly airsService: AirsService
  ) {
  }

  async onModuleInit() {
    
  }

  async onApplicationBootstrap() {
    console.log('Booted : -----------');
     /** 
   * Recuperation de toutes les données et insersion dans la base de données
   * quand la base de données est vide  
   * */
    await this.saveData();

  /** 
   * Recuperation des données toutes les heures et insersion dans la base de données  
   * */
    setInterval(async () => {
      console.log('-------------Hourly execution-------------------');
      await this.getAndSaveHourlyData();
    },(1000*60*60))

  }

  async saveData() {
    const stationIDs = [283164601,283181971];

    const dbDATA = await this.airsService.findAll();

    if (dbDATA.length == 0) {
      stationIDs.map(async (stationID) => {
        console.log(stationID);
        await fetch(`https://airqino-api.magentalab.it/v3/getStationHourlyAvg/${stationID}`)
        .then(response => response.json())
        .then(async dataJSON => {
  
          await dataJSON.data.forEach( async air => { 
            // console.log('Station',header.station_name);
            const [day, hour]: string[] = air.timestamp.split(' ');
            
            const dataTosave = {
              station_id: dataJSON.header.station_id,
              station_name: dataJSON.header.station_name,
              day: day,
              hour: hour,
              co: air.CO,
              t_ext: air.T,
              t_int: air['T. int.'],
              no2:  air.NO2,
              o3: air.O3,
              pm10: air.PM10,
              pm2_5: air['PM2.5'], 
              rh: air.RH
            }
            await this.airsService.createAirData(dataTosave);
          })
  
        })
        .then(() => console.log('Data saved')); 
      })
    }else{
      console.log('Airs Database is not EMPTY')
    }
    
  }

  async getAndSaveHourlyData() {
    
    const stations = await this.stationsService.getAllStations();

    if (stations.length !== 0) {
      stations.map(async (station) => {

        console.log("sattion name",station.station_name);
        console.log("sattion id",station.station_id); 
      
        await fetch(`https://airqino-api.magentalab.it/getLastValuesRaw/${station.station_name}`)
        .then(response => response.json())
        .then(async dataJSON => {
  
          const dataToSave:any = {
            station_id:'',
            station_name:'',
            day:'',
            hour:'',
            co:'',
            t_ext:'',
            t_int:'',
            no2:'',
            o3:'',
            pm10:'',
            pm2_5:'', 
            rh:''
          }
  
          const [lastday, lastHour]: string[] = dataJSON.last_timestamp.split(' ');
          dataToSave.day = lastday;
          dataToSave.hour = lastHour;
          dataToSave.station_id = station.station_id;
          dataToSave.station_name = station.station_name;
  
          await dataJSON.values.forEach( async air => { 
            // console.log('Station',header.station_name);
            switch (air.sensor) {
              case 'extT':
                dataToSave.t_ext = air.value;
                break;
              case 'rh':
                dataToSave.rh = air.value;
                break;
              case 'intT':
                dataToSave.t_int = air.value;
                break;
              case 'o3':
                dataToSave.o3 = air.value;
                break;
              case 'no2':
                dataToSave.no2 = air.value;
                break;
              case 'co':
                dataToSave.co = air.value;
                break;
              case 'pm25':
                dataToSave.pm2_5 = air.value;
                break;
              case 'pm10':
                dataToSave.pm10 = air.value;
                break;
              default:
                break;
            }
          })
  
          console.log('DataToSave',dataToSave);
          
          return dataToSave;
        })
        .then(async data => {
          await this.airsService.createAirData(data);
          console.log('Data saved');
        });
  
      })
    }

    
  }


}