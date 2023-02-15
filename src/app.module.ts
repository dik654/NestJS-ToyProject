import 'dotenv/config';
import { CacheModule, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { RedisService } from './app.service';
import { RedisModule } from '@nestjs-modules/ioredis';

@Module({
  imports: [
    RedisModule.forRoot({
      config: {
        url: `redis://${process.env.REDIS_HOST}:${process.env.REDIS_PORT}`,
        password: process.env.REDIS_PASSWORD, 
      },
    })
  ],
  controllers: [AppController],
  providers: [RedisService],
})
export class AppModule {}