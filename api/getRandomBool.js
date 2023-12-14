module.exports = (req, res) => {
    try {
        const randomBool = Math.random() < 0.5;
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json({ is_success: true, value: randomBool });
    } catch (error) {
        console.error('Error generating random boolean:', error);
        res.status(500).json({ is_success: false, error: 'Internal Server Error' });
    }
};
