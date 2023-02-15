import { CACHE_MANAGER, Param, Controller, Body, Get, Post, Inject } from '@nestjs/common';
import { Cache } from 'cache-manager';
import { PostDto } from './dto/redisArgStructure.dto';

@Controller()
export class AppController {
  constructor(
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {}

  @Get('/:key')
  async getValue(@Param('key') key: string): Promise<string>  {
    const value: string = await this.cacheManager.get(key);
    console.log(value);
    return value;
  }

  @Post()
  async setValue(@Body() PostDto: PostDto) {
    console.log(PostDto)
    await this.cacheManager.set(PostDto.key, PostDto.value);
  }
} 