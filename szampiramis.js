function Piramis (n) {
  let result = [];
  for (let i = 0; i < n.length - 1; i++) {
    let a = n[i] + n[i + 1];
    result.push(a);
    if (n.length > 0);
  }
  console.log(result);
}

Piramis([1, 2, 3, 4, 5]);

