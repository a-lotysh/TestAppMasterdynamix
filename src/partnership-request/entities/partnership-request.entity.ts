import { ApiProperty } from '@nestjs/swagger';

export class PartnershipRequest {
  @ApiProperty()
  id: number;

  @ApiProperty()
  companyName: string;

  @ApiProperty()
  email: string;
}
