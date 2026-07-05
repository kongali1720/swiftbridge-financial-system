class Transaction {
    constructor(id, from, to, amount, currency, status) {
        this.id = id;
        this.from = from;
        this.to = to;
        this.amount = amount;
        this.currency = currency;
        this.status = status;
        this.createdAt = new Date();
    }
}

module.exports = Transaction;
