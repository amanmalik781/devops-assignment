function calculateFactorial(n) {
    // factorial
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * calculateFactorial(n - 1);
    }
}

module.exports = calculateFactorial;
