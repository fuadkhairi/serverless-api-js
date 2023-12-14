module.exports = (req, res) => {
    try {
        const previousCount = parseInt(req.query.count) || 0;
        const newCount = generateFibonacciCount(previousCount);
        res.setHeader('Content-Type', 'application/json');
        res.json({ is_success: true, renamed_count: newCount });
    } catch (error) {
        console.error('Error renaming Pokemon:', error);
        res.status(500).json({ is_success: false, error: 'Internal Server Error' });
    }
};

function generateFibonacciCount(count) {
    function fibonacci(n) {
        if (n <= 1) return n;
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
    const renameCount = fibonacci(count);
    return `${renameCount}`;
}
