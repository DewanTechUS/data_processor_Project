// src/index.ts

import { getCustomerData, getOrderHistory } from "./customerService";

async function run() {
  console.log("Starting async demo...\n");

  try {
    const customer = await getCustomerData();
    console.log("Customer loaded:", customer);
  } catch (err) {
    console.error("Could not load customer:", err);
  }

  console.log("\n----------------------------\n");

  try {
    const orders = await getOrderHistory();
    console.log("Order History:", orders);
  } catch (err) {
    console.error("Could not load order history:", err);
  }

  console.log("\n Demo complete!\n");
}

run();
