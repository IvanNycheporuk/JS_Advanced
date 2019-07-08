/*

  Задание "Шифр цезаря":

    https://uk.wikipedia.org/wiki/%D0%A8%D0%B8%D1%84%D1%80_%D0%A6%D0%B5%D0%B7%D0%B0%D1%80%D1%8F

    Написать функцию, которая будет принимать в себя слово и количество
    симовлов на которые нужно сделать сдвиг внутри.

    Написать функцию дешефратор которая вернет слово в изначальный вид.

    Сделать статичные функции используя bind и метод частичного
    вызова функции (каррирования), которая будет создавать и дешефровать
    слова с статично забитым шагом от одного до 5.


    const isMobile = document.innerWidth < 768;

    Например:
      encryptCesar( 3, 'Word');
      encryptCesar1(...)
      ...
      encryptCesar5(...)

      decryptCesar1(3, 'Sdwq');
      decryptCesar1(...)
      ...
      decryptCesar5(...)

      "а".charCodeAt(); // 1072
      String.fromCharCode(189, 43, 190, 61) // ½+¾

*/

function encryptCesar(shiftNumber, word) {
  return word.split('').map( i => {
    if ( i === i.toUpperCase()) {
      if (i.charCodeAt() + shiftNumber > 'Z'.charCodeAt()){
        return String.fromCharCode('A'.charCodeAt() + ((i.charCodeAt() + shiftNumber) - 'Z'.charCodeAt() - 1))
      } else {
        return String.fromCharCode(i.charCodeAt() + shiftNumber);
      }
    } else {
      if (i.charCodeAt() + shiftNumber > 'z'.charCodeAt()){
        return String.fromCharCode('a'.charCodeAt() + ((i.charCodeAt() + shiftNumber) - 'z'.charCodeAt() - 1))
      } else {
        return String.fromCharCode(i.charCodeAt() + shiftNumber);
      }
    }
  })
}

console.log(encryptCesar(4, 'AzZAa'));

let encryptCesar3 = encryptCesar.bind(null, 3);

//console.log(encryptCesar3('AaAaAa'));

function decryptCesar(shiftNumber, word) {
  return word.split('').map( i => {
    if ( i === i.toUpperCase()) {
      if (i.charCodeAt() - shiftNumber < 'A'.charCodeAt()){
        return String.fromCharCode('Z'.charCodeAt() - (('A'.charCodeAt() + shiftNumber) - i.charCodeAt() - 1)) 
      } else {
        return String.fromCharCode(i.charCodeAt() - shiftNumber);
      }
    } else {
      if (i.charCodeAt() - shiftNumber < 'a'.charCodeAt()){
        return String.fromCharCode('z'.charCodeAt() - (('a'.charCodeAt() + shiftNumber) - i.charCodeAt() - 1))
      } else {
        return String.fromCharCode(i.charCodeAt() - shiftNumber);
      }
    }
  })
}

console.log(decryptCesar(4, 'ZzAaAaBb'));

let decryptCesar4 = decryptCesar.bind(null, 4);

console.log(decryptCesar4('ZzAaAaBb'));



