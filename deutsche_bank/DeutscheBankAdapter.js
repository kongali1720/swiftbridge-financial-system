const BaseAdapter = require('../base_adapter');

class DeutscheBankAdapter extends BaseAdapter {
    async send(message) {
        console.log("Sending to Deutsche Bank:", message);

        return {
            bank: "DEUTSCHE_BANK",
            status: "ACCEPTED",
            messageId: "DB-" + Date.now()
        };
    }
}

module.exports = DeutscheBankAdapter;
