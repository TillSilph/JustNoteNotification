import { WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway({ cors: true })
export class NotificationGateway {
  @WebSocketServer()
  server: Server;

  sendNotification(message: any) {
    this.server.emit('notification', message);
  }
}
