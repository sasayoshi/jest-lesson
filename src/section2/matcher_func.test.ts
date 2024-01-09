// toBe
it("数値のテスト", () => {
  expect(1 + 2).toBe(3);
});

it("文字列のテスト", () => {
  expect("TEST").toBe("TEST");
});

// toEqual
it("配列のテスト", () => {
  const arr1 = [1, 2, 3];
  const arr2 = [1, 2, 3];

  expect(arr1).toEqual(arr2);
});

it("オブジェクトのテスト", () => {
  const obj1 = { a: 1, b: 2, c: 3 };
  const obj2 = { a: 1, b: 2, c: 3 };

  expect(obj1).toEqual(obj2);
});

it("1+2は4ではないテスト", () => {
  expect(1 + 2).not.toBe(4);
});
