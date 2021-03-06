import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, MinLength, ValidateIf } from 'class-validator';

/**
 * Register a new user.
 */
export class RegisterPayload {

  @MinLength(3)
  @ApiProperty({
    description: 'The user name',
    required: true
  })
  name: string;

  @IsEmail()
  @ApiProperty({
    description: 'The user email',
    required: true,
  })
  email: string;

  @MinLength(8)
  @ApiProperty({
    description: 'The user password (less 8 signs or more)',
    required: true,
  })
  password: string;

  @ValidateIf((o) => o.password !== o.repeat)
  @MinLength(8)
  @ApiProperty({
    description: 'The user password as repeat',
    required: true,
  })
  repeat: string;

  @MinLength(1)
  @ApiProperty({
    description: 'The access code',
    required: true,
  })
  accessCode: string;
}
