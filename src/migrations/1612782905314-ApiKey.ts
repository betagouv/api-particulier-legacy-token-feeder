import { MigrationInterface, QueryRunner } from 'typeorm';

export class ApiKey1612782905314 implements MigrationInterface {
  name = 'ApiKey1612782905314';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "token" ADD "apiKey" character varying NOT NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "token" DROP COLUMN "apiKey"`);
  }
}
