import { Module } from '@nestjs/common';
import {
  NestjsQueryGraphQLModule,
  PagingStrategies,
} from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { CreateDisciplineInput } from './dto/create-discipline.input';
import { DisciplineDTO } from './dto/discipline.dto';
import { UpdateDisciplineInput } from './dto/update-discipline.input';
import { Discipline } from './entities/discipline.entity';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([Discipline])],
      resolvers: [
        {
          DTOClass: DisciplineDTO,
          EntityClass: Discipline,
          CreateDTOClass: CreateDisciplineInput,
          UpdateDTOClass: UpdateDisciplineInput,
          enableTotalCount: true,
          pagingStrategy: PagingStrategies.OFFSET,
        },
      ],
    }),
  ],
  providers: [],
})
export class DisciplinesModule {}
