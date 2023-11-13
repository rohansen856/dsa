export default function plusOne(digits: number[]): number[] {
    const n: number = digits.length;
    let carry: number = 1;

    for (let i: number = n - 1; i >= 0; i--) {
        const total: number = digits[i] + carry;
        digits[i] = total % 10;
        carry = Math.floor(total / 10);
    }

    if (carry) {
        digits.unshift(carry);
    }

    return digits;
}