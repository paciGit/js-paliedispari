// L'utente inserisce una parola per definire se sia palindroma o no
// Variabili generali
var parolaInserita = prompt('Inserisci una parola.');
var result = document.getElementById('result');
var parolaPal = rovesciaParola(parolaInserita);
console.log(parolaPal);


if (parolaPal == parolaInserita){
  result.innerHTML = ('<p class="uno">La parola inserita è palindroma.</p>' + '<h2 id="significato">Il palindromo è una sequenza di caratteri che, letta al contrario, rimane invariata.</h2>');
}
else {
  result.innerHTML = ('<p class="due">La parola inserita non è palindroma.</p>' + '<h2 id="significato">Il palindromo è una sequenza di caratteri che, letta al contrario, rimane invariata.</h2>');
}

// Funzione
function rovesciaParola(parola){
  var parolaRov = '';

  for (var i = parola.length - 1; i >= 0; i--){
    parolaRov += parola [i];
  }
  return parolaRov;
}
