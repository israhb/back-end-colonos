import { Test, TestingModule } from '@nestjs/testing';
import { FolioController } from './folio.controller';
import { FolioService } from './folio.service';

describe('FolioController', () => {
  let controller: FolioController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FolioController],
      providers: [FolioService],
    }).compile();

    controller = module.get<FolioController>(FolioController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
