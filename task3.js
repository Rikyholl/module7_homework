/* Задание 3.
Написать функцию, которая создает пустой объект, но без прототипа.
*/

function createObj(){

    const obj = Object.create(null);
    console.log(obj);
}

createObj();

