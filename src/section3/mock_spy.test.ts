import { Calculator } from "./mock_spy";

it("sumメソッドが呼ばれること", () => {
  const calculator = new Calculator();
  const spy = jest.spyOn(calculator, "sum");
  const result = calculator.sum(1, 2);
  expect(result).toBe(3);
  expect(spy).toHaveBeenCalledTimes(1);
  expect(spy).toHaveBeenCalledWith(1, 2); // スパイを設定したメソッドが引数1と引数2で呼び出されたかどうか確認できる

  spy.mockRestore(); // スパイを元に戻す afterEachでやるとよい
});
