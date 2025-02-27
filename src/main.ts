import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Подключение микросервиса с транспортом Kafka
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.KAFKA,
    options: {
      client: {
        brokers: [process.env.KAFKA_URL??'localhost:9092'], // замените на адреса ваших брокеров
      },
      consumer: {
        groupId: 'notification-group', // уникальный идентификатор группы
      },
    },
  });

  await app.startAllMicroservices();
  await app.listen(process.env.PORT??5090);
}
bootstrap();
