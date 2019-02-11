function fibonacci (n) {
  let temp;
  let a = 1;
  let b = 1;
  for (let i = 1; i <= n - 2; i++) {
    temp = a + b;
    a = b;
    b = temp;
  }
  return temp;
}

let onellenorzes = fibonacci(8);
console.log(onellenorzes == 21);

let pelda1 = fibonacci(3);
console.log(pelda1);
