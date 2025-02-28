# JustNoteNotification

JustNoteNotification — это сервис-уведомлений, реализующий Kafka-консьюмера для [JustNote](https://github.com/TillSilph/JustNote). Он обрабатывает события, полученные через Kafka, и отправляет их клиентам с использованием WebSocket.

## Стек технологий
- **Node.js** — среда выполнения
- **NestJS** — фреймворк для построения серверного приложения
- **KafkaJS** — клиент для работы с Apache Kafka
- **WebSockets (socket.io)** — механизм реального времени для отправки уведомлений
- **TypeScript** — статическая типизация

## Функциональность
- Получение сообщений из Kafka-топика
- Обработка и фильтрация событий
- Отправка уведомлений клиентам через WebSocket
- Настройки через .env-файл с использованием @nestjs/config
- Масштабируемая микросервисная архитектура

## Запуск проекта

### Установка зависимостей
```sh
npm install
```

### Запуск в режиме разработки
```sh
npm run start:dev
```

### Запуск в продакшене
```sh
npm run build && npm run start:prod
```

## Конфигурация
Для работы с Kafka и WebSocket необходимо создать файл `.env` и указать в нём:
```env
KAFKA_URL=your_kafka_broker_url
PORT=your_port_for_notification
```