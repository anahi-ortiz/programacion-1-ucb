// Usa tus funciones de "funciones.js" aquí

function convertir() {
  const numero = parseInt(document.getElementById("numero").value);
  if (isNaN(numero)) {
    document.getElementById("resultadoConversion").innerHTML = "⚠️ Ingresa un número válido";
    return;
  }

  const resultado = convertirDecimal(numero);
  document.getElementById("resultadoConversion").innerHTML =
    `<p>Binario: ${resultado.binario}</p>
     <p>Octal: ${resultado.octal}</p>
     <p>Hexadecimal: ${resultado.hexadecimal}</p>`;
}

function operar() {
  const bin1 = document.getElementById("bin1").value;
  const bin2 = document.getElementById("bin2").value;
  const operacion = document.getElementById("operacion").value;

  const resultado = operarBinarios(bin1, bin2, operacion);

  if (typeof resultado === "string") {
    document.getElementById("resultadoOperacion").innerHTML = resultado;
  } else {
    document.getElementById("resultadoOperacion").innerHTML =
      `<p>Decimal: ${resultado.decimal}</p>
       <p>Binario: ${resultado.binario}</p>`;
  }
}

function mostrarTabla() {
  const tabla = tablaMultiplicar(5);
  document.getElementById("resultadoMatematico").innerHTML = tabla.join("<br>");
}

function mostrarSumaPares() {
  document.getElementById("resultadoMatematico").innerHTML = "Suma de pares: " + sumaPares();
}

function mostrarSumaPrimos() {
  document.getElementById("resultadoMatematico").innerHTML = "Suma de primos: " + sumaPrimos();
}
