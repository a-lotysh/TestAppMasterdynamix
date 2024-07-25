import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class PartnershipRequestService {
  constructor(
    private prisma: PrismaService
  ) {}

  async create(data: Prisma.PartnershipRequestCreateInput) {
    return this.prisma.partnershipRequest.create({ data });
  }
}
