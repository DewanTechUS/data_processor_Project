"use strict";
// src/utils.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.wait = wait;
exports.mayFail = mayFail;
// A helper function to create delays
function wait(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
// Random API error generator (30% chance)
function mayFail() {
    if (Math.random() < 0.3) {
        throw new Error("Random API failure");
    }
}
