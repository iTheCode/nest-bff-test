import { Test, TestingModule } from '@nestjs/testing';
import { ClientService } from 'src/client/application/client.service';
import { ClientResolver } from './client.resolver';

describe('ClientResolver', () => {
  let resolver: ClientResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClientResolver, ClientService],
    }).compile();

    resolver = module.get<ClientResolver>(ClientResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
