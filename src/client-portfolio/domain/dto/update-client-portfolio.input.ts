import { CreateClientPortfolioInput } from './create-client-portfolio.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateClientPortfolioInput extends PartialType(CreateClientPortfolioInput) {
  @Field(() => Int)
  id: number;
}
