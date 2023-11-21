import { Test, TestingModule } from '@nestjs/testing';
import { RestorePgService } from './restore-pg.service';

describe('RestorePgService', () => {
  let service: RestorePgService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RestorePgService],
    }).compile();

    service = module.get<RestorePgService>(RestorePgService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
