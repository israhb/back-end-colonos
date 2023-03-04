import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config/dist';
import { SERVER_PORT } from './config/constants';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  //port
  const port = +configService.get<number>(SERVER_PORT);

  //TODO aqui va el swagger
  const config = new DocumentBuilder()
    .setTitle('Apis Colonos')
    .setDescription('Apis para Portal y App')
    .setVersion('1.0.0')
    .addTag('auth')
    .addTag('estado')
    .addTag('fraccionamiento')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('documentation', app, document);
  //TODO uso de pipes para validaicon de campos en las dto
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(port);
}
bootstrap();
