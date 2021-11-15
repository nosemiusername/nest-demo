import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { CreateCatDto } from '../dto/create-cat.dto';
import { CatEntity } from './cats.entity';
import { CatMapper } from './cat.mappers';
import { Cat } from 'src/interfaces/cat.interface';

@Injectable()
export class CatRepository {
    constructor(@InjectRepository(CatEntity)
    private catRepository: Repository<CatEntity>,
        private mapper: CatMapper) { }

    findAll(): Promise<CatEntity[]> {
        return this.catRepository.find();
    }

    findOne(id: string): Promise<CatEntity> {
        return this.catRepository.findOne(id)
    }

    create(catDTO: CreateCatDto): Promise<CatEntity> {
        const newCat = this.mapper.dtoToEntity(catDTO)
        return this.catRepository.save(newCat);
    }

}
