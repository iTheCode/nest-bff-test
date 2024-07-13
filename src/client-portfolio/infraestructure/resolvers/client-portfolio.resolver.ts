import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { Client } from 'src/client/infraestructure/mongoose/schema/client.schema';
import { ClientService } from '../../../client/application/client.service';
import { ClientPortfolioService } from '../../application/client-portfolio.service';
import { ClientPortfolio } from '../mongoose/schema/client-portfolio.schema';

@Resolver(() => ClientPortfolio)
export class ClientPortfolioResolver {
  constructor(
    private clientPortfolioService: ClientPortfolioService,
    private clientService: ClientService,
  ) {}

  @Query(() => [ClientPortfolio])
  async clientPortfolios(): Promise<ClientPortfolio[]> {
    return this.clientPortfolioService.findAll();
  }

  @Query(() => ClientPortfolio)
  async clientPortfolio(@Args('id') id: string): Promise<ClientPortfolio> {
    return this.clientPortfolioService.findOne(id);
  }

  @ResolveField(() => Client)
  async client(@Parent() clientPortfolio: ClientPortfolio): Promise<Client> {
    return this.clientService.findOne(clientPortfolio.customerCode);
  }
}
