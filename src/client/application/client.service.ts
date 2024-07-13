import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import axios from 'axios';
import { Model } from 'mongoose';
import { Client } from '../infraestructure/mongoose/schema/client.schema';

@Injectable()
export class ClientService {
  constructor(@InjectModel(Client.name) private clientModel: Model<Client>) {}

  async findAll(): Promise<Client[]> {
    const response = await axios.get(`${process.env.FAST_API_URL_1}/`);
    return response.data;
  }

  async findOne(id: string): Promise<Client> {
    const response = await this.findAll();
    const client = response.find((c) => c.clientId == id);
    return client;
  }
}
