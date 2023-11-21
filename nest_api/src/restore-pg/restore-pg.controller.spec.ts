import { Test, TestingModule } from '@nestjs/testing';
import { RestorePgController } from './restore-pg.controller';
import { RestorePgService } from './restore-pg.service';

describe('RestorePgController', () => {
  let controller: RestorePgController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RestorePgController],
      providers: [RestorePgService],
    }).compile();

    controller = module.get<RestorePgController>(RestorePgController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
