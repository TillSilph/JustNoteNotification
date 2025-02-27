import { Module } from '@nestjs/common';
import { NotificationModule } from './kafka/notification.module';
import { ConfigModule } from "@nestjs/config"

@Module({
  imports: [NotificationModule, ConfigModule.forRoot()],
  controllers: [],
  providers: [],
})
export class AppModule {}
