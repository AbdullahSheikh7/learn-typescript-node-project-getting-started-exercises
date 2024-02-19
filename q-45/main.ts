function createCar(manufacturer: string, model: string, ...args: { [key: string]: any }[]) {
  let car = { manufacturer, model, ...args };
  console.log(car);
}

createCar('Toyota', 'Corolla', { color: 'blue', optionalFeature: 'sunroof' });
