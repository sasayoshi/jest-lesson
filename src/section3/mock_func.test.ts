it("はじめてのmock", () => {
  // jest.fn
  const mockFunc = jest.fn(() => "hello mock");
  expect(mockFunc()).toBe("hello mock");
});

it("mockImplementation", () => {
  const mockFunc = jest.fn();
  mockFunc.mockImplementation(() => "hello mock2");
  expect(mockFunc()).toBe("hello mock2");
});
