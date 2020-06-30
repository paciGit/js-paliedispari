// L’utente sceglie pari o dispari e un numero da 1 a 5.
var scelta = prompt('Scegli, Pari o Dispari?');
var numero = parseInt(prompt('Scegli un numero da 1 a 5!'));
var numeroCPU = (numero + randomGenerator(1, 5));
console.log(numeroCPU);

if (scelta == 'Pari' && isEven(numeroCPU) == true){
  alert('Hai vinto!');
} else if (scelta == 'Dispari' && isEven(numeroCPU) == false) {
  alert('Hai vinto!');
}
else {
  alert('Hai perso.');
}


// Funzione Random
function randomGenerator (min, max){
  min = Math.ceil(min);
  max = Math.floor(max);
  var random = Math.floor(Math.random() * (max - min + 1));
  return random;
}

// Funzione Pari
function isEven (numero){
  if (numero % 2 == 0) {
    return true;
  }
  else {
    return false;
  }
}
console.log(isEven());
