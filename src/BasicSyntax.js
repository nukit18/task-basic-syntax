export function romanToInteger(str) {
    let result = 0;
    const dict = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };
    for (let i = 0; i < str.length - 1; i += 1) {
        if (dict[str[i]] >= dict[str[i + 1]]) {
            result += dict[str[i]];
        } else {
            result -= dict[str[i]];
        }
    }
    result += dict[str[str.length - 1]];
    return result;
}
