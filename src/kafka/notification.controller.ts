import { Controller, Get } from "@nestjs/common";
import { MessagePattern, Payload } from "@nestjs/microservices";
import { NotificationGateway } from "./notification.gateway";
import { PrismaService } from "src/prisma/prisma.service";

@Controller()
export class NotificationController {
    constructor(
        private readonly prisma: PrismaService,
        private readonly notificationGateway: NotificationGateway
    ) {}

    @MessagePattern("notification")
    async handleNotification(@Payload() message: any) {
        const { notificationTime, id } = message;
        await this.prisma.timer.create({
            data: { notificationTime, id },
        });
    }

    @Get("test-ws")
    testWs() {
        const testMessage = { text: "Тестовое WS уведомление" };
        this.notificationGateway.sendNotification(testMessage);
        return { status: "Отправлено тестовое уведомление" };
    }
}
