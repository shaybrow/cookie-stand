'use strict';

//global variables
let containerParent = document.getElementById('container-parent');
let hours = ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM'];
let storeList = ['Stores'];
let stores = [];
let hourBought = [];
let storeTable = document.getElementById('table');

function BuildStore(loc, minCust, maxCust, avgCookie,) {
  this.location = loc;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookie = avgCookie;
  this.dailyTotal = 0;
  this.cookiesBought = [];
  this.boughtTotal = 0;
  storeList.push(loc);
  stores.push(this);

}

BuildStore.prototype.randomNum = function () {
  return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
}

BuildStore.prototype.cookiesHour = function () {
  let bought = Math.round(this.randomNum() * this.avgCookie);
  this.cookiesBought.push(bought);
  this.boughtTotal += bought;
  return bought;
}

BuildStore.prototype.renderTable = function () {
  let parentElement = document.getElementById('table');
  let tr = document.createElement('tr');
  storeTable.appendChild(tr);

  let th = document.createElement('th');
  th.textContent = this.location;
  tr.appendChild(th);

  for (let i = 0; i < hours.length; i++) {
    let td = document.createElement('td');
    td.textContent = this.cookiesHour();
    tr.appendChild(td);
  }
  let td = document.createElement('td');
  td.textContent = this.boughtTotal;
  tr.appendChild(td);
}

// new BuildStore('nepal', 1, 25, 10, 0);
// new BuildStore('bham', 1, 25, 10);
new BuildStore('seattle', 23, 65, 6.3);
new BuildStore('tokyo', 3, 24, 1.2);
new BuildStore('dubai', 11, 38, 3.7);
new BuildStore('paris', 20, 38, 2.3);
new BuildStore('lima', 2, 16, 4.6);

function createTHead() {

  let tHead = document.createElement('thead');
  storeTable.appendChild(tHead);
  let tr = document.createElement('tr');
  tHead.appendChild(tr);
  let th = document.createElement('th');
  th.textContent = ` `;
  tr.appendChild(th);
  for (let i = 0; i < hours.length; i++) {
    th = document.createElement('th');
    th.textContent = hours[i];
    tr.appendChild(th);
  }
  let total = document.createElement('th');
  total.textContent = `Total`;
  tr.appendChild(total);

}

function createTFoot() {
  let tFoot = document.createElement('tfoot');
  storeTable.appendChild(tFoot);
  let tr = document.createElement('tr');
  tFoot.appendChild(tr);
  let th = document.createElement('th');
  th.textContent = `hourly total`;
  tr.appendChild(th);
  let grandTotal = 0;
  for (let j = 0; j < stores[0].cookiesBought.length; j++) {
    let hourlyTotal = 0;
    for (let i = 0; i < stores.length; i++) {
      hourlyTotal = stores[i].cookiesBought[j] + hourlyTotal;

    }
    grandTotal += hourlyTotal;
    let td = document.createElement('td');
    td.textContent = hourlyTotal;
    tr.appendChild(td);
  }
  let td = document.createElement('td');
  td.textContent = grandTotal;
  tr.appendChild(td);
}

function renderStores() {
  for (let i = 0; i < stores.length; i++) {
    stores[i].renderTable();
  }
}
renderStores();
createTHead();
createTFoot();