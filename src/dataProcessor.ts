// src/apiSimulator.ts

// Simulates an API call to fetch customer data
export function fetchCustomerData(): Promise<{ id: number; name: string }> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: 1,
        name: "Rocky Customer",
      });
    }, 1000); // 1 second delay to simulate API
  });
}

// Simulates an API call to fetch customer's order history
export function fetchOrderHistory(
  customer: { id: number; name: string }
): Promise<string[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        `Order for ${customer.name}: Laptop`,
        `Order for ${customer.name}: Phone`,
      ]);
    }, 1000); // 1 second delay
  });
}
