export function add(numbers) {
    if (numbers === '') return 0;

    numbers = numbers.match(/-?\d+/g);

    const numArray = numbers ? numbers.map(Number) : [];

    const negatives = numArray.filter(num => num < 0);

    if (negatives.length) {
        throw new Error(`negative numbers not allowed: ${negatives.join(',')}`);
    }

    return numArray.reduce((sum, num) => sum + num, 0);
}