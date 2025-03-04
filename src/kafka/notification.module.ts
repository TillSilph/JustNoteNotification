import { Module } from '@nestjs/common';
import { NotificationController } from './notification.controller';
import { NotificationGateway } from './notification.gateway';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [NotificationController],
  providers: [NotificationGateway, PrismaService],
  exports: [NotificationGateway]
})
export class NotificationModule {}
