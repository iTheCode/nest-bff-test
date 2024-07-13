import { Test, TestingModule } from '@nestjs/testing';
import { ClientPortfolioService } from 'src/client-portfolio/application/client-portfolio.service';
import { ClientPortfolioResolver } from './client-portfolio.resolver';

describe('ClientPortfolioResolver', () => {
  let resolver: ClientPortfolioResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClientPortfolioResolver, ClientPortfolioService],
    }).compile();

    resolver = module.get<ClientPortfolioResolver>(ClientPortfolioResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
