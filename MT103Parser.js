exports.parse = (message) => {
    return {
        transactionId: message.reference,
        status: "RECEIVED"
    };
};
