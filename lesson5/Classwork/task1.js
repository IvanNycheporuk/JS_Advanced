/*
    Задание 1:

    Написать обьект Train у которого будут свойства:
    -имя,
    -скорость езды
    -количество пассажиров
    Методы:
    Ехать -> Поезд {name} везет { количество пассажиров} со скоростью {speed}
    Стоять -> Поезд {name} остановился. Скорость {speed}
    Подобрать пассажиров -> Увеличивает кол-во пассажиров на Х
*/

let Train = {
    name: 'Train name',
    speed: 200,
    passengersCount: 150,
    go: function(){
        console.log(`Поезд ${this.name} везет ${this.passengersCount} со скоростью ${this.speed}`);
    },
    stop: function(){
        console.log(`Поезд ${this.name} остановился. Скорость ${this.speed}`)
    },
    pickUp: function(){
        this.passengersCount++;
    }
}

Train.go();
Train.stop();

Train.pickUp();

console.log(Train.passengersCount);

