"use strict";
// src/index.ts
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
const customerService_1 = require("./customerService");
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("Starting async demo...\n");
        try {
            const customer = yield (0, customerService_1.getCustomerData)();
            console.log("Customer loaded:", customer);
        }
        catch (err) {
            console.error("Could not load customer:", err);
        }
        console.log("\n----------------------------\n");
        try {
            const orders = yield (0, customerService_1.getOrderHistory)();
            console.log("Order History:", orders);
        }
        catch (err) {
            console.error("Could not load order history:", err);
        }
        console.log("\n Demo complete!\n");
    });
}
run();
