import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { TokenModule } from 'src/tokens/token.module';
import { TypeOrmModule } from '@nestjs/typeorm';

describe('TokenController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [
        TokenModule,
        TypeOrmModule.forRoot({
          type: 'sqlite',
          database: 'test/test.sqlite',
          migrationsRun: true,
          migrations: ['src/migrations/**.ts'],
          autoLoadEntities: true,
        }),
      ],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('returns a 404 when the API key hash is not known', () => {
    return request(app.getHttpServer()).get('/tokens/croute').expect(404);
  });
  it('returns the token when the API key hash is found', () => {
    return request(app.getHttpServer())
      .get('/tokens/5e42e6a7-3640-4068-b413-0965605efb6d')
      .expect(200)
      .expect({
        id: 'effd3315-487c-4e79-9225-28f303edac2b',
        hash:
          '57bd72af633a0eadae1cb076e2d1c62621d46b8d65d4fb1856c6f7fb3cd58f9d3da03897762e2748eaeff5f6d358e48515a367220a661a37ac3bea630d6f0ad9',
        apiKey: '861aa151-53cd-44c4-843f-563918f402d5',
      });
  });
});
