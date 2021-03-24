import * as cache from 'memory-cache';
import { CacheStorage } from '../interfaces/cache-storage.interface';

export class InMemoryCacheStorage implements CacheStorage {
  set(key: string, value: string, expiresIn: number) {
    cache.put(key, value, expiresIn);
  }

  async get(key: string): Promise<string> {
    return cache.get(key);
  }
}
