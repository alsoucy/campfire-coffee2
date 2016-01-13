'use strict';

var hours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm','5:00pm', '6:00pm', '7:00pm', '8:00pm']

//constructor function
// function Kiosk (kioskName, minCust, maxCust, avgCups, avgPounds) {
//   this.kioskName = kioskName;
//   this.minCust = minCust;
//   this.maxCust = maxCust;
//   this.avgCups = avgCups;
//   this.avgPounds = avgPounds;

var pikePlace = {
  name: 'Pike Place',
  minCustomer: 14,
  maxCustomer: 55,
  hourlyCust: [],
  avgCupsCust: 1.2,
  avgBeansCust: 3.7,
  hourlyCups: [],
  dailyCups: 0,
  hourlyBeansByLb: [],
  dailyBeansbyLb: 0,
  allDailyBeans: 0,

  hourlyCustomers: function() {
    for (var i = 0; i < hours.length; i++){
     this.hourlyCust.push(Math.floor(Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer));
     console.log(pikePlace.hourlyCust);
   }
  },

  generateHourlyCups: function() {
    for (var i = 0; i < hours.length; i++) {
      var cups = this.avgCupsCust * this.hourlyCust[i];
      console.log(parseFloat(cups.toFixed(1)));
      this.hourlyCups.push(parseFloat(cups.toFixed(1)));
      this.dailyCups += cups;
      this.allDailyBeans += (cups / 20);
    }
  },

  generateHourlyBeansByLb: function() {
    for (var i = 0; i < hours.length; i++) {
      var beans = Math.floor(this.avgBeansCust * this.hourlyCust[i]);
      this.hourlyBeansByLb.push(beans);
      this.dailyBeansByLb += beans;
      console.log(pikePlace.hourlyBeansByLb);
    }
  },

  // render: function() {
  //   this.hourlyCustomers();
  //   this.generateHourlyCups();
  //   this.generateHourlyBeansByLb();

//     var tableEl = document.createElement('table');
//     tableEl.appendChild(document.createTextNode(this.name));
//     var sectionEl = document.getElementById('kiosk-data').appendChild(tableEl);
//
//     for (var i = 0; i < hours.length; i++) {
//       var liEl = document.createElement('li');
//       //6:00am: 86.5 lbs [23 customers, 27.6 cups (1.4 lbs), 85.1 lbs to-go]
//       liEl.textContent = hours[i] + ": " + this.allDailyBeans + ' [' + this.hourlyCust[i] + ' customers, ' + this.dailyCups + ' cups (' + (this.dailyCups / 20) + '), ' + this.dailyBeansByLb + ' lbs to-go]';
//       ulEl.appendChild(liEl);
//     }
//   }
// }

// pikePlace.hourlyCustomers();
// console.log(pikePlace.hourlyCust);
pikePlace.render();


//kiosk information
var pikePlace = new Kiosk ('Pike Place Market', 14, 55, 1.2, 3.7);
var capHill = new Kiosk ('Capital Hill', 32, 48, 3.2, 0.4);
var library = new Kiosk ('Seattle Public Library', 49, 75, 2.6, 0.2);
var slu = new Kiosk ('South Lake Union', 35, 88, 1.3, 3.7);
var airport = new Kiosk ('Airport', 68, 124, 1.1, 2.7);
var web = new Kiosk ('Website', 3, 6, 0, 6.7);



//   var generateRandom = function(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// };


//generate random number for number of customer
//   var generateRandom = function(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// };
//
// //lbs of coffee from cups of coffee
// //6 am
// //generate random number of customers
// var hr1 = generateRandom(pikePlace.minCust, pikePlace.maxCust);
// console.log(hr1);
// //number of lbs from cups
// var hr1CupPounds = (hr1*pikePlace.cups)/20;
// console.log(hr1CupPounds);
// //number of lbs sold as pounds
// var hr1Pounds = (hr1*pikePlace.pounds);
// console.log(hr1Pounds);
// //total number of lbs
// var hr1totalPounds = hr1CupPounds + hr1Pounds;
// console.log(hr1totalPounds);
