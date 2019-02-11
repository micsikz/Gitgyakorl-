let readlineSync = require('readline-sync');
let bodyParts = ['Fej', 'Jobb kéz', 'Bal kéz', 'Törzs', 'Bal láb', 'Jobb láb'];
let index = readlineSync.keyInSelect(bodyParts, 'Melyik testrészed fáj?');

console.log('Ez a szám fog meggyógyítani!');
let minGeneratedData = 1;
let maxGeneratedData = 1000000;

let randomnm = (minGeneratedData, maxGeneratedData) => {
       return Math.floor(Math.random()*maxGeneratedData) + minGeneratedData;
};
console.log(randomnm);

let algorithmPicker = i => {
  switch (i) {
    case 0:
      let Fej = randomnm(minGeneratedData, maxGeneratedData);
      if (Fej % 3 === 0 && Fej % 4 !== 0) {
        console.log(Fej); }
      return Fej;
    case 1:
      let ballab = randomnm(minGeneratedData, maxGeneratedData);
      console.log(ballab);
      return ballab;
  }
};
