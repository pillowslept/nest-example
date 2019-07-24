import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config } from 'config';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix(config.PREFIX);
  await app.listen(config.PORT);
  Logger.log(`Server started at port: ${config.PORT}`, 'Bootstrap');
}
bootstrap();
