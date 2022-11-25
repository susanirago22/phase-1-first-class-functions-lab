const drivers = [ 'Susan', 'Joy', 'Irene']
const returnFirstTwoDrivers = (drivers) => 
{
    const newArray = drivers.slice(0, 2);
    return (newArray);
}
const returnLastTwoDrivers = (drivers) =>
{
    const lastTwoElements = drivers.slice(-2);
    return (lastTwoElements);
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = (num) =>
{
   return () => num * 5
      
}
const fareDoubler = (fare) =>
{
    return fare * 2;
}
const fareTripler = (far) => 
{
    return far * 3;
}
const selectDifferentDrivers = (drivers,func) =>
{
   return func(drivers);
}