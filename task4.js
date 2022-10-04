/* Задание 4.
    Реализуйте следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах.
    Определите иерархию электроприборов. Включите некоторые в розетку. Посчитайте потребляемую мощность (передайте аргумент). 
    Таких приборов должно быть как минимум два (например, настольная лампа и компьютер). Выбрав прибор, подумайте, 
    какими свойствами он обладает.
*/

function ElectricalAppliance(name, power) {
   
    this.name = name;
    this.power = power;
    this.isPlugged = false;
}

  // Проверка включен ли прибор в розетку
ElectricalAppliance.prototype.plugIn = function () {

    console.log(this.name + " включен");
    this.isPlugged = true;
};

  // / Проверка выключен ли прибор в розетку
  ElectricalAppliance.prototype.unplug = function () {

    console.log(this.name + " выключен");
    this.isPlugged = false;
  };


  // Прибор 1
  function Lamp(name, brand, power, bulbType) {
    this.name = name;
    this.brand = brand;
    this.power = power;
    this.bulbType = bulbType;
    this.isPlugged = true;
  }

  Lamp.prototype = new ElectricalAppliance();


  // Прибор 2

  function Computer(name, brand, power, type, functionality) {
    this.name = name;
    this.brand = brand;
    this.power = power;
    this.type = type;
    this.functionality = functionality;
    this.isPlugged = false;
  }

  Computer.prototype = new ElectricalAppliance();

  // экземпляр лампы
  const tableLamp = new Lamp("Лампа", "Xiaomi", 5, "LED");

  // экземпляр компьютера
  const homePC = new Computer("Компьютер", "Intel", 120, "stationary", "for work");

  // отключить лампу из розетки
  tableLamp.unplug();

  // включить homePC в розетку
  homePC.plugIn();
  
  // результат
  console.log(homePC)
  console.log(tableLamp)