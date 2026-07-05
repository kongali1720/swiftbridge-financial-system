exports.build = (tx) => {
    return {
        type: "MT103",
        sender: tx.from,
        receiver: tx.to,
        amount: tx.amount,
        currency: tx.currency,
        reference: tx.id,
        timestamp: new Date().toISOString()
    };
};
