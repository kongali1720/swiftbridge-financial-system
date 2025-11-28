const BaseAdapter = require('../base_adapter');
const axios = require('axios'); // Example using axios for HTTP requests

/**
 * DeutscheBankAdapter.js
 * 
 * Concrete implementation for connecting to Deutsche Bank's API.
 * It extends BaseAdapter and implements the specific logic required by Deutsche Bank.
 */
class DeutscheBankAdapter extends BaseAdapter {
    constructor(config) {
        super(config);
        this.client = axios.create({
            baseURL: this.config.apiEndpoint,
            auth: {
                username: this.config.credentials.apiKey,
                password: this.config.credentials.secret
            }
        });
    }

    /**
     * Sends an MT103 message to Deutsche Bank.
     * @param {string} mt103Message - The SWIFT MT103 message.
     * @returns {Promise<object>} The parsed response from the bank.
     */
    async send(mt103Message) {
        try {
            // Deutsche Bank expects a JSON payload
            const payload = {
                swift_message: mt103Message,
                // Add any other required fields for Deutsche Bank's API
                ...this.config.specificFields
            };

            const response = await this.client.post('/payments', payload);
            return this.parseResponse(response.data);

        } catch (error) {
            console.error("Error sending payment to Deutsche Bank:", error.response ? error.response.data : error.message);
            throw error;
        }
    }

    /**
     * Parses Deutsche Bank's specific response format.
     * @param {object} responseData - The raw data from the API response.
     * @returns {object} A standardized response object.
     */
    parseResponse(responseData) {
        return {
            status: responseData.status, // e.g., 'ACCEPTED', 'REJECTED'
            transactionId: responseData.transaction_id,
            timestamp: new Date().toISOString(),
            raw: responseData
        };
    }
}

module.exports = DeutscheBankAdapter;
