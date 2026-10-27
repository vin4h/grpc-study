import { Module } from '@nestjs/common';
import { ProductController } from './product.controller.js';

@Module({
  imports: [],
  controllers: [ProductController],
  providers: [],
})
export class ProductModule {}
