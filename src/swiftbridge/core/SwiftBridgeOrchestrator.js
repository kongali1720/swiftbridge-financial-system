const SwiftMessageFactory = require('./SwiftMessageFactory');
const DeutscheBankAdapter = require('../adapters/deutsche_bank/DeutscheBankAdapter');

class SwiftBridgeOrchestrator {
    static async send(transaction) {
        const message = SwiftMessageFactory.create("MT103", transaction);

        // routing logic (simplified)
        const adapter = new DeutscheBankAdapter();

        const response = await adapter.send(message);

        return {
            status: "SENT",
            bankResponse: response
        };
    }
}

module.exports = SwiftBridgeOrchestrator;
