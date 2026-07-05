const transactionService = require('./transaction_service');
const SwiftBridgeOrchestrator = require('../../swiftbridge/core/SwiftBridgeOrchestrator');

exports.processPayment = async (payload) => {
    const transaction = transactionService.createTransaction(payload);

    const swiftResponse = await SwiftBridgeOrchestrator.send(transaction);

    transactionService.updateTransactionStatus(transaction.id, swiftResponse.status);

    return {
        transaction,
        swiftResponse
    };
};
