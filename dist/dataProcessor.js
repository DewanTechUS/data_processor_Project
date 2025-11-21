"use strict";
// src/apiSimulator.ts
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
exports.fetchCustomerData = fetchCustomerData;
exports.fetchOrderHistory = fetchOrderHistory;
const utils_1 = require("./utils");
// Simulates fetching customer data
function fetchCustomerData() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("⏳ Fetching customer data...");
        yield (0, utils_1.wait)(1000); // delay
        (0, utils_1.mayFail)(); // randomly fail
        return {
            id: 1,
            name: "Rocky Customer",
        };
    });
}
// Simulates fetching customer's order history
function fetchOrderHistory(customer) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(`⏳ Fetching order history for ${customer.name}...`);
        yield (0, utils_1.wait)(1000);
        (0, utils_1.mayFail)(); // randomly fail again
        return [
            `Order for ${customer.name}: Laptop`,
            `Order for ${customer.name}: Phone`,
            `Order for ${customer.name}: Keyboard`,
        ];
    });
}
