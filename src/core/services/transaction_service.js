const { v4: uuidv4 } = require('uuid');

let transactions = [];

exports.createTransaction = (data) => {
    const transaction = {
        id: uuidv4(),
        from: data.from,
        to: data.to,
        amount: data.amount,
        currency: data.currency || "USD",
        status: "PENDING",
        createdAt: new Date()
    };

    transactions.push(transaction);
    return transaction;
};

exports.updateTransactionStatus = (id, status) => {
    const tx = transactions.find(t => t.id === id);
    if (tx) tx.status = status;
    return tx;
};

exports.getTransaction = (id) => {
    return transactions.find(t => t.id === id);
};
