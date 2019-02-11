function buborek (n) {
  for (let i = 0; i < n.length; i++) {
    // console.log(i);
    for (let j = 0; j < n.length - i - 1; j++) {
      // console.log(j);
      if (n[j] > n[ j + 1 ]) {
        let temp = n[j];
        n[j] = n[ j + 1 ];
        n[ j + 1 ] = temp;
      }
    }
  }
  return n;
}

let pelda1 = buborek([5, 8, 1, 3]);
console.log(pelda1);
