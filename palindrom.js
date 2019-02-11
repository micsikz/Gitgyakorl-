function palindrom (szoveg) {
  let visszaszo = '';
  for (let i = szoveg.length - 1; i >= 0; i--) {
    visszaszo += szoveg[i];
  }
  return szoveg == visszaszo;

}

let pelda1 = palindrom('dsdgorog');
console.log(pelda1);