import fs from "fs";
import { readFile } from "./mock_module";

jest.mock("fs"); // fsモジュールをモックする
const mockFs = jest.mocked(fs); // モック化したfsモジュールを取得する
mockFs.readFileSync.mockReturnValue("mocked data"); // モック化したfsモジュールのreadFileSyncメソッドをモック化する

it("readFileがデータを返却する", () => {
  const result = readFile("path/dummy");
  expect(result).toBe("mocked data");
  expect(mockFs.readFileSync).toHaveBeenCalledTimes(1);
});
