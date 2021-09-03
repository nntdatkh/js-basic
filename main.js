const section = document.querySelector('section');

let para1 = document.createElement('p');
let para2 = document.createElement('p');

let motherInfo = 'The mother cats are called ';
let kittenInfo;

fetch('sample.json')
.then(response => response.text())
.then(text => displayCatInfo(text))

function setMotherInfo(arrayCat) {
  for (let i = 0; i < arrayCat.length; i++) {
    if (i === 0)
      motherInfo += arrayCat[i].name;
    else if (i === arrayCat.length - 1)
      motherInfo += ` and ${arrayCat[i].name}.`;
    else
      motherInfo += `, ${arrayCat[i].name}`;
  }
}

function totalKittens(arrayCat) {
  let total = 0;
  for (let i = 0; i < arrayCat.length; i++) {
    total += arrayCat[i].kittens.length;
  }
  return total;
}

function countMaleKitten(arrayCat) {
  let countM = 0; // male
  for (let i = 0; i < arrayCat.length; i++) {
    for (let j = 0; j < arrayCat[i].kittens.length; j++) {
      if (arrayCat[i].kittens[j].gender === 'm')
        countM++;
    }
  }
  return countM;
}

function displayCatInfo(catString) {
  let total = 0;
  let male = 0;

  // Add your code here
const catJson = JSON.parse(catString); 

setMotherInfo(catJson);
total = totalKittens(catJson);
male = countMaleKitten(catJson);

kittenInfo = `There are total ${total} kittens with ${male} males and ${total - male} females.`;

// Don't edit the code below here!

  para1.textContent = motherInfo;
  para2.textContent = kittenInfo;
}

section.appendChild(para1);
section.appendChild(para2);