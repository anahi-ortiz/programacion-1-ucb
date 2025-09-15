// sin return
function mi_primer_algoritmo(){
    var mensaje = "hola mundo";
    alert(mensaje)
}

function binarioADecimal(binario) {
    var decimal = 0;
    for (let i = 0; i < binario.length; i++) {
        digitoBinario = binario[i];
        if(digitoBinario === '1'){
            decimal = decimal * 2 + 1;
        }
        else{
            decimal = decimal * 2 + 0;
        }
    }
    alert(decimal);
}

function sumarBinarios(bin1, bin2) {
    const dec1 = binarioADecimal(bin1);
    const dec2 = binarioADecimal(bin2);
    return dec1 + dec2;
}

// Ejemplo
let bin1 = "1010";
let bin2 = "1011";
console.log("Suma en decimal:", sumarBinarios(bin1, bin2));
