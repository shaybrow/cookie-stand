'use strict';

//global variables
let containerParent = document.getElementById('container-parent');
let seattleList = document.getElementById('seattle');
let tokyoList = document.getElementById('tokyo');
let dubaiList = document.getElementById('dubai');
let parisList = document.getElementById('paris');
let limaList = document.getElementById('lima');
let hours = ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM'];


//objects
let seattleStore = {
  location: 'Seattle',
  minCust: 23,
  maxCust: 65,
  avgCookie: 6.3,
  cookiesBought: [],
  randomNum: function () {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  cookiesHour: function () {
    let bought = Math.round(this.randomNum() * this.avgCookie);
    this.cookiesBought.push(bought);
    return bought;
  },
  renderArray: function () {
    for (var i = 0; i < hours.length; i++) {
      // create element
      let liElement = document.createElement('li');
      // give content
      liElement.textContent = `${hours[i]}: ${this.cookiesHour()} cookies`;
      // append to dom
      seattleList.appendChild(liElement);
    }
  },
  soldTotal: function () {
    let sum = 0;
    for (var i = 0; i < this.cookiesBought.length; i++) {
      sum += this.cookiesBought[i];
    }
    // create ele
    let liElement = document.createElement('li');
    // give content
    liElement.textContent = `Total: ${sum} cookies`;
    // append to dom
    seattleList.appendChild(liElement);
  },
};

let tokyoStore = {
  location: 'Tokyo',
  minCust: 3,
  maxCust: 24,
  avgCookie: 1.2,
  cookiesBought: [],
  randomNum: function () {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  cookiesHour: function () {
    let bought = Math.round(this.randomNum() * this.avgCookie);
    this.cookiesBought.push(bought);
    return bought;
  },
  renderArray: function () {
    for (var i = 0; i < hours.length; i++) {
      // create element
      let liElement = document.createElement('li');
      // give content
      liElement.textContent = `${hours[i]}: ${this.cookiesHour()} cookies`;
      // append to dom
      tokyoList.appendChild(liElement);
    }
  },
  soldTotal: function () {
    let sum = 0;
    for (var i = 0; i < this.cookiesBought.length; i++) {
      sum += this.cookiesBought[i];
    }
    // create ele
    let liElement = document.createElement('li');
    // give content
    liElement.textContent = `Total: ${sum} cookies`;
    // append to dom
    tokyoList.appendChild(liElement);
  },
};

let dubaiStore = {
  location: 'Dubai',
  minCust: 11,
  maxCust: 38,
  avgCookie: 3.7,
  cookiesBought: [],
  randomNum: function () {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  cookiesHour: function () {
    let bought = Math.round(this.randomNum() * this.avgCookie);
    this.cookiesBought.push(bought);
    return bought;
  },
  renderArray: function () {
    for (var i = 0; i < hours.length; i++) {
      // create element
      let liElement = document.createElement('li');
      // give content
      liElement.textContent = `${hours[i]}: ${this.cookiesHour()} cookies`;
      // append to dom
      dubaiList.appendChild(liElement);
    }
  },
  soldTotal: function () {
    let sum = 0;
    for (var i = 0; i < this.cookiesBought.length; i++) {
      sum += this.cookiesBought[i];
    }
    // create ele
    let liElement = document.createElement('li');
    // give content
    liElement.textContent = `Total: ${sum} cookies`;
    // append to dom
    dubaiList.appendChild(liElement);
  },


};
let parisStore = {
  location: 'Paris',
  minCust: 20,
  maxCust: 38,
  avgCookie: 2.3,
  cookiesBought: [],
  randomNum: function () {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  cookiesHour: function () {
    let bought = Math.round(this.randomNum() * this.avgCookie);
    this.cookiesBought.push(bought);
    return bought;
  },
  renderArray: function () {
    for (var i = 0; i < hours.length; i++) {
      // create element
      let liElement = document.createElement('li');
      // give content
      liElement.textContent = `${hours[i]}: ${this.cookiesHour()} cookies`;
      // append to dom
      parisList.appendChild(liElement);
    }
  },
  soldTotal: function () {
    let sum = 0;
    for (var i = 0; i < this.cookiesBought.length; i++) {
      sum += this.cookiesBought[i];
    }
    // create ele
    let liElement = document.createElement('li');
    // give content
    liElement.textContent = `Total: ${sum} cookies`;
    // append to dom
    parisList.appendChild(liElement);
  },
};
let limaStore = {
  location: 'Lima',
  minCust: 2,
  maxCust: 16,
  avgCookie: 4.6,
  cookiesBought: [],
  randomNum: function () {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  cookiesHour: function () {
    let bought = Math.round(this.randomNum() * this.avgCookie);
    this.cookiesBought.push(bought);
    return bought;
  },
  renderArray: function () {
    for (var i = 0; i < hours.length; i++) {
      // create element
      let liElement = document.createElement('li');
      // give content
      liElement.textContent = `${hours[i]}: ${this.cookiesHour()} cookies`;
      // append to dom
      limaList.appendChild(liElement);
    }
  },
  soldTotal: function () {
    let sum = 0;
    for (var i = 0; i < this.cookiesBought.length; i++) {
      sum += this.cookiesBought[i];
    }
    // create ele
    let liElement = document.createElement('li');
    // give content
    liElement.textContent = `Total: ${sum} cookies`;
    // append to dom
    limaList.appendChild(liElement);
  },
};
// 1. make element 
// 2. give it content
// 3. add to DOM


// //1
// let sectionElem = document.createElement('section');

// //2 will do later

// //3 
// containerParent.appendChild(sectionElem);

// //1
// let h2Element = document.createElement('h2');
// //2
// h2Element.textContent = ('Try our delicious salmon cookies');
// //3
// sectionElem.appendChild(h2Element);

// //1
// let pElement = document.createElement('p');

// //2 
// pElement.textContent = tokyoStore.location;

// //3
// containerParent.appendChild(pElement);

//call it
seattleStore.renderArray();
seattleStore.soldTotal();
tokyoStore.renderArray();
tokyoStore.soldTotal();
dubaiStore.renderArray();
dubaiStore.soldTotal();
parisStore.renderArray();
parisStore.soldTotal();
limaStore.renderArray();
limaStore.soldTotal();


