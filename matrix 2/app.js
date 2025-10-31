// apps.js
// Controla el canvas, eventos y muestra resultados en #output.
// Usa la clase Matrix definida en matrix.js

const canvas = document.getElementById('matrixCanvas');
const fillButton = document.getElementById('fillBtn');
const clearButton = document.getElementById('clearBtn');
const fillIncrementBtn = document.getElementById('fillIncrementBtn');
const exerciseSelect = document.getElementById('exerciseSelect');
const executeExercise = document.getElementById('executeExercise');
const output = document.getElementById('output');

const ctx = canvas.getContext('2d');

// MATRIZ GLOBAL (fija 10x10)
const matrix = new Matrix(10, 10, 0);

// dibuja cualquier Matrix pasada; si no se pasa, dibuja la global 'matrix'
function drawMatrix(someMatrix = matrix) {
  // ajustar tamaño del canvas
  canvas.width = canvas.clientWidth;
  canvas.height = canvas.clientHeight;
  const rows = someMatrix.rows;
  const cols = someMatrix.cols;
  const cellW = canvas.width / cols;
  const cellH = canvas.height / rows;

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.font = `${Math.min(cellW, cellH) / 3}px Arial`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const x = j * cellW;
      const y = i * cellH;
      const v = someMatrix.getValue(i, j);
      ctx.strokeStyle = '#d1d5db';
      ctx.strokeRect(x, y, cellW, cellH);
      ctx.fillStyle = '#0f172a';
      ctx.fillText(String(v), x + cellW / 2, y + cellH / 2);
    }
  }
}

// función global fillRandom para que la pidas desde cualquier parte
function fillRandomGlobal(min = 1, max = 100) {
  matrix.fillRandom(min, max);
  const { suma } = matrix.sumElements();
  const promedio = (suma / (matrix.rows * matrix.cols)).toFixed(2);
  output.innerText = `Matriz llenada aleatoriamente entre ${min} y ${max}.\nSuma total: ${suma}\nPromedio: ${promedio}`;
  drawMatrix(matrix);
}

// limpiar canvas y salida
function clearAll() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  output.innerText = "";
}

// helper para mostrar matrices resultantes (cuando un método devuelve otra matriz)
function showResultMatrixAndMessage(resultMatrix, message) {
  if (resultMatrix instanceof Matrix) {
    drawMatrix(resultMatrix);
    output.innerText = message + "\n\nMatriz resultante:\n" + resultMatrix.toString();
  } else {
    // si no hay matriz, solo mostramos mensaje
    output.innerText = message;
    drawMatrix(matrix);
  }
}

// mapeo de ejercicios a funciones
function executeSelectedExercise() {
  const selected = exerciseSelect.value;
  if (!selected) {
    alert("Selecciona un ejercicio válido.");
    return;
  }

  // por defecto dibujamos la matriz principal al final
  switch (selected) {
    case "1": { // suma de todos los elementos
      const res = matrix.sumElements();
      drawMatrix(matrix);
      output.innerText = res.message + "\n\nMatriz:\n" + matrix.toString();
      break;
    }

    case "2": { // máximo y mínimo
      const res = matrix.findMaxMin();
      drawMatrix(matrix);
      output.innerText = res.message + "\n\nMatriz:\n" + matrix.toString();
      break;
    }

    case "3": { // promedio de elementos
      const res = matrix.average();
      drawMatrix(matrix);
      output.innerText = res.message + "\n\nMatriz:\n" + matrix.toString();
      break;
    }

    case "4": { // contar ocurrencias (pedimos valor con prompt)
      const val = Number(prompt("Introduce el número a buscar (ej: 3):", "3"));
      if (Number.isNaN(val)) { alert("Valor inválido"); break; }
      const res = matrix.countOccurrences(val);
      drawMatrix(matrix);
      output.innerText = res.message + "\n\nMatriz:\n" + matrix.toString();
      break;
    }

    case "5": { // invertir filas
      const { resultMatrix, message } = matrix.reverseRows();
      showResultMatrixAndMessage(resultMatrix, message + "\n\nOriginal:\n" + matrix.toString());
      break;
    }

    case "6": { // rotar 90 grados
      const { resultMatrix, message } = matrix.rotate90();
      showResultMatrixAndMessage(resultMatrix, message + (resultMatrix ? "\n\nOriginal:\n" + matrix.toString() : ""));
      break;
    }

    case "7": { // transpuesta nueva
      const { resultMatrix, message } = matrix.transposeNew();
      showResultMatrixAndMessage(resultMatrix, message + "\n\nOriginal:\n" + matrix.toString());
      break;
    }

    case "8": { // multiplicación A * B (se crean A y B aleatorias)
      const A = matrix.clone();
      const B = new Matrix(matrix.rows, matrix.cols, 0);
      B.fillRandom(1, 10); // B pequeño para ver valores manejables
      const { resultMatrix, message } = A.multiplyBy(B);
      if (resultMatrix) {
        drawMatrix(resultMatrix);
        output.innerText = message + "\n\nMatriz A:\n" + A.toString() + "\n\nMatriz B:\n" + B.toString() + "\n\nResultado C=A*B:\n" + resultMatrix.toString();
      } else {
        output.innerText = message;
        drawMatrix(matrix);
      }
      break;
    }

    case "9": { // diagonal principal
      const res = matrix.getMainDiagonal();
      drawMatrix(matrix);
      output.innerText = res.message + "\n\nMatriz:\n" + matrix.toString();
      break;
    }

    case "10": { // diagonal secundaria
      const res = matrix.getSecondaryDiagonal();
      drawMatrix(matrix);
      output.innerText = res.message + "\n\nMatriz:\n" + matrix.toString();
      break;
    }

    case "11": { // suma de filas
      const res = matrix.sumRows();
      drawMatrix(matrix);
      output.innerText = res.message + "\n\nMatriz:\n" + matrix.toString();
      break;
    }

    case "12": { // suma de columnas
      const res = matrix.sumCols();
      drawMatrix(matrix);
      output.innerText = res.message + "\n\nMatriz:\n" + matrix.toString();
      break;
    }

    case "13": { // transpuesta in-place
      const res = matrix.clone(); // queremos preservar original para mostrar antes/después
      const before = res.toString();
      const r = res.transposeInPlace();
      drawMatrix(res);
      output.innerText = r.message + "\n\nAntes:\n" + before + "\n\nDespués:\n" + res.toString();
      break;
    }

    case "14": { // matriz identidad
      const I = Matrix.identity(matrix.rows);
      drawMatrix(I);
      output.innerText = `Matriz identidad ${matrix.rows}x${matrix.cols} generada.\n\n` + I.toString();
      break;
    }

    case "15": { // simétrica?
      const res = matrix.isSymmetric();
      drawMatrix(matrix);
      output.innerText = res.message + "\n\nMatriz:\n" + matrix.toString();
      break;
    }

    case "16": { // triangular superior?
      const res = matrix.isUpperTriangular();
      drawMatrix(matrix);
      output.innerText = res.message + "\n\nMatriz:\n" + matrix.toString();
      break;
    }

    case "17": { // triangular inferior?
      const res = matrix.isLowerTriangular();
      drawMatrix(matrix);
      output.innerText = res.message + "\n\nMatriz:\n" + matrix.toString();
      break;
    }

    case "18": { // suma de diagonales
      const res = matrix.sumDiagonals();
      drawMatrix(matrix);
      output.innerText = res.message + "\n\nMatriz:\n" + matrix.toString();
      break;
    }

    case "19": { // suma de bordes
      const res = matrix.sumBorders();
      drawMatrix(matrix);
      output.innerText = res.message + "\n\nMatriz:\n" + matrix.toString();
      break;
    }

    case "20": { // max/min con posiciones
      const res = matrix.findMaxMinWithPositions();
      drawMatrix(matrix);
      output.innerText = res.message + "\n\nMatriz:\n" + matrix.toString();
      break;
    }

    case "21": { // promedio de la matriz
      const res = matrix.averageMatrix();
      drawMatrix(matrix);
      output.innerText = res.message + "\n\nMatriz:\n" + matrix.toString();
      break;
    }

    case "22": { // contar pares e impares
      const res = matrix.countEvenOdd();
      drawMatrix(matrix);
      output.innerText = res.message + "\n\nMatriz:\n" + matrix.toString();
      break;
    }

    case "23": { // buscar un valor
      const val = Number(prompt("Introduce el valor a buscar:", "5"));
      if (Number.isNaN(val)) { alert("Valor inválido"); break; }
      const res = matrix.findValuePositions(val);
      drawMatrix(matrix);
      output.innerText = res.message + "\n\nMatriz:\n" + matrix.toString();
      break;
    }

    case "24": { // suma encima/debajo diagonal principal
      const res = matrix.sumAboveBelowDiagonal();
      drawMatrix(matrix);
      output.innerText = res.message + "\n\nMatriz:\n" + matrix.toString();
      break;
    }

    case "25": { // espejo horizontal
      const { resultMatrix, message } = matrix.mirrorHorizontal();
      showResultMatrixAndMessage(resultMatrix, message + "\n\nOriginal:\n" + matrix.toString());
      break;
    }

    default:
      alert("Ejercicio no implementado.");
  }
}

// eventos
function initialize() {
  // dibujar estado inicial
  drawMatrix(matrix);

  // listeners
  window.addEventListener('resize', () => drawMatrix(matrix));
  fillButton.addEventListener('click', () => {
    fillRandomGlobal(1, 100);
  });
  clearButton.addEventListener('click', clearAll);
  fillIncrementBtn.addEventListener('click', () => {
    matrix.fillIncrementRows();
    output.innerText = "Matriz con incremento por filas aplicada.\n\nMatriz:\n" + matrix.toString();
    drawMatrix(matrix);
  });
  executeExercise.addEventListener('click', executeSelectedExercise);

  // al cargar, llenamos la matriz por defecto con aleatorios para probar
  matrix.fillRandom(1, 20);
  output.innerText = "Matriz inicial (aleatoria 1-20) creada.\nPuedes usar 'Llenar Aleatorio' para valores 1-100.";
  drawMatrix(matrix);
}

initialize();


// ==========================
// Ejecutar ejercicios de figuras (1–22)
// ==========================
function runExercise() {
  const selected = exerciseSelect.value;
  switch (selected) {
    case "1": matrix.fillSquare(); break;
    case "2": matrix.fillInnerFrame(); break;
    case "3": matrix.fillCross(); break;
    case "4": matrix.fillBordersAndDiagonals(); break;
    case "5": matrix.fillFlag(); break;
    case "6": matrix.fillAlternateRows(); break;
    case "7": matrix.fillZigZag(); break;
    case "8": matrix.fillSpiral(); break;
    case "9": matrix.fillUpperLeftTriangle(); break;
    case "10": matrix.fillLowerRightTriangle(); break;
    case "11": matrix.fillGrid(); break;
    case "12": matrix.fillCenterTriangle(); break;
    case "13": matrix.fillConcentricRhombus(); break;
    case "14": matrix.fillConcentricCrosses(); break;
    case "15": matrix.fillDiagonalFlag(); break;
    case "16": matrix.fillNestedSquares(); break;
    case "17": matrix.fillBordersAndCenter(); break;
    case "18": matrix.fillParallelLines(); break;
    case "19": matrix.fillCrossMarks(); break;
    case "20": matrix.fillCornerRhombus(); break;
    case "21": matrix.fillChessboard(); break;
    case "22": matrix.fillHourglass(); break;
    default:
      alert("Selecciona un ejercicio válido.");
      return;
  }
  drawMatrix();
}

// ==========================
// Inicialización automática
// ==========================
initializeCanvas();
