function beszurasos (n) {
  for (let i = 1; i < n.length; i++) {
    let key = n[i];
    let j = i - 1;
    while (j >= 0 && n[j] < key) {
      n[j + 1] = n[j];
      j = j - 1;
      n[j + 1] = key;
    }
  } return n;
}

let pelda1 = beszurasos([99, 7, 4, 56, 12]);
console.log(pelda1);
