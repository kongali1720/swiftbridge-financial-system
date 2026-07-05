const paymentService = require('../../core/services/payment_service');

exports.sendTransaction = async (req, res) => {
    try {
        const payload = req.body;

        const result = await paymentService.processPayment(payload);

        res.status(200).json({
            status: "SUCCESS",
            data: result
        });
    } catch (error) {
        res.status(500).json({
            status: "FAILED",
            message: error.message
        });
    }
};
