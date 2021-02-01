import { Injectable } from '@nestjs/common';
import * as crypto from 'crypto';

@Injectable()
export class TokenService {
  computeApiKeyHash(apiKey: string) {
    const hash = crypto.createHash('sha512');
    const hashedKey = hash.update(apiKey);

    return hashedKey.digest('hex');
  }
}
