/* Задание 2.
Написать функцию, которая 
принимает в качестве аргументов строку и объект, а затем проверяет есть ли у переданного объекта свойство с данным именем.
Функция должна возвращать true или false.
*/


const myCar = {
    car: "Audi",
    model: "A7",
    year: 2019,
    color: "black"
};

// let set = "black";
let set = "green";
// let set = "Audi";


function checkPrperty(str, obj){

    let res; 

    for (let prop in obj){

        if (obj[prop] == str){
            res = true;
            break;
        } else {
            res = false;
        }

    }

    return res;
}

console.log(checkPrperty(set, myCar));