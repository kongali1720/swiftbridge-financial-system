const MT103Builder = require('../messages/MT103/MT103Builder');

class SwiftMessageFactory {
    static create(type, data) {
        switch (type) {
            case "MT103":
                return MT103Builder.build(data);
            default:
                throw new Error("Unsupported SWIFT type");
        }
    }
}

module.exports = SwiftMessageFactory;
