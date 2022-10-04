
/* Задание 1.
Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения только 
собственных свойств. Данная функция не должна возвращать значение.
*/

const colorCar = {
    color: "black"
}

const myCar = Object.create(colorCar);

myCar.car = "Audi";
myCar.model = "A7";
myCar.year = 2017;

function printKeyObj(obj){

   
    for (let key in obj){

        if (myCar.hasOwnProperty(key))
            console.log(key);
    }
}

printKeyObj(myCar);