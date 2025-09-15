// Año dinámico en el footer
document.getElementById("year").textContent = new Date().getFullYear();

// Helpers para obtener texto y pintar resultados
const $txt = () => document.getElementById("texto").value || "";
const setOut = (id, value) => document.getElementById(id).textContent = value;

// Verificación básica de disponibilidad (por si cadenas.js no cargó)
const ensureFn = (fnName) => {
  const fn = window[fnName];
  if (typeof fn !== "function") {
    alert(`No se encontró la función ${fnName}() en cadenas.js`);
    throw new Error(`Missing function: ${fnName}`);
  }
  return fn;
};

document.getElementById("btnVocales").addEventListener("click", () => {
  const texto = $txt();
  const contarVocales = ensureFn("ContarVocales");
  const res = contarVocales(texto);
  setOut("outVocales", res);
});

document.getElementById("btnPalabras").addEventListener("click", () => {
  const texto = $txt();
  const contarPalabras = ensureFn("ContarPalabras");
  const res = contarPalabras(texto);
  setOut("outPalabras", res);
});

document.getElementById("btnCaracteres").addEventListener("click", () => {
  const texto = $txt();
  const contarCaracteres = ensureFn("ContarCaracteres");
  const res = contarCaracteres(texto);
  setOut("outCaracteres", res);
});
