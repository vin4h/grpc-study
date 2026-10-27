import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import type { Product, ProductById } from './product.interface.js';

@Controller()
export class ProductController {
  @GrpcMethod('ProductService', 'FindOne')
  findOne(data: ProductById): Product | undefined {
    const items = [
      { id: 1, name: 'Camera' },
      { id: 2, name: 'Celular' },
    ];
    return items.find(({ id }) => id === data.id);
  }
}
