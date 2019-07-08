/*

    Задание 3:

    1. Создать ф-ю констурктор которая создаст новую собаку у которой есть имя и порода
    2. Обьект должен иметь пару свойств (Имя, порода, status)
    3. Функцию которая производит манипуляцию со свойствами (Собака бежит), (Собака есть)
    4. Функция которая перебором выводит все свойства


    Dog {
      name: '',
      breed: '',
      status: 'idle',

      changeStatus: function(){...},
      showProps: function(){...}
    }

    // Перебор свойств и методов обьекта
    for (key in obj) {
      console.log( key, obj[key] );
      /* ... делать что-то с obj[key] ...
    // }
*/

function Dog(name, breed, status) {
  this.name = name;
  this.breed = breed;
  this.status = status;

  this.changeStatus = function(){
    this.status = ' should be better';
    console.log(`${this.name} is running now. It is ${this.breed}, so that is why the status is ${this.status}`);
  }

  this.showProps = function(){
    for(key in this) {
      console.log(key, this[key]);
      this[key] += 'test';
    }
  }
}

let test = new Dog('testName', 'testBreed', 'testStatus');

test.changeStatus();
