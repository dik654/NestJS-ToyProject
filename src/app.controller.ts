import { CACHE_MANAGER, Controller, Get, Inject } from '@nestjs/common';
import { InjectRedis, Redis} from '@nestjs-modules/ioredis';
import { Cache } from 'cache-manager'
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    @Inject(CACHE_MANAGER) private cacheManager: CacheQueryOptions,
    @InjectRedis() private readonly redis: Redis,
    private readonly appService: AppService
  ) {}

  @Get() 
  getHello():  string {
    return this.appService.getHello();
  }
}