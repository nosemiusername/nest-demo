import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CatEntity } from './cats.entity';
import { CatMapper } from './cat.mappers';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { CatRepository } from './cats.repository';

@Module({
  imports: [TypeOrmModule.forFeature([CatEntity])],
  controllers: [CatsController],
  providers: [CatsService, CatRepository, CatMapper]
})
export class CatsModule { }
