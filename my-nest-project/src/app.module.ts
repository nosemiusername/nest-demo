import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    CatsModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5431,
      username: 'nest',
      password: 'nest',
      database: 'nest',
      autoLoadEntities: true,
      synchronize: !!process.env.DB_SYNC
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
