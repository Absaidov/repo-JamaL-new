'use strcit'
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