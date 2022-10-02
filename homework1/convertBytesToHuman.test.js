import convertBytesToHuman from './convertBytesToHuman';
import expect from "expect";
import InvalidConvertDataError from "./errors/InvalidConvertDataError.js";

test('Выбрасавает исключение для неправильного типа данных', () => {
    expect(() => {
        convertBytesToHuman("a")
    }).toThrowError(InvalidConvertDataError);
});

test('Выбрасавает исключение для отрицательного числа', () => {
    expect(() => {
        convertBytesToHuman(-3)
    }).toThrowError(InvalidConvertDataError);
});

test.each([
    [5, '5.00 B'],
    [2048, '2.00 KB'],
    [1024 ** 2, "1.00 MB"],
    [1024 ** 3, "1.00 GB"],
    [1024 ** 4, "1.00 TB"]
])("Вовзращает корректное значение для всех типов размеров %i %s", (bytes, result) => {
    expect(convertBytesToHuman(bytes)).toBe(result)
})

test('Возращает нецелое значение с точностью до двух знаков', () => {
    expect(convertBytesToHuman(123123123)).toBe("117.42 MB")
})