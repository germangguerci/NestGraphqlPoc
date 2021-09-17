import { ProductorService } from './productor.service';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Productor } from 'src/graphql';
import { CreateProductorDto } from './dto/create-productor.dto';

@Resolver('Productor')
export class ProductorResolver {
  constructor(private readonly productorService: ProductorService) {}

  @Query('productores')
  async getCats() {
    return this.productorService.findAll();
  }

  @Query('productor')
  async findOneById(
    @Args('id')
    id: string,
  ): Promise<Productor> {
    return this.productorService.findOneById(id);
  }

  @Mutation('addProductor')
  async create(@Args() args: CreateProductorDto): Promise<Productor> {
    return this.productorService.create(args);
  }
}
