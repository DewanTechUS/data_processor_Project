// src/index.ts

import { getCustomerData, getOrderHistory } from "./customerService";

async function run() {
  console.log("Fetching customer...");
  const customer = await getCustomerData();
  console.log("Customer:", customer);

  console.log("Fetching order history...");
  const orders = await getOrderHistory();
  console.log("Order History:", orders);
}

// Start the async flow
run();
