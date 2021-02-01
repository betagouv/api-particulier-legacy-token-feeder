import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TokenController } from 'src/tokens/token.controller';
import { Token } from 'src/tokens/token.entity';
import { TokenService } from 'src/tokens/token.service';

@Module({
  imports: [TypeOrmModule.forFeature([Token])],
  providers: [TokenService],
  controllers: [TokenController],
})
export class TokenModule {}
