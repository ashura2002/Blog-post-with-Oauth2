import { ApiProperty } from '@nestjs/swagger';
import { Comment } from 'src/modules/comments/entity/comment.entity';
import { Reaction } from 'src/modules/reactions/entity/reaction.entity';

export class ResponsePost {
  @ApiProperty()
  id: number;

  @ApiProperty()
  content: string;

  @ApiProperty()
  mediaUrls: string[] | null;

  @ApiProperty()
  comments: Comment[];

  @ApiProperty()
  reactions: Reaction[];

  @ApiProperty()
  visibility: string;

  @ApiProperty()
  isEdited: boolean;

  @ApiProperty()
  user: string;

  @ApiProperty()
  userId?: number;
}
