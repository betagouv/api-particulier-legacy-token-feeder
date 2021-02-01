import { MigrationInterface, QueryRunner } from 'typeorm';

export class TokenTable1612190757348 implements MigrationInterface {
  name = 'TokenTable1612190757348';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "token" ("id" uuid NOT NULL, "hash" character varying NOT NULL, CONSTRAINT "PK_82fae97f905930df5d62a702fc9" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "token"`);
  }
}
