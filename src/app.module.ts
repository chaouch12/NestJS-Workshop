import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArticlesModule } from './domains/articles/articles.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [ArticlesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
