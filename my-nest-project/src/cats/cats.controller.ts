import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CreateCatDto } from '../dto/create-cat.dto';

@Controller('cats')
export class CatsController {
    constructor(private readonly catsService: CatsService) { }

    @Post()
    async create(@Body() createCatDto: CreateCatDto) {
        this.catsService.create(createCatDto);
    }

    @Get()
    async findAll(): Promise<CreateCatDto[]> {
        return this.catsService.findAll();
    }

    // @Get(':id')
    // async findOne(@Param("id") id): Promise<CreateCatDto> {
    //     return this.catsService.findOne(id);
    // }
}