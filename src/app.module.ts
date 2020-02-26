import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsService } from './cats/cats.controller.service';
import { CatsController } from './cats/cats.controller';
import { PostsModule } from './posts/posts.module';

@Module({
  imports: [PostsModule],
  controllers: [AppController, CatsController],
  providers: [AppService,CatsService],
})
export class AppModule {}
