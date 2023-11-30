import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { UserModule } from '@org4/user';
import { join } from 'path';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { KnexModule } from '@org4/knex';

@Module({
  imports: [
    UserModule,
    KnexModule,
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      imports: [UserModule],
      useFactory: () => ({
        playground: false,
        sortSchema: true,
        introspection: true,
        autoSchemaFile: join(__dirname, 'schema.gql'),
        plugins: [ApolloServerPluginLandingPageLocalDefault()],
      }),
    }),
  ],
})
export class AppModule {}
