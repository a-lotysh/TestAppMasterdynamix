import { Module } from '@nestjs/common';
import { PartnershipRequestController } from './partnership-request.controller';
import { PartnershipRequestService } from './partnership-request.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [PartnershipRequestController],
  providers: [PartnershipRequestService],
})
export class PartnershipRequestModule {}
