let a = 10;
let b = 0;

try {
  if (b === 0) {
    throw new Error("Division by zero is not allowed");
  }
  let result = a / b;
  console.log("Result:", result);
} catch (error) {
  console.log("Error:", error.message);
}
