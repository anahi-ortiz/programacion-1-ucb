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
console.log(lista.toString())
/*
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
//    alert("No se encontró el valor " + valorEliminar + " en la lista.");
  } else {
//    alert("Se eliminaron " + eliminados + " elemento(s) con el valor " + valorEliminar);
//  }
}
*/

function EliminarElementoLista() {
  //El valor del elemento (pedir el input al usuario)
  const input = Number(document.getElementById("input").value);
  //El elemento esta incluido en la lista?
  console.log("Input del usuario: ", input)
  while (lista.includes(input)) {
    console.log("El input esta incluido en la Lista")
    var pos = lista.indexOf(input);
    console.log("Input en la posición: ", pos)
    lista.splice(pos, 1);
    console.log("Input eliminado ------------ :", input)
  }
  console.log("Lista actualizada !!!")
  console.log(lista.toString())
}

ListaObjetosAnahi = [
  {nombre: "VALENTINA JUSTINIANO", edad: 18, correo:"valentina.justiniano.g@ucb.edu.bo", carrera: "ING. INDUSTRIAL", telefono: "+591 71380166"},
  {nombre: "JAQUELINE CHURQUI", edad: 18, correo:"jaqueline.churqui@ucb.edu.bo", carrera: "ING. INDUSTRIAL", telefono: "+591 63451159"},
  {nombre: "MATEO COSSIO", edad: 18, correo:"m.cossio@ucb.edu.bo", carrera: "ING. INDUSTRIAL", telefono: "+591 75027212"},
  {nombre: "OLVIS MORENO", edad: 19, correo:"omoreno@ucb.edu.bo", carrera: "ING. CIVIL", telefono: "+591 62101134"},
  {nombre: "SAMIR VIDAL", edad: 19, correo:"mattias.vidal@ucb.edu.bo", carrera: "ING. CIVIL", telefono: "+591 69185957"},
  {nombre: "EIDAN LEDEZMA", edad: 18, correo:"eidan.ledezma@ucb.edu.bo", carrera: "ING. AGRONOMICA Y ZOOTECNIA", telefono: "+591 73378224"},
  {nombre: "BIANCA LIMACHI", edad: 18, correo:"bianca.limachi@ucb.edu.bo", carrera: "ING. INDUSTRIAL", telefono: "+591 79148042"},
  {nombre: "ISABELA BARBERY", edad: 18, correo:"isabela.barbery@ucb.edu.bo", carrera: "ING. INDUSTRIAL", telefono: "+591 75671210"},
  {nombre: "LEONARDO RIVERO", edad: 18, correo:"leonardo.rivero.l@ucb.edu.bo", carrera: "ING. INDUSTRIAL", telefono: "+591 79802044"},
  {nombre: "ANAHI ORTIZ", edad: 19, correo:"anahi.ortiz@ucb.edu.bo", carrera: "ING. INDUSTRIAL", telefono: "+591 70077947"},
]

function AddEstudiante(){
  var name = document.getElementById("input_name").value;
  var varedad = Number(document.getElementById("input_edad").value);
  var varcorreo = document.getElementById("input_correo").value;
  var varcarrera= document.getElementById("input_carrera").value;
  var varphone = document.getElementById("input_phone").value;

  var estudiante = {
    nombre: name,
    edad: varedad,
    correo: varcorreo,
    carrera: varcarrera,
    telefono: varphone,
  }
  if(estudiante.edad >= 18){
    console.log("INSERTADO CON EXITO");
    ListaObjetosAnahi.push(estudiante);    
  }else{
    console.log("Ahorita no joven, vuelve cuando tengas 18")
  }
  
  crearTabla(ListaObjetosAnahi)

}

function MostrarHabilitadosOEP(){
  ListaObjetosAnahi.forEach(elemento => {
    if(elemento.edad >= 18 ){
      console.log("HOLA, " + elemento.nombre + " estas habilitado para votar :)");
    }
  });
}

function mostrarNombre(){
  ListaObjetosAnahi.forEach(element => {
    console.log(2025  - element.edad);
  });
}
function crearTabla(datos){
  let tabla = '<table>';
  tabla += `
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Edad</th>
            <th>Correo</th>
            <th>Carrera</th>
            <th>Teléfono</th>
          </tr>
        </thead>
        <tbody>
      `;

  datos.forEach(estudiante => {
    tabla += `
          <tr>
            <td>${estudiante.nombre}</td>
            <td>${estudiante.edad}</td>
            <td>${estudiante.correo}</td>
            <td>${estudiante.carrera}</td>
            <td>${estudiante.telefono}</td>
          </tr>
        `;
  });

  tabla += '</tbody></table>';
  document.getElementById("tabla-container").innerHTML = tabla;
}

function cargarColores(){
  const colores = ["Rojo", "Verde", "Azul", "Amarillo", "Morado"];
  const select = document.getElementById("colorSelect");

    colores.forEach(color => {
      const option =document.createElement("option");
      option.value = color.toLowerCase();
      option.textContent = color;
      select.appendChild(option);
    
    });
}
cargarColores();
//metodo que muestra el color seleccionado
function mostrarColor(){
  const select = document.getElementById("colorSelect");
  const valor = select.value;
  alert(valor);
}