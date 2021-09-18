import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductorModule } from './productor/productor.module';

@Module({
  imports: [
    ProductorModule,
    GraphQLModule.forRoot({
      cors: {
        origin: 'http://localhost:4200',
        credentials: false,
      },
      typePaths: ['./**/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
        outputAs: 'class',
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
