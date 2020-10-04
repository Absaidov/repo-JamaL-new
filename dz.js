<<<<<<< HEAD
'use strict',
//пункт 1
function getNumber(num) {
    if (!Number.isInteger(num) || num < 0 || num > 999) {
        console.log("Значение должно быть от 0 до 999");
        return {};
    }
    return {
        units: num % 10,
        tens: Math.floor(num / 10) % 10,
        hundreds: Math.floor(num / 100),
    }
=======
'use strcit'

//HW BY KRAKEN

//ПУНКТ 1

//пример 1
//let a = 1, b = 1, c, d;
//c = ++a;
/* alert(c); // ответ: 2, так как оператор '++'  
возвращает значение операнда с добавленной к нему единицей, при let a = 1,
 то с = 2


//пример 2
//d = b++;
//alert(d); //ответ: 1, так как оператор '++' стоит после переменной,
оператор возвращает значение операнда перед добавлением к нему единицы.

d = 1; */


//пример 3
//c = 2 + ++a;
//alert(c); //ответ: 5
/* при а = 2 (выше решение задачи), с = 2 + (оператор добавляет операнду 'а
единицу, то а будет равна 3, следовательно пример выглядит так
с = 2 + 3, т.е. 5 )


//пример 4
/* d = 2 + b++; так как у нас стоит оператор после операнды, следовательно сначала
вернется значение b = 2, d = 2 + 2;
//alert(d); //ответ: 4

//alert(a); //3 получили значение после решения примера 3
//alert(b); //3 получили значание после решения примера 4



//ПУНКТ 2 
//let a = 2;
//let x = 1 + (a *= 2);

/* Х будет равен 5, так как, сначала решаем задачу в скобках, при а*= 2, 
переменная А будет равна 4 (а = а * 2), при let a = 2, после прибавляем 1 */


//ПУНКТ 3


let a = 2;
let b = 1;
if (a >= 0 && b >= 0) {
    console.log(a - b);

} else if (a < 0 && b < 0) {
    console.log(a * b);
>>>>>>> main
}




console.log(getNumber(789));

//пункт 1.1

/*Сделайте в стиле es5, а затем в стиле es6 (по аналогии из урока), конструктор Product, который принимает 
параметры name и price, сохраните их как свойства объекта. Также объекты типа Product должны иметь метод 
make25PercentDiscount, который будет уменьшать цену в объекте на 25%. */
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    make25PercentDiscount() {
        this.price = this.price - (this.price * 25 / 100);
    }
}

const product1 = new Product('Товар', 250);
product1.make25PercentDiscount();

console.log(product1);



//пункт 1.2

function Product123(name, price) {
    this.name = name;
    this.price = price;
}

Product123.prototype.make25PercentDiscount = function () {
    this.price = this.price - (this.price * 25 / 100);
};

const product2 = new Product('Товар 1', 250);
product1.make25PercentDiscount();

console.log(product1);