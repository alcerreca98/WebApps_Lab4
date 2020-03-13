//Federico Alcerreca A01281459

//botones (de isq a der, de arriba a abajo)
let btnReset = document.getElementsByClassName("resetButton")[0];
let btnIgual = document.getElementsByClassName("equalButton")[0];
let btnSuma = document.getElementById("addButton");
let btnResta = document.getElementById("substractButton");
let btnMulti = document.getElementById("multiplicationButton");
let btnDiv = document.getElementById("divisionButton");


// Campos de texto text field & text area (de arriba a abajo)
let tfInput = document.getElementsByClassName("inputNumber")[0];
let tfResultado = document.getElementById("resultValue");
let taLogArea = document.getElementById("logInformation");

//variables
let numPrevio;
let numActual;
let strOperacion = "";
let cOperador = "";
let numAcumulado = 0;


btnReset.addEventListener("click", event => {
  event.preventDefault();
  reset();
});

btnIgual.addEventListener("click", event => {
  event.preventDefault();
  numActual = Number(tfInput.value)
  strOperacion += cOperador + String(numActual);
  igual();
  imprime();
});

btnSuma.addEventListener("click", event => {
  event.preventDefault();
  CheckOp(event.target.innerText);
});

btnResta.addEventListener("click", event => {
  event.preventDefault();
  CheckOp(event.target.innerText);
});

btnMulti.addEventListener("click", event => {
  event.preventDefault();
  CheckOp(event.target.innerText);
});

btnDiv.addEventListener("click", event => {
  event.preventDefault();
  CheckOp(event.target.innerText);
});

//resetea mis 3 campos en pantalla y todas mis variables
function reset() {
  tfInput.value = "";
  tfResultado.value = "";
  taLogArea.value = "";
  numPrevio = 0;
  numActual = 0;
  numAcumulado = 0;
  strOperacion = "";
  cOperador = "";
}

function igual() {
  if (cOperador === "+"){
    numAcumulado = numPrevio + numActual;
  }else if (cOperador === "-"){
    numAcumulado = numPrevio - numActual;
  }else if (cOperador === "*"){
    numAcumulado = numPrevio * numActual;
  }else if (cOperador === "/"){
    numAcumulado = numPrevio / numActual;
  }
}

//intente hacer esto en cada eventlistener y sin hacer funciones.
//pero me di cuenta de que 1 causa problemas y 2 es repetir demasiado.
function CheckOp(op) {
  //si el campo no esta vacio
  if (Number(tfInput.value) || tfInput.value === "0") {
    if (cOperador) {//a partir del segundo dato
      numActual = Number(tfInput.value);
      strOperacion += cOperador + String(numActual);
      igual();
      cOperador = op;
      numPrevio = numAcumulado;
      }
      else {//primer dato
          numPrevio = Number(tfInput.value);
          strOperacion += numPrevio;
          cOperador = op;
      }
      limpiaTF();
  }
}

function imprime() {
    if (cOperador) {
      tfResultado.value = numAcumulado;
      strOperacion += " = " + String(numAcumulado);
    } else {
      tfResultado.value = numActual;
      strOperacion += " = " + String(numActual);
    }
    taLogArea.value += strOperacion.trim() + "\n";
    strOperacion = "";
    cOperador = "";
    limpiaTF();
}

function limpiaTF() {
  tfInput.value = "";
}