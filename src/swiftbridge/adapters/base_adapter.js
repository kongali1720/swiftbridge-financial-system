/**
 * BaseAdapter.js
 * 
 * This is the abstract base class for all bank-specific adapters.
 * It defines the common interface that every adapter must implement.
 * This ensures that the SwiftBridgeOrchestrator can interact with any bank
 * in a standardized way.
 */
class BaseAdapter {
    constructor(config) {
        if (new.target === BaseAdapter) {
            throw new Error("BaseAdapter is an abstract class and cannot be instantiated directly.");
        }
        this.config = config;
    }

    /**
     * Sends a SWIFT message to the bank.
     * @param {string} mt103Message - The fully formatted SWIFT MT103 message string.
     * @returns {Promise<object>} A promise that resolves to the bank's response.
     */
    async send(mt103Message) {
        throw new Error("The 'send' method must be implemented by the subclass.");
    }

    /**
     * Parses the raw response from the bank.
     * @param {object} response - The raw response object from the bank's API.
     * @returns {object} A standardized response object.
     */
    parseResponse(response) {
        throw new Error("The 'parseResponse' method must be implemented by the subclass.");
    }
}

module.exports = BaseAdapter;
