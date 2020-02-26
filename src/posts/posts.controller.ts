import { Controller, Get, Post, Body } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiPropertyOptional, ApiProperty } from '@nestjs/swagger';

class CreatePostDto {
  @ApiProperty({ description: '帖子详情' })
  title: string
  @ApiProperty({ description: '帖子内容' })
  content: string
}

@Controller('posts')
@ApiTags('默认')

export class PostsController {

  @Get()
  @ApiOperation({
    summary: '显示博客列表'
  })
  index() {
    return [11]
  }

  @Post()
  @ApiOperation({
    summary: '创建帖子'
  })

  @Post()
  @ApiOperation({ summary: '创建帖子' })
  create(@Body() body: CreatePostDto) {
    return body
  }

  @Get(':id')
  detail() {
    return {
      id: 1,
      title: '111'
    }
  }


}
