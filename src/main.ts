import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotEnv from 'dotenv';

dotEnv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.SERVER_PORT || 9000);
  console.log(`Static server is running on: ${await app.getUrl()}`);
}
bootstrap();
