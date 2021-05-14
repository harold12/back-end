"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.init1619565951617 = void 0;
class init1619565951617 {
    constructor() {
        this.name = 'init1619565951617';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "flights" ALTER COLUMN "nonstop" SET DEFAULT false`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "flights" ALTER COLUMN "nonstop" DROP DEFAULT`);
    }
}
exports.init1619565951617 = init1619565951617;
//# sourceMappingURL=1619565951617-init.js.map