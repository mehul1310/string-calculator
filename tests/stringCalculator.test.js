import { add } from '@/utils/stringCalculator';

test('returns 0 for an empty string', () => {
    expect(add("")).toBe(0);
});

test('returns 0 for a string with only delimiters and no numbers', () => {
    expect(add(",")).toBe(0);
    expect(add("\n")).toBe(0);
    expect(add(",\n,")).toBe(0);
});

test('returns 0 for an input with only delimiters and no numbers', () => {
    expect(add(",,,")).toBe(0);
    expect(add("\n\n\n")).toBe(0);
});

test('returns the number itself for a single number', () => {
    expect(add("5")).toBe(5);
});

test('handles input with a single number and trailing delimiters', () => {
    expect(add("5,")).toBe(5);
    expect(add("5\n")).toBe(5);
});

test('handles large numbers', () => {
    expect(add("1000,2000,3000")).toBe(6000);
});

test('handles spaces around numbers', () => {
    expect(add(" 1 , 2 , 3 ")).toBe(6);
});

test('returns the sum of two numbers', () => {
    expect(add("1,2")).toBe(3);
});

test('handles new line as delimiter', () => {
    expect(add("1\n2,3")).toBe(6);
});

test('returns the correct sum for multiple numbers separated by newlines and commas', () => {
    expect(add("1\n2,3\n4,5")).toBe(15);
});

test('returns the correct sum for numbers separated by newlines only', () => {
    expect(add("1\n2\n3")).toBe(6);
});

test('supports custom delimiters', () => {
    expect(add("//;\n1;2")).toBe(3);
});

test('supports multiple delimiters', () => {
    expect(add("//[@][!]\\n1@2!3")).toBe(6);
});

test('handles custom multi-character delimiters correctly', () => {
    expect(add("//[***]\n1***2***3")).toBe(6);
});

test('handles a large number of inputs', () => {
    const numbers = Array(1000).fill(1).join(",");
    expect(add(numbers)).toBe(1000);
});

test('throws error for negative numbers', () => {
    expect(() => add("1,-2,-3")).toThrow("negative numbers not allowed: -2,-3");
});
