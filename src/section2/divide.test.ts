// toThrow

import { divide, ZeroDivisorError } from "./divide";

it("0で割るとエラーが発生する", () => {
  // 例外処理をテストする際は無名関数でラップする必要がある
  // その理由は、テスト対象の関数でエラーが発生すると、マッチャーのtoThrow関数が呼ばれる前に関数の実行が停止してしまい、ジェストがエラーを検証できなくなるためです
  expect(() => divide(10, 0)).toThrow("0で割ることはできません");
  expect(() => divide(10, 0)).toThrow(ZeroDivisorError);
});
