import { Test, TestingModule } from '@nestjs/testing';
import { BallController } from './ball.controller';

describe('BallController', () => {
  let controller: BallController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BallController],
    }).compile();

    controller = module.get<BallController>(BallController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
