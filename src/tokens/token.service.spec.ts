import { TokenService } from 'src/tokens/token.service';

describe('The TokenService', () => {
  it('computes the hash of a provided API key', () => {
    const tokenService = new TokenService();

    const expectedHash =
      '810240f7217f360e634e0291f644d421d10dc00b271ded4a23bd44898fb4c71762587e3f106e5a8bba96344592b5fbfe22eb425c0a10a59404f632f5669fe598';

    const actualHash = tokenService.computeApiKeyHash(
      '2f52fc00-7057-4aa9-a145-811ad990d0ea',
    );

    expect(expectedHash).toBe(actualHash);
  });
});
