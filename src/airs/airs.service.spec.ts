import { Test, TestingModule } from '@nestjs/testing';
import { AirsService } from './air.service';

describe('AirsService', () => {
  let service: AirsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AirsService],
    }).compile();

    service = module.get<AirsService>(AirsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
