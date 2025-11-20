// src/customerService.ts

import { fetchCustomerData, fetchOrderHistory } from "./dataProcessor";

// Uses async/await to get customer data
export async function getCustomerData() {
  const customer = await fetchCustomerData();
  return customer;
}

// Uses async/await to get the customer's order history
export async function getOrderHistory() {
  const customer = await fetchCustomerData(); // Step 1: get customer
  const history = await fetchOrderHistory(customer); // Step 2: use customer
  return history; // Step 3: return history
}
