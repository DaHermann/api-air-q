import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AqinoService } from './stations/aqino.service';
import { AuthMiddleware } from './api/auth.middleware';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
