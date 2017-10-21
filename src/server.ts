import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './modules/app.module';
import * as BodyParser from "body-parser";

async function bootstrap() {
  const app = await NestFactory.create(ApplicationModule);
  app.use(BodyParser.json())
  await app.listen(3000);
}
bootstrap();
