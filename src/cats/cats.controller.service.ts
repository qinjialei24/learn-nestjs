import { Injectable } from '@nestjs/common';

@Injectable()
export class CatsService {
  getCat(id: string) {
    return id;
  }
}
