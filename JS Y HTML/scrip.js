function mostrarNombre(){
    const nombre = document.getElementById("nombre").value;
    const resultado = document.getElementById("resultado");

    if(nombre.trim() === ""){
        resultado.textContent = "Por favor, escribe tu nombre.";
    } else {
            resultado.textContent = "Hola, " +nombre + "👋";
    }
}

var lista = [];
function InsertarLista(){
    var ValorAleatorio = Math.floor(Math.random() * 10);
    const resultado = document.getElementById("resultado");

     // Crear un <li> con un botón dentro
  const li = document.createElement("li");
  const boton = document.createElement("button");
  boton.textContent = "Valor: " + ValorAleatorio;

  li.appendChild(boton);
  resultado.appendChild(li);

  // Forzar animación con pequeña espera
  setTimeout(() => {
    li.classList.add("show");
  }, 50);

}

function EliminarLista(){
  // 1. Pedir al usuario qué valor quiere eliminar
  let valorEliminar = prompt("Ingrese el valor a eliminar (0-9):");
  if(valorEliminar === null) return; // si cancela el prompt, salir de la función
  valorEliminar = valorEliminar.trim(); // quitar espacios en blanco

  // 2. Obtener la lista <ul> donde están los <li>
  const resultado = document.getElementById("resultado");

  // 3. Obtener todos los <li> dentro de la lista
  const items = resultado.querySelectorAll("li");

  // Contador para saber cuántos eliminamos
  let eliminados = 0;

  // 4. Recorrer cada <li>
  items.forEach(li => {
    // Dentro de cada <li> hay un <button> que guarda el texto
    const boton = li.querySelector("button");

    // 5. Verificar si el texto del botón coincide con el valor ingresado
    if(boton.textContent === "Valor: " + valorEliminar){
      // Si coincide, lo eliminamos de la lista <ul>
      resultado.removeChild(li);
      eliminados++;
    }
  });

  // 6. Dar feedback al usuario
  if(eliminados === 0){
    alert("No se encontró el valor " + valorEliminar + " en la lista.");
  } else {
    alert("Se eliminaron " + eliminados + " elemento(s) con el valor " + valorEliminar);
  }
}

