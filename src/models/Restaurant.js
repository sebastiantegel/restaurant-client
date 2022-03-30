export class Restaurant {
  id;
  name;
  adress;

  constructor(id, name, adress) {
    this.id = id;
    this.name = name;
    this.adress = adress;
  }
}

export class Adress {
  street;
  zip;
  city;

  constructor(street, zip, city) {
    this.street = street;
    this.zip = zip;
    this.city = city;
  }
}
