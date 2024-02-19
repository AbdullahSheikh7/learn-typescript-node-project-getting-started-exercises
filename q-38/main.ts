function describe_city(city: string, country: string = "Pakistan") {
  console.log(`${city} is in ${country}.`);
}

describe_city("New York", "USA");
describe_city("Karachi");
describe_city("London", "UK");
