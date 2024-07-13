import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { ClientPortfolioService } from 'src/client-portfolio/application/client-portfolio.service';
import { ClientPortfolio } from 'src/client-portfolio/infraestructure/mongoose/schema/client-portfolio.schema';
import { ClientService } from '../../application/client.service';
import { Client } from '../mongoose/schema/client.schema';

@Resolver(() => Client)
export class ClientResolver {
  constructor(
    private clientPortfolioService: ClientPortfolioService,
    private clientService: ClientService,
  ) {}

  @Query(() => [Client])
  async clients(): Promise<Client[]> {
    return this.clientService.findAll();
  }

  @Query(() => Client)
  async client(@Args('id') id: string): Promise<Client> {
    return this.clientService.findOne(id);
  }

  @ResolveField(() => ClientPortfolio, { nullable: true })
  async portfolio(@Parent() client: Client): Promise<ClientPortfolio | null> {
    const { clientId } = client;
    console.log(client);
    return this.clientPortfolioService.findOne(clientId);
  }
}
