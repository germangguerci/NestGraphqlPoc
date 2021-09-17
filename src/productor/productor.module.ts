import { Module } from '@nestjs/common';
import { ProductorResolver } from './productor.resolver';
import { ProductorService } from './productor.service';
@Module({
  imports: [],
  providers: [ProductorService, ProductorResolver],
})
export class ProductorModule {}
