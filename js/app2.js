'use strict';

var hours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm','5:00pm', '6:00pm', '7:00pm', '8:00pm'];
var allKiosks = [];
// var locatons = ['Pike Place Market', 'Capital Hill', 'Seattle Public Library', 'South Lake Union', 'Airport', 'Website']
// var pikePlace = new Kiosk ('Pike Place Market', 14, 55, 1.2, 3.7);
// var capHill = new Kiosk ('Capital Hill', 32, 48, 3.2, 0.4);
// var library = new Kiosk ('Seattle Public Library', 49, 75, 2.6, 0.2);
// var slu = new Kiosk ('South Lake Union', 35, 88, 1.3, 3.7);
// var airport = new Kiosk ('Airport', 68, 124, 1.1, 2.7);
// var web = new Kiosk ('Website', 3, 6, 0, 6.7);

// constructor function
function Kiosk (kioskName, minCust, maxCust, avgCups, avgPounds) {
  this.kioskName = kioskName;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCups = avgCups;
  this.avgPounds = avgPounds;
  this.hourlyCust = [];
  this.cupsHour = [];
  this.poundsHour = [];
  allKiosks.push(this);

  this.hourlyCustomers();
  this.cups();
  this.pounds();
}
//location info
// var locatons = ['Pike Place Market', 'Capital Hill', 'Seattle Public Library', 'South Lake Union', 'Airport', 'Website'];

//generating random number
Kiosk.prototype.generateRandom = function(minCust , maxCust) {
  return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
  // console.log(generateRandom);
};


//calculate hourly customers
Kiosk.prototype.hourlyCustomers = function() {
  for (var i = 0; i < hours.length; i++){
   this.hourlyCust.push(this.generateRandom(this.minCust,this.maxCust));
  //  console.log(this.hourlyCust);
 };
};

//calculate cups per hour in coffee lbs
Kiosk.prototype.cups = function() {
  for (var i = 0; i < hours.length; i++){
  this.cupsHour.push((this.hourlyCust[i]*this.avgCups)/20);
  // console.log(this.cupsHour);
  }
};
//calculate lbs per hour
Kiosk.prototype.pounds = function() {
  for (var i = 0; i < hours.length; i++){
  this.poundsHour.push(this.hourlyCust[i]*this.avgPounds);
  // console.log(this.poundsHour);
  }
};
//calculate total pounds


var pikePlace = new Kiosk ('Pike Place Market', 14, 55, 1.2, 3.7);
var capHill = new Kiosk ('Capital Hill', 32, 48, 3.2, 0.4);
var library = new Kiosk ('Seattle Public Library', 49, 75, 2.6, 0.2);
var slu = new Kiosk ('South Lake Union', 35, 88, 1.3, 3.7);
var airport = new Kiosk ('Airport', 68, 124, 1.1, 2.7);
var web = new Kiosk ('Website', 3, 6, 0, 6.7);

//table - not rendering!
function render(){
var hours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm','5:00pm', '6:00pm', '7:00pm', '8:00pm'];
var sectEl = document.getElementById('kiosk-data');
var tableEl = document.createElement('table');
var trEl = document.createElement('tr');
var thEl = document.createElement('th');
thEl.textContent = 'Hours';
trEl.appendChild(thEl);
for(var i = 0; i < hours.length; i++) {
 var tdEl = document.createElement('td');
 tdEl.textContent = hours[i];
 trEl.appendChild(tdEl);
 tableEl.appendChild(trEl);
 };
for( var j = 0; j < hours.length; j++) {

}
}

render();
