import {isBalance} from "../src/isBalance";

test('Example 1', () => {
    expect(isBalance('()')).toBe(true);
});

test('Example 2', () => {
    expect(isBalance('()()')).toBe(true);
});

test('Example 3', () => {
    expect(isBalance(')(')).toBe(false);
});

test('Example 4', () => {
    expect(isBalance('')).toBe(true);
});

test('Example 5', () => {
    expect(isBalance('((()))')).toBe(true);
});

test('Example 6', () => {
    expect(isBalance('((()')).toBe(false);
});