'use strict';

var hours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm','5:00pm', '6:00pm', '7:00pm', '8:00pm'];
var newKiosks = [];

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

  this.hourlyCustomers();
  this.cups();
  this.pounds();
  //when new kiosks instantiated push to newKiosks array
  newKiosks.push(this);
}
//generating random number
Kiosk.prototype.generateRandom = function(minCust , maxCust) {
  return Math.ceil(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
};

//calculate hourly customers
Kiosk.prototype.hourlyCustomers = function() {
  for (var i = 0; i < hours.length; i++){
   this.hourlyCust.push(this.generateRandom(this.minCust,this.maxCust));
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
  this.poundsHour.push((this.hourlyCust[i]*this.avgPounds).toFixed(1));
  // console.log(this.poundsHour);
  };
}

var pikePlace = new Kiosk ('Pike Place Market', 14, 55, 1.2, 3.7);
var capHill = new Kiosk ('Capital Hill', 32, 48, 3.2, 0.4);
var library = new Kiosk ('Seattle Public Library', 49, 75, 2.6, 0.2);
var slu = new Kiosk ('South Lake Union', 35, 88, 1.3, 3.7);
var airport = new Kiosk ('Airport', 68, 124, 1.1, 2.7);
var web = new Kiosk ('Website', 3, 6, 0, 6.7);

//lbs/hr table
var sectEl = document.getElementById('ttlPoundsTable');

var createTable = function() {
  var tableEl = document.createElement('table');
  var storeHours = ['Location','6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm','5:00pm', '6:00pm', '7:00pm', '8:00pm'];

  var row1 = document.createElement('tr');
  for(var i = 0; i < storeHours.length; i++) {
    var tableHead = document.createElement('th');
    tableHead.textContent = storeHours[i];
    row1.appendChild(tableHead);
  }
  tableEl.appendChild(row1);

  for (var m = 0; m < newKiosks.length; m++) {
    var row2 = document.createElement('tr');
    var head2 = document.createElement('th');
    head2.textContent = newKiosks[m].kioskName;
    row2.appendChild(head2);

      for(var n = 0; n < hours.length; n++) {
        var totalPounds = document.createElement('td');
        totalPounds.textContent = newKiosks[m].poundsHour[n];
        row2.appendChild(totalPounds);
      }
    tableEl.appendChild(row2);
  }
  sectEl.appendChild(tableEl);
}

createTable();
//table for customers/hour

var sectEl2 = document.getElementById('avgCustTable');
var createTable2 = function() {
  var tableEl = document.createElement('table');
  tableEl.setAttribute("id",  "dataTable");
  var storeHours = ['Location','6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm','5:00pm', '6:00pm', '7:00pm', '8:00pm'];

  var row1 = document.createElement('tr');
  for(var i = 0; i < storeHours.length; i++) {
    var tableHead = document.createElement('th');
    tableHead.textContent = storeHours[i];
    row1.appendChild(tableHead);
  }
  tableEl.appendChild(row1)

  for (var m = 0; m < newKiosks.length; m++) {
    var row2 = document.createElement('tr');
    var head2 = document.createElement('th');
    head2.textContent = newKiosks[m].kioskName;
    row2.appendChild(head2);
        for(var n = 0; n < hours.length; n++) {
        var totalPounds = document.createElement('td');
        console.log(newKiosks[m]);
        totalPounds.textContent = newKiosks[m].hourlyCust[n];
        row2.appendChild(totalPounds);
      }
    tableEl.appendChild(row2);
  }
  sectEl2.appendChild(tableEl);
}
createTable2();
//thurs js for new location add
function handlenewLocSubmit(event) {
  console.log(event);
  event.preventDefault();

  if (!event.target.kioskName.value || !event.target.minCust.value ||  !event.target.maxCust.value || !event.target.avgCups.value ||  !event.target.avgPounds.value ) {
   return alert('Fields cannot be empty!');
  }

  var new_Loc = event.target.kioskName.value;
  var min_Cust = parseInt(event.target.minCust.value);
  var max_Cust = parseInt(event.target.maxCust.value);
  var avg_Cups = parseInt(event.target.avgCups.value);
  var avg_Pounds = parseInt(event.target.avgPounds.value);

  var newLocation  = new Kiosk(new_Loc, min_Cust, max_Cust, avg_Cups, avg_Pounds);
  //clear existing tables
  //re-render both whole tables w new location
  sectEl.innerHTML = '';
  sectEl2.innerHTML = '';
  createTable();
  createTable2();
  event.target.kioskName.value = null;
  event.target.minCust.value = null;
  event.target.maxCust.value = null;
  event.target.avgCups.value = null;
  event.target.avgPounds.value = null;

    console.log("Places is now: " + newKiosks);
  console.log(newLocation);
}
  form_local.addEventListener('submit', handlenewLocSubmit);
