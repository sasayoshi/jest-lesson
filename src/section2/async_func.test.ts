import { delay } from "./async_func";

it("delayが指定された時間語にメッセージを返す", async () => {
  const result = await delay("hello", 1000);
  expect(result).toBe("hello");
});

it("timeがマイナスの場合はエラーが発生する", async () => {
  try {
    const result = await delay("hello", -1);
  } catch (error: any) {
    expect(error.message).toBe("timeは0以上で指定してください");
  }
});
