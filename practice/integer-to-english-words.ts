export function numberToWords(num: number): string {
    if (num === 0) {
        return "Zero";
    }

    const belowTwenty = [
        "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten",
        "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"
    ];

    const tens = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];

    const thousands = ["", "Thousand", "Million", "Billion"];

    const toWords = (num: number): string => {
        if (num === 0) {
            return "";
        } else if (num < 20) {
            return belowTwenty[num - 1];
        } else if (num < 100) {
            const ten = Math.floor(num / 10);
            const remainder = num % 10;
            return tens[ten] + (remainder > 0 ? " " + toWords(remainder) : "");
        } else {
            const hundred = Math.floor(num / 100);
            const remainder = num % 100;
            return belowTwenty[hundred - 1] + " Hundred" + (remainder > 0 ? " " + toWords(remainder) : "");
        }
    };

    let words = "";
    let index = 0;

    while (num > 0) {
        if (num % 1000 !== 0) {
            words = toWords(num % 1000) + " " + thousands[index] + " " + words;
        }
        num = Math.floor(num / 1000);
        index++;
    }

    return words.trim();
}

