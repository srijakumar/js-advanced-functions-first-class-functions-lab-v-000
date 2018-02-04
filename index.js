// Code your solution in this file!
const returnFirstTwoDrivers= function(drivers){
  return drivers.slice(0,2);
}

const returnLastTwoDrivers = function(drivers){
  const n = drivers.length;
  return drivers.slice(n-2, n);
}


const selectingDrivers = [ returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier= function fareDoubler(fare){
  return fare * 2;
}


