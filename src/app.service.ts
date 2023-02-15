import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';
import { PostDto } from './dto/redisArgStructure.dto';

@Injectable()
export class AppService {
  constructor(@Inject(CACHE_MANAGER) private readonly cacheManager: Cache) {}
  
  async setKey(PostDto: PostDto) {
    await this.cacheManager.set(PostDto.key, PostDto.value); 
  }

  async getKey(key: string) {
    return await this.cacheManager.get(key);
  }
}