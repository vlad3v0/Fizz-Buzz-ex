'use strict';

document.addEventListener('DOMContentLoaded', function () {
  console.log(`Hello ${user}!`);
});


/* Fizz Buzz test: Scrivi un programma che
stampi i numeri da 1 a 100 ma per i multipli di
3 stampi “Fizz” al posto del numero e per i
multipli di 5 stampi Buzz. Per i numeri che
sono sia multipli di 3 che di 5 stampi
FizzBuzz. */

let user = 'Geo';
let printNumber = 100;
let fizz = 'Fizz';
let buzz = 'Buzz';
let listImput = document.getElementById('listImput');

function printFizzBuzz() {
  for (let a = 0; a < printNumber; a++) {

    if (a % 3 == 0 && a % 5 == 0) {

      console.log(fizz + buzz);
      document.writeln('<li>' + fizz + buzz + '</li>');
      
    } else if (a % 3 == 0) {

      console.log(fizz);
      document.writeln('<li>' + fizz + '</li>');

      
    } else  if (a % 5 == 0) {

      console.log(buzz);
      document.writeln('<li>' + buzz + '</li>');
      
    } else {
      console.log(a);
      
    }

  }
}

printFizzBuzz()




