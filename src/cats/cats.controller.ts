import { Controller, Get, Param } from '@nestjs/common';
import { CatsService } from './cats.controller.service';


@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {
  }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    return this.catsService.getCat(id);
  }
}
