import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateClientPortfolioInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
