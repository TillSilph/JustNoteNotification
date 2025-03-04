import { Module } from '@nestjs/common';
import { NotificationModule } from './kafka/notification.module';
import { ConfigModule } from "@nestjs/config"
import { NotificationSchedulerService } from './ScheduleModule/notification-scheduler.service';
import { ScheduleModule } from '@nestjs/schedule';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [ScheduleModule.forRoot(), NotificationModule, ConfigModule.forRoot()],
  controllers: [],
  providers: [PrismaService, NotificationSchedulerService],
})
export class AppModule {}
