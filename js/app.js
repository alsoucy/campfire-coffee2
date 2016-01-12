var pikePlace = {
  minCust: 14,
  maxCust: 55,
  cups: 1.2,
  pounds: 3.7,
};
//data as arrays
// var coffeeKiosk = {
//   kiosk:['pikePlace', 'capHill', 'library', 'slU', 'airport', 'web'],
//   minCust: [14, 32, 49, 35, 68, 3],
//   maxCust: [55, 48, 75, 88, 124, 6],
//   cups: [1.2, 3.2, 2.6, 1.3, 1.1, 0],
//   pounds: [3.7, 0.4, 0.2, 3.7, 2.7, 6.7],
// };
//generate random number for number of customers
//should this be in the object?
  var generateRandom = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

//lbs of coffee from cups of coffee
//6 am
//generate random number of customers
var hr1 = generateRandom(pikePlace.minCust, pikePlace.maxCust);
console.log(hr1);
//number of lbs from cups
var hr1CupPounds = (hr1*pikePlace.cups)/20;
console.log(hr1CupPounds);
//number of lbs sold as pounds
var hr1Pounds = (hr1*pikePlace.pounds);
console.log(hr1Pounds);
//total number of lbs
var hr1totalPounds = hr1CupPounds + hr1Pounds;
console.log(hr1totalPounds);

//7 am
var hr2 = generateRandom(pikePlace.minCust, pikePlace.maxCust);
console.log(hr2);
//number of lbs from cups
var hr2CupPounds = (hr2*pikePlace.cups)/20;
console.log(hr2CupPounds);
//number of lbs sold as pounds
var hr2Pounds = (hr2*pikePlace.pounds);
console.log(hr2Pounds);
//total number of lbs
var hr2totalPounds = hr2CupPounds + hr2Pounds;
console.log(hr2totalPounds);

//8 am
var hr3 = generateRandom(pikePlace.minCust, pikePlace.maxCust);
console.log(hr3);
//number of lbs from cups
var hr3CupPounds = (hr3*pikePlace.cups)/20;
console.log(hr3CupPounds);
//number of lbs sold as pounds
var hr3Pounds = (hr3*pikePlace.pounds);
console.log(hr3Pounds);
//total number of lbs
var hr3totalPounds = hr3CupPounds + hr3Pounds;
console.log(hr3totalPounds);
