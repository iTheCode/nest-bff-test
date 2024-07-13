import { Module, forwardRef } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ClientPortfolioModule } from 'src/client-portfolio/client-portfolio.module';
import { ClientService } from './application/client.service';
import {
  Client,
  ClientSchema,
} from './infraestructure/mongoose/schema/client.schema';
import { ClientResolver } from './infraestructure/resolvers/client.resolver';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Client.name, schema: ClientSchema }]),
    forwardRef(() => ClientPortfolioModule),
  ],
  providers: [ClientService, ClientResolver],
  exports: [ClientService],
})
export class ClientModule {}
