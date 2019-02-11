function caeser (szoveg) {

  let hossz = szoveg.length;

  let result = '';

  for (let i = 0; i < hossz; i++) {

    let temp = szoveg.charCodeAt(i) - 1;

    result += String.fromCharCode(temp);
  }
  return result;

}
let pelda1 = caeser('benjo');
console.log(pelda1 =='admin');

let pelda2 = caeser('benjo');
console.log(pelda2)
