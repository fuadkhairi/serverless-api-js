module.exports = (req, res) => {
    try {
        const randomNumber = Math.floor(Math.random() * 11);
        const isPrime = isPrimeNumber(randomNumber);

        res.setHeader('Content-Type', 'application/json');
        res.json({ is_success: true, value: randomNumber, is_prime: isPrime });
    } catch (error) {
        console.error('Error generating random number:', error);
        res.status(500).json({ is_success: false, error: 'Internal Server Error' });
    }
};

function isPrimeNumber(number) {
    if (number <= 1) return false;
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}
