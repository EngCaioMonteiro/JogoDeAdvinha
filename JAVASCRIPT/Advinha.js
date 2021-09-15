var numeroSecreto = parseInt(Math.random() * 11);

function Chutar() {
  var elementoResultado = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("valor").value);

  console.log(chute);

  if (chute == numeroSecreto) {
    console.log("Acertou");
    elementoResultado.innerHTML = "Você Acertou, o numero era " + numeroSecreto;
  } else if (chute > 10 || chute < 0) {
    console.log("Escolha um número entre 0 e 10");
  } else {
    console.log("Você errou");
    elementoResultado.innerHTML = "Você Errou, tente outra vez";
  }
}
