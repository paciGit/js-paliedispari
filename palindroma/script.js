// L'utente inserisce una parola per definire se sia palindroma o no
// Variabili generali
var parolaInserita = prompt('Inserisci una parola.');
var result = document.getElementById('result');
var parolaPal = rovesciaParola(parolaInserita);
console.log(parolaPal);


if (parolaPal == parolaInserita){
  result.innerHTML = ('La parola inserita è palindroma.');
}
else {
  result.innerHTML = ('La parola inserita non è palindroma.');
}

// Funzione
function rovesciaParola(parola){
  var parolaRov = '';

  for (var i = parola.length - 1; i >= 0; i--){
    parolaRov += parola [i];
  }
  return parolaRov;
}
