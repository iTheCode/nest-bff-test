import { Module, forwardRef } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ClientModule } from 'src/client/client.module';
import { ClientPortfolioService } from './application/client-portfolio.service';
import {
  ClientPortfolio,
  ClientPortfolioSchema,
} from './infraestructure/mongoose/schema/client-portfolio.schema';
import { ClientPortfolioResolver } from './infraestructure/resolvers/client-portfolio.resolver';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ClientPortfolio.name, schema: ClientPortfolioSchema },
    ]),
    forwardRef(() => ClientModule),
  ],
  providers: [ClientPortfolioService, ClientPortfolioResolver],
  exports: [ClientPortfolioService],
})
export class ClientPortfolioModule {}
