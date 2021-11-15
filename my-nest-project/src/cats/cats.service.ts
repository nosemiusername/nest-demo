import { Injectable } from '@nestjs/common';
import { CatMapper } from './cat.mappers';
import { CatEntity } from './cats.entity';
import { CatRepository } from './cats.repository';
import { CreateCatDto } from '../dto/create-cat.dto'

@Injectable()
export class CatsService {
    constructor(
        private catRepository: CatRepository,
        private mapper: CatMapper) { }

    async create(catDTO: CreateCatDto): Promise<CreateCatDto> {
        const newCat: CatEntity = await this.catRepository.create(catDTO);
        return this.mapper.entityToDto(newCat);
    }

    async findAll(): Promise<CreateCatDto[]> {
        const cats: CatEntity[] = await this.catRepository.findAll();
        return cats.map(cat => this.mapper.entityToDto(cat))
    }

}

