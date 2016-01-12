var pikePlace = {
  minCust: 14,
  maxCust: 55,
  cups: 1.2,
  pounds: 3.7,
};
//generate random number for number of customers
//should this be in the object?
  var generateRandom = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
//console.log(generateRandom(14,55));
//lbs of coffee from cups of coffee
//9 am
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
var totalPounds = hr1CupPounds + hr1Pounds;
console.log(totalPounds);
