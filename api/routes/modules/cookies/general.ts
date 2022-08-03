import { randomBytes } from "crypto";
import { Response } from "express";

declare interface CookieOptions extends Object {
    httpOnly: boolean,
    signed: boolean,
    sameSite: boolean | "strict" | "none" | "lax" | undefined,
    maxAge: number
};

/**
 * Function that generates a random token
 * @param bytes Number of bytes to generate.
 * @returns given number of bytes
 */
const tokenGenerator = (bytes: number): string => randomBytes(bytes).toString('hex');

export { CookieOptions, tokenGenerator };
