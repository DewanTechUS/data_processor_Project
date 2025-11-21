// src/customerService.ts

import { fetchCustomerData, fetchOrderHistory } from "./dataProcessor";

// Retry helper (try a function X times)
async function retry<T>(fn: () => Promise<T>, attempts = 3): Promise<T> {
  let lastError;
  for (let i = 1; i <= attempts; i++) {
    try {
      return await fn();
    } catch (err) {
      console.warn(`Attempt ${i} failed. Retrying...`);
      lastError = err;
    }
  }
  throw lastError;
}

// Returns customer data with retry
export async function getCustomerData() {
  return retry(fetchCustomerData, 3);
}

// Returns customer order history with retry
export async function getOrderHistory() {
  const customer = await retry(fetchCustomerData, 3);
  const history = await retry(() => fetchOrderHistory(customer), 3);
  return history;
}
