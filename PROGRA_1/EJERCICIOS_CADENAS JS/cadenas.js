function ContarVocales(palabra){
    var contarVocales = 0;
    palabra.split('').forEach(element => {    
        if(element == 'a' || element == 'A'){
            contarVocales++;
        }
        if(element == 'e' || element == 'E'){
            contarVocales++;
        }
        if(element == 'i' || element == 'I'){
            contarVocales++;
        }
        if(element == 'o' || element == 'O'){
            contarVocales++;
        }
        if(element == 'u' || element == 'U'){
            contarVocales++;
        }
    });
    console.log(contarVocales);
    return contarVocales;
}

var palabra = "Hola Mundo";
ContarVocales(palabra);
function ContarPalabras(texto){
	var contar = 0;
	texto.split(' ').forEach(element => {
    	contar++;    
    });
    console.log(contar);
    return contar;
}
/*
var texto = "Presta atención Rafael";
ContarPalabras(texto);
*/

function ContarCaracteres(texto){
    var resultado = 0;
    texto.split('').forEach(element => {
        resultado++;
    });
    console.log(resultado);
    return resultado
}
var texto = "Hola Mundo";

ContarCaracteres(texto);

