import { Controller, Post, Body } from '@nestjs/common';
import { PartnershipRequestService } from './partnership-request.service';
import { CreatePartnershipRequestDto } from './dto';
import { ApiTags } from '@nestjs/swagger';
import { plainToInstance } from 'class-transformer';
import { PartnershipRequest } from './entities/partnership-request.entity';

@ApiTags('partnership-request')
@Controller('partnership-request')
export class PartnershipRequestController {
  constructor(
    private readonly partnershipRequestService: PartnershipRequestService,
  ) {}

  @Post()
  async create(@Body() createPartnershipDto: CreatePartnershipRequestDto) {
    const partnership =
      await this.partnershipRequestService.create(createPartnershipDto);

    return plainToInstance(PartnershipRequest, partnership);
  }
}
