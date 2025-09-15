// ------------------------------------------------------------
// Conversiones entre bases
// ------------------------------------------------------------
function abase(numero, base) {
    let resultado = "";
    let digitos = "0123456789ABCDEF";

    if (numero === 0) return "0";

    while (numero > 0) {
        let residuo = numero % base;
        resultado = digitos[residuo] + resultado;
        numero = Math.floor(numero / base);
    }

    return resultado;
}

function convertirDecimal(numero) {
    return {
        binario: abase(numero, 2),
        octal: abase(numero, 8),
        hexadecimal: abase(numero, 16)
    };
}

function binarioADecimal(binario) {
    let decimal = 0;
    let potencia = 1;

    for (let i = binario.length - 1; i >= 0; i--) {
        if (binario[i] === '1') {
            decimal += potencia;
        }
        potencia *= 2;
    }

    return decimal;
}

function sumarBinarios(bin1, bin2) {
    let num1 = binarioADecimal(bin1);
    let num2 = binarioADecimal(bin2);
    return num1 + num2;
}

function hexADecimal(hex) {
    let digitos = "0123456789ABCDEF";
    hex = hex.toUpperCase();
    let decimal = 0;
    let potencia = 1;

    for (let i = hex.length - 1; i >= 0; i--) {
        let valor = digitos.indexOf(hex[i]);
        decimal += valor * potencia;
        potencia *= 16;
    }

    return decimal;
}

function decimalABinario(numero) {
    let resultado = "";
    if (numero === 0) return "0";

    while (numero > 0) {
        resultado = (numero % 2) + resultado;
        numero = Math.floor(numero / 2);
    }

    return resultado;
}

function convertirDecimalAHex(numero) {
    let resultado = "";
    let digitos = "0123456789ABCDEF";

    while (numero > 0) {
        let residuo = numero % 16;
        resultado = digitos[residuo] + resultado;
        numero = Math.floor(numero / 16);
    }

    return resultado || "0";
}

function binarioAhex(binario) {
    let decimal = binarioADecimal(binario);
    return convertirDecimalAHex(decimal);
}

// ------------------------------------------------------------
// Operaciones aritméticas básicas con binarios
// ------------------------------------------------------------
function operarBinarios(bin1, bin2, operacion) {
    let a = binarioADecimal(bin1);
    let b = binarioADecimal(bin2);
    let resultado;

    if (operacion === "suma") {
        resultado = a + b;
    } else if (operacion === "resta") {
        resultado = a - b;
    } else if (operacion === "multiplicacion") {
        resultado = a * b;
    } else if (operacion === "division") {
        if (b === 0) return "Error: división por cero";
        resultado = Math.floor(a / b);
    } else {
        return "Operación no válida";
    }

    return {
        binario: decimalABinario(resultado),
        decimal: resultado
    };
}

// ------------------------------------------------------------
// Funciones matemáticas
// ------------------------------------------------------------
function tablaMultiplicar(numero) {
    let tabla = [];
    let i = 1;
    while (i <= 10) {
        tabla.push(`${numero} x ${i} = ${numero * i}`);
        i++;
    }
    return tabla;
}

function sumaPares() {
    let suma = 0;
    let i = 1;

    while (i <= 50) {
        if (i % 2 === 0) {
            suma += i;
        }
        i++;
    }

    return suma;
}

function esPrimo(n) {
    if (n < 2) return false;
    let i = 2;
    while (i <= Math.sqrt(n)) {
        if (n % i === 0) return false;
        i++;
    }
    return true;
}

function sumaPrimos() {
    let suma = 0;
    let i = 1;

    while (i <= 100) {
        if (esPrimo(i)) {
            suma += i;
        }
        i++;
    }

    return suma;
}
