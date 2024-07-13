import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { ClientPortfolio } from 'src/client-portfolio/infraestructure/mongoose/schema/client-portfolio.schema';

export type ClientDocument = HydratedDocument<Client>;

@ObjectType()
@Schema()
class CustomerGroup {
  @Field()
  @Prop()
  group: string;

  @Field()
  @Prop()
  group1: string;

  @Field()
  @Prop()
  group2: string;

  @Field()
  @Prop()
  group3: string;

  @Field()
  @Prop()
  group4: string;

  @Field()
  @Prop()
  group5: string;
}

@ObjectType()
@Schema()
class PaymentMethod {
  @Field()
  @Prop()
  clientId: string;

  @Field()
  @Prop()
  typeCredit: string;

  @Field()
  @Prop()
  creditLimit: number;

  @Field()
  @Prop()
  creditUsed: number;

  @Field()
  @Prop()
  amountAvailable: number;
}

@ObjectType()
@Schema()
export class Client {
  @Field()
  @Prop()
  address: string;

  @Field()
  @Prop()
  blocked: string;

  @Field()
  @Prop()
  cellPhone: string;

  @Field()
  @Prop()
  channel: string;

  @Field()
  @Prop()
  clientId: string;

  @Field()
  @Prop()
  country: string;

  @Field(() => CustomerGroup)
  @Prop({ type: CustomerGroup })
  customerGroup: CustomerGroup;

  @Field()
  @Prop()
  customerSchema: number;

  @Field()
  @Prop()
  distrChan: string;

  @Field()
  @Prop()
  division: string;

  @Field()
  @Prop()
  fiscalCode1: string;

  @Field()
  @Prop()
  fiscalCode2: string;

  @Field()
  @Prop()
  frequency: boolean;

  @Field()
  @Prop()
  frequencyDays: string;

  @Field()
  @Prop()
  idPortfolio: string;

  @Field()
  @Prop()
  immediateDelivery: boolean;

  @Field()
  @Prop()
  industryCode: string;

  @Field()
  @Prop()
  industryCode1: string;

  @Field()
  @Prop()
  isEnrollment: boolean;

  @Field()
  @Prop()
  name: string;

  @Field()
  @Prop()
  name2: string;

  @Field()
  @Prop()
  office: string;

  @Field()
  @Prop()
  paymentCondition: string;

  @Field(() => [PaymentMethod])
  @Prop({ type: [PaymentMethod] })
  paymentMethods: PaymentMethod[];

  @Field()
  @Prop()
  priceGroup: string;

  @Field()
  @Prop()
  priceList: string;

  @Field()
  @Prop()
  routeId: string;

  @Field()
  @Prop()
  salesOrg: string;

  @Field()
  @Prop()
  supplyCenter: string;

  @Field()
  @Prop()
  updateDate: Date;

  @Field()
  @Prop()
  vendorGroup: string;

  @Field(() => ClientPortfolio, { nullable: true })
  portfolio?: ClientPortfolio;
}

export const ClientSchema = SchemaFactory.createForClass(Client);
