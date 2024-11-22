import { NestFactory } from '@nestjs/core';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule, 
    new FastifyAdapter({ logger: true })
  );
  app.useGlobalPipes( new ValidationPipe({
    whitelist: true
  }))

  app.setGlobalPrefix('vehicle-estimation-reports');
  await app.listen({ port: 3000 });
}
bootstrap();
