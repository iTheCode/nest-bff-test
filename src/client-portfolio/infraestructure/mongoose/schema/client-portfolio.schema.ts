import { Field, Float, Int, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ClientPortfolioDocument = HydratedDocument<ClientPortfolio>;

@ObjectType()
@Schema()
class Tax {
  @Field()
  @Prop()
  taxType: string;

  @Field()
  @Prop()
  taxId: string;

  @Field(() => Float)
  @Prop()
  rate: number;
}

@ObjectType()
@Schema()
class Price {
  @Field(() => Float)
  @Prop()
  full_price: number;

  @Field(() => [Tax])
  @Prop({ type: [Tax] })
  taxes: Tax[];
}

@ObjectType()
@Schema()
class Item {
  @Field()
  @Prop()
  sku: string;

  @Field()
  @Prop()
  title: string;

  @Field()
  @Prop()
  categoryId: string;

  @Field()
  @Prop()
  category: string;

  @Field()
  @Prop()
  brand: string;

  @Field()
  @Prop()
  classification: string;

  @Field()
  @Prop()
  unitsPerBox: string;

  @Field(() => Float)
  @Prop()
  minOrderUnits: number;

  @Field()
  @Prop()
  packageDescription: string;

  @Field()
  @Prop()
  packageUnitDescription: string;

  @Field(() => Int)
  @Prop()
  quantity_max_redeem: number;

  @Field()
  @Prop()
  redeem_unit: string;

  @Field()
  @Prop()
  order_reason_redeem: string;

  @Field()
  @Prop()
  sku_redeem: boolean;

  @Field(() => Price)
  @Prop({ type: Price })
  price: Price;

  @Field(() => Int)
  @Prop()
  points: number;
}

@ObjectType()
@Schema()
export class ClientPortfolio {
  @Field()
  @Prop()
  channel: string;

  @Field()
  @Prop()
  country: string;

  @Field()
  @Prop()
  createdDate: string;

  @Field()
  @Prop()
  customerCode: string;

  @Field(() => [Item])
  @Prop({ type: [Item] })
  items: Item[];

  @Field()
  @Prop()
  route: string;
}

export const ClientPortfolioSchema =
  SchemaFactory.createForClass(ClientPortfolio);
