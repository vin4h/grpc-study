import { NestFactory } from '@nestjs/core';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { AppModule } from './app.module.js';
import { join } from 'path';
import { ReflectionService } from '@grpc/reflection';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.GRPC,
      options: {
        package: 'product',
        protoPath: join(import.meta.dirname, 'product/product.proto'),
        onLoadPackageDefinition: (pkg, server) => {
          new ReflectionService(pkg).addToServer(server);
        },
      },
    },
  );
  await app.listen();
}
await bootstrap();
