'use strict';

//global variables
let containerParent = document.getElementById('container-parent');
let seattleList = document.getElementById('seattle');
let hours = ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM'];

// function randomCust(min, max) {
//   let today = Math.floor(Math.random() * max + 1);

//   while (today < min) {
//     today = Math.floor(Math.random() * max);

//   }
//   console.log(today);
//   return today;

// }
// randomCust(23, 65);

//objects
let seattleStore = {
  location: 'Seattle',
  minCust: 23,
  maxCust: 65,
  avgCookie: 6.3,
  renderArray: function () {
    // for (var i =0; i< array.length){}
    // create element
    // let liElement = document.createElement('li');
    // give content
    // liElement.textContent = this.something[i];
    //append to dom
    // 
  },
}

let tokyoStore = {
  location: 'Tokyo',
  minCust: 3,
  maxCust: 24,
  avgCookie: 1.2,
  randomNum: function () {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  //populate array with amount per time
  //render list with total
  hourSales: function () {

  }
}

let dubaiStore = {
  location: 'Dubai',
  minCust: 11,
  maxCust: 38,
  avgCookie: 3.7,
  sales: [],
  dailyTotal: 0,


}
let parisStore = {
  location: 'Paris',
  minCust: 20,
  maxCust: 38,
  avgCookie: 2.3,

}
let limaStore = {
  location: 'Lima',
  minCust: 2,
  maxCust: 16,
  avgCookie: 4.6,

  listPrint: function () {

  }
}
// 1. make element 
// 2. give it content
// 3. add to DOM


//1
let sectionElem = document.createElement('section');

//2 will do later

//3 
containerParent.appendChild(sectionElem);

//1
let h2Element = document.createElement('h2');
//2
h2Element.textContent = ('Try our delicious salmon cookies');
//3
sectionElem.appendChild(h2Element);

//1
let pElement = document.createElement('p');

//2 
pElement.textContent = tokyoStore.location;

//3
containerParent.appendChild(pElement);


