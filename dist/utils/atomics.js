"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomString = void 0;
var randomString = function (length) {
    var result = "";
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    var counter = 0;
    while (counter < length) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
    }
    return result;
};
exports.randomString = randomString;
//# sourceMappingURL=atomics.js.map