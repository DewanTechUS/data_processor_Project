"use strict";
// src/customerService.ts
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCustomerData = getCustomerData;
exports.getOrderHistory = getOrderHistory;
const dataProcessor_1 = require("./dataProcessor");
// Retry helper (try a function X times)
function retry(fn_1) {
    return __awaiter(this, arguments, void 0, function* (fn, attempts = 3) {
        let lastError;
        for (let i = 1; i <= attempts; i++) {
            try {
                return yield fn();
            }
            catch (err) {
                console.warn(`Attempt ${i} failed. Retrying...`);
                lastError = err;
            }
        }
        throw lastError;
    });
}
// Returns customer data with retry
function getCustomerData() {
    return __awaiter(this, void 0, void 0, function* () {
        return retry(dataProcessor_1.fetchCustomerData, 3);
    });
}
// Returns customer order history with retry
function getOrderHistory() {
    return __awaiter(this, void 0, void 0, function* () {
        const customer = yield retry(dataProcessor_1.fetchCustomerData, 3);
        const history = yield retry(() => (0, dataProcessor_1.fetchOrderHistory)(customer), 3);
        return history;
    });
}
