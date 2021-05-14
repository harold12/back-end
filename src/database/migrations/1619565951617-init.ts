import {MigrationInterface, QueryRunner} from "typeorm";

export class init1619565951617 implements MigrationInterface {
    name = 'init1619565951617'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "flights" ALTER COLUMN "nonstop" SET DEFAULT false`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "flights" ALTER COLUMN "nonstop" DROP DEFAULT`);
    }

}
