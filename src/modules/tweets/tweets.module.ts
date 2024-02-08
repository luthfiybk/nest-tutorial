import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { TweetsRepository } from './tweets.repository';
import { TweetsService } from './tweets.service';

/* eslint-disable */
@Module({
    imports: [PrismaModule],
    providers: [TweetsRepository, TweetsService],
    exports: [TweetsService],
})
export class TweetsModule {}
