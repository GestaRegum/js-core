import { sequence } from "./sequence";

describe("sequence", () => {
  it("Правильно работает с отрицательными числами", () => {
    expect(sequence(-2, -2)).toBe(-2);
    expect(sequence(-5, -1)).toBe(-15); // -5 -4 -3 -2 -1 = -15
  });

  it("Возвращает NaN, если начальное число больше конечного", () => {
    expect(sequence(5, 1)).toBeNaN();
  });

  it("Правильно работает с большими числами", () => {
    expect(sequence(1000, 1000)).toBe(1000);
    expect(sequence(1000, 1005)).toBe(6015);
  });

  it("Обрабатывает некорректные типы данных", () => {
    expect(sequence("1", "5")).toBeNaN();
    expect(sequence(null, undefined)).toBeNaN();
    expect(sequence({}, [])).toBeNaN();
  });
});
