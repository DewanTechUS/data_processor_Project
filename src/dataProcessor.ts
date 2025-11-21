// src/apiSimulator.ts

import { wait, mayFail } from "./utils";

// Simulates fetching customer data
export async function fetchCustomerData(): Promise<{ id: number; name: string }> {
  console.log("⏳ Fetching customer data...");
  await wait(1000); // delay

  mayFail(); // randomly fail

  return {
    id: 1,
    name: "Rocky Customer",
  };
}

// Simulates fetching customer's order history
export async function fetchOrderHistory(
  customer: { id: number; name: string }
): Promise<string[]> {
  console.log(`⏳ Fetching order history for ${customer.name}...`);
  await wait(1000);

  mayFail(); // randomly fail again

  return [
    `Order for ${customer.name}: Laptop`,
    `Order for ${customer.name}: Phone`,
    `Order for ${customer.name}: Keyboard`,
  ];
}
