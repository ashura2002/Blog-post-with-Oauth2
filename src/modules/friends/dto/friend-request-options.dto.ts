import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty } from 'class-validator';
import { FriendStatus } from 'src/common/Enums/friend-status-enum';

export class RequestOptionsDTO {
  @IsNotEmpty()
  @ApiProperty()
  @IsEnum(FriendStatus)
  status: FriendStatus;
}
