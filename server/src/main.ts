import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  // Create the API server
  const app = await NestFactory.create(AppModule);
  // Start the API server on port 3000
  await app.listen(3000);
}
bootstrap();
