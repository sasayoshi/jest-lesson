it("モック関数に戻り値を設定する", () => {
  const mockFunc = jest.fn();
  mockFunc.mockReturnValue(10);
  expect(mockFunc()).toBe(10);
  expect(mockFunc()).toBe(10);
  expect(mockFunc()).toBe(10);
});

it("モック関数に1度だけ返される戻り値を設定する", () => {
  const mockFunc = jest.fn();
  mockFunc.mockReturnValueOnce(10);
  expect(mockFunc()).toBe(10);
  expect(mockFunc()).toBe(undefined);
});

it("モック関数に非同期な戻り値を設定する", async () => {
  const mockFunc = jest.fn();
  mockFunc.mockResolvedValue("hello async");
  const resurt = await mockFunc();
  expect(resurt).toBe("hello async");
});
