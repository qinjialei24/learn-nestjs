import { Controller, Get, Post } from '@nestjs/common';

@Controller('posts')
export class PostsController {

  @Get()
  index() {
    return [11]
  }

  @Post()
  create() {
    return true
  }

  @Get(':id')
  detail() {
    return {
      id: 1,
      title:'111'
    }
  }


}
