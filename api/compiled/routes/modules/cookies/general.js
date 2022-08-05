"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tokenGenerator = void 0;
const crypto_1 = require("crypto");
;
/**
 * Function that generates a random token
 * @param bytes Number of bytes to generate.
 * @returns given number of bytes
 */
const tokenGenerator = (bytes) => (0, crypto_1.randomBytes)(bytes).toString('hex');
exports.tokenGenerator = tokenGenerator;
