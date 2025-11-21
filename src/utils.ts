// src/utils.ts

// A helper function to create delays
export function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Random API error generator (30% chance)
export function mayFail() {
  if (Math.random() < 0.3) {
    throw new Error("Random API failure");
  }
}
