import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [
    PrismaModule,
    GraphQLModule.forRoot({
      typePaths: ['./**/*.gql'],
      definitions: {
        path: join(process.cwd(), 'graphql.ts'),
        outputAs: 'class',
      },
      playground: true
    }),
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
