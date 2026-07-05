exports.validate = (message) => {
    if (!message.sender || !message.receiver || !message.amount) {
        throw new Error("Invalid MT103 message");
    }
    return true;
};
