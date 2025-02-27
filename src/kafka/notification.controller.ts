import { Controller, Get } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { NotificationGateway } from './notification.gateway';

@Controller()
export class NotificationController {
  constructor(private readonly notificationGateway: NotificationGateway) {}

  @MessagePattern('notification')
  handleNotification(@Payload() message: any) {
    this.notificationGateway.sendNotification(message);
  }
  
  @Get('test-ws')
  testWs() {
    const testMessage = { text: 'Тестовое WS уведомление' };
    this.notificationGateway.sendNotification(testMessage);
    return { status: 'Отправлено тестовое уведомление' };
  }
}
