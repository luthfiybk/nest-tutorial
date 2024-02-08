import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

/* eslint-disable */
@Module({
    providers: [PrismaService],
    exports: [PrismaService],
})

export class PrismaModule {}