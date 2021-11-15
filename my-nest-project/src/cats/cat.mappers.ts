import { Injectable } from "@nestjs/common";
import { CreateCatDto } from "../dto/create-cat.dto";
import { CatEntity } from "./cats.entity";

@Injectable()
export class CatMapper {

    dtoToEntity(catDTO: CreateCatDto): CatEntity {
        return new CatEntity(catDTO.id, catDTO.name, catDTO.age, catDTO.breed);
    }

    entityToDto(catEntity: CatEntity): CreateCatDto {
        return new CreateCatDto(catEntity.id, catEntity.name, catEntity.age, catEntity.breed);
    }

}
