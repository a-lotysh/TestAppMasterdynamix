import { Module } from '@nestjs/common';
import { PartnershipRequestModule } from './partnership-request/partnership-request.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [PartnershipRequestModule, PrismaModule],
})
export class AppModule {}
