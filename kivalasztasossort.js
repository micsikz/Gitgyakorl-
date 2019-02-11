function kivalasztasos (n) {
  for (let i = 0; i < n.length; i++) {
    let min = -100000;
    for (let j = 0; j < n.length; j++){
      if (min < n[j]) {
      min = n[j];
      let ertek = j;
      let temp = n[j];
        n[j] = n[ j + 1 ];
        n[ j + 1 ] = temp;
      }
    }
  } return n;
}

let pelda1 = kivalasztasos([9, 15, 2, 87, 24]);
console.log(pelda1);
