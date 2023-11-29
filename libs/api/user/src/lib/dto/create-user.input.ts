import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field()
  userName: string;

  @Field()
  email: string;

  @Field()
  address: string;

  @Field(() => Int)
  phoneNumber: number;
}
