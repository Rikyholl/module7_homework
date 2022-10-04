
// Главный класс
class ElectricalAppliance {
    constructor(name, power){
        this.name = name;
        this.power = power;
        this.isPlugged = false;
    }

    // Метод включения в розетку
    plugIn(){
        console.log(this.name + " включен");
        this.isPlugged = true;
    }

    // Метод выключения в розетку
    unplug(){
        console.log(this.name + " выключен");
        this.isPlugged = false;
    }
}

// Прибор 1
class Lamp extends ElectricalAppliance {
    constructor(name, power, brand, bulbType){
        super(name, power);

        this.brand = brand;
        this.bulbType = bulbType;
        this.isPlugged = true;
    }
}

// Прибор 2
class Computer  extends ElectricalAppliance {
    constructor(name, brand, power, type, functionality){
        super(name, power);

        this.brand = brand;
        this.type = type;
        this.functionality = functionality;
        this.isPlugged = false;
    }
}


 const tableLamp = new Lamp("Лампа", "Xiaomi", 5, "LED");

 const homePC = new Computer("Компьютер", "Intel", 120, "stationary", "for work");

 tableLamp.plugIn();

 homePC.unplug();
 
 // результат
 console.log(homePC)
 console.log(tableLamp)