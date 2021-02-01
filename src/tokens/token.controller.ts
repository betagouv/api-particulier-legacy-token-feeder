import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Token } from 'src/tokens/token.entity';
import { TokenService } from 'src/tokens/token.service';
import { Repository } from 'typeorm';

@Controller()
export class TokenController {
  constructor(
    private readonly tokenService: TokenService,
    @InjectRepository(Token)
    private readonly tokenRepository: Repository<Token>,
  ) {}

  @Get('/tokens/:token')
  async getApiKeyHash(@Param() params): Promise<string> {
    const { token } = params;
    const hash = this.tokenService.computeApiKeyHash(token);

    const foundToken = await this.tokenRepository.findOne({ hash });

    if (foundToken) {
      return hash;
    }

    throw new NotFoundException();
  }
}
