import { Test, TestingModule } from '@nestjs/testing';
import { ClientPortfolioService } from './client-portfolio.service';

describe('ClientPortfolioService', () => {
  let service: ClientPortfolioService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClientPortfolioService],
    }).compile();

    service = module.get<ClientPortfolioService>(ClientPortfolioService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
