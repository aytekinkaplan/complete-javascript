const toyota = {
  make: 'Toyota',
  model: 'Camry',
  year: 2022,
  calcAge: function () {
    return 2024 - this.year;
  }
}

const ford = {
  make: 'Ford',
  model: 'Mustang',
  year: 2021,
  calcAge: function () {
    return 2024 - this.year;
  }
}

const nissan = {
  make: 'Nissan',
  model: 'Altima',
  year: 2021,
  calcAge: function () {
    return 2024 - this.year;
  }
}

toyota.calcAge();
ford.calcAge();
nissan.calcAge();


