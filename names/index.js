const name = require("../country/state/city");
const firstName = require("../utilities/utils");
const getPeopleInCity = (list) => {
  return firstName(list);
};
module.exports = getPeopleInCity;
