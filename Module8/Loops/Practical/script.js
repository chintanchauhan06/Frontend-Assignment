// Task 1 :

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// Task 2 :

let sum = 0;
let i = 1;

while (i <= 20) {
  if (i % 2 === 0) {
    sum = sum + i;
  }
  i++;
}

console.log("Sum of even numbers:", sum);

// Task 3 :

let number;

do {
  number = Number(prompt("Enter a number greater than 10:"));
} while (number <= 10);

console.log("You entered:", number);
