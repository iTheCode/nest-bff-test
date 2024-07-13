import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import axios from 'axios';
import { Model } from 'mongoose';
import { ClientPortfolio } from '../infraestructure/mongoose/schema/client-portfolio.schema';

@Injectable()
export class ClientPortfolioService {
  constructor(
    @InjectModel(ClientPortfolio.name)
    private clientPortfolioModel: Model<ClientPortfolio>,
  ) {}

  async findAll(): Promise<ClientPortfolio[]> {
    const response = await axios.get(`${process.env.FAST_API_URL_2}/`);
    return response.data;
  }

  async findOne(id: string): Promise<ClientPortfolio> {
    const response = await this.findAll();
    const portfolio = response.find((p) => p.customerCode == id);
    return portfolio;
  }
}
