import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { NotificationGateway } from 'src/kafka/notification.gateway';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class NotificationSchedulerService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly notificationService: NotificationGateway,
  ) {}

  @Cron('*/1 * * * *')
  async handleCron() {
    const now = new Date();

    const notes = await this.prisma.timer.findMany();
    console.log(notes);

    for (const note of notes) {
        const notificationDate = new Date(+(note.notificationTime as string));
      if (notificationDate <= now) {
        await this.notificationService.sendNotification(note);
        await this.prisma.timer.delete({
          where: { id: note.id },
        });
      }
    }
  }
}


