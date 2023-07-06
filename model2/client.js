class Client{
 
   constructor(name, surname, address){

    this.personalInfo = new PersonalInfo(name, surname);  // invece di usare il super usiamo una caratteristica di un oggetto che è un altro oggetto
    this.address = address;
   }

  toString(){
    return this.personalInfo.toString() + 
    'Indirizzo: ' + this.address + '\n';
  }

}