// matrix.js (corregido)
// Clase Matrix con 25 métodos para el práctico.
// No usa consola; devuelve resultados que apps.js mostrará en pantalla.

class Matrix {
  rows;
  cols;
  data;

  constructor(rowsParam = 10, colsParam = 10, defaultValue = 0) {
    this.rows = rowsParam;
    this.cols = colsParam;
    this.data = [];
    for (let i = 0; i < this.rows; i++) {
      const row = [];
      for (let j = 0; j < this.cols; j++) row.push(defaultValue);
      this.data.push(row);
    }
  }

  isValidPosition(row, col) {
    return row >= 0 && row < this.rows && col >= 0 && col < this.cols;
  }

  setValue(row, col, value) {
    if (this.isValidPosition(row, col)) this.data[row][col] = value;
  }

  getValue(row, col) {
    return this.isValidPosition(row, col) ? this.data[row][col] : null;
  }

  // ---- Básicos ----
  fillRandom(min = 1, max = 100) {
    // llena la matriz con aleatorios entre min y max (incl.)
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        const r = Math.floor(Math.random() * (max - min + 1)) + min;
        this.data[i][j] = r;
      }
    }
  }

  fillIncrementRows() {
    // fila 0 -> 1, fila1 -> 3, fila2 -> 5, ...
    let val = 1;
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) this.data[i][j] = val;
      val += 2;
    }
  }

  cloneEmpty() {
    return new Matrix(this.rows, this.cols, 0);
  }

  clone() {
    const m = new Matrix(this.rows, this.cols, 0);
    for (let i = 0; i < this.rows; i++)
      for (let j = 0; j < this.cols; j++) m.data[i][j] = this.data[i][j];
    return m;
  }

  // ---- Ejercicio 1: Suma de todos los elementos ----
  sumElements() {
    let suma = 0;
    for (let i = 0; i < this.rows; i++)
      for (let j = 0; j < this.cols; j++) suma += this.data[i][j];
    return { suma, message: `Suma total de todos los elementos: ${suma}` };
  }

  // ---- Ejercicio 2: Max y Min ----
  findMaxMin() {
    let max = this.data[0][0];
    let min = this.data[0][0];
    for (let i = 0; i < this.rows; i++)
      for (let j = 0; j < this.cols; j++) {
        const v = this.data[i][j];
        if (v > max) max = v;
        if (v < min) min = v;
      }
    return { max, min, message: `Máximo: ${max} | Mínimo: ${min}` };
  }

  // ---- Ejercicio 3: Promedio ----
  average() {
    const total = this.rows * this.cols;
    const { suma } = this.sumElements();
    const promedio = suma / total;
    return { promedio, message: `Promedio de la matriz: ${promedio.toFixed(2)}` };
  }

  // ---- Ejercicio 4: Contar ocurrencias ----
  countOccurrences(target) {
    let count = 0;
    const positions = [];
    for (let i = 0; i < this.rows; i++)
      for (let j = 0; j < this.cols; j++)
        if (this.data[i][j] === target) {
          count++;
          positions.push([i, j]);
        }
    return {
      target,
      count,
      positions,
      message: `El número ${target} aparece ${count} veces. Posiciones: ${JSON.stringify(positions)}`
    };
  }

  // ---- Ejercicio 5: Invertir filas (cada fila) ----
  reverseRows() {
    const m = this.clone();
    for (let i = 0; i < m.rows; i++) m.data[i].reverse();
    return { resultMatrix: m, message: `Cada fila fue invertida (reflejo horizontal por fila).` };
  }

  // ---- Ejercicio 6: Rotar 90 grados horario ----
  rotate90() {
    if (this.rows !== this.cols) {
      // devolver matriz vacía y mensaje de error
      return { resultMatrix: null, message: "Rotación 90°: se requiere matriz cuadrada." };
    }
    const n = this.rows;
    const res = new Matrix(n, n, 0);
    for (let i = 0; i < n; i++)
      for (let j = 0; j < n; j++) res.data[j][n - 1 - i] = this.data[i][j];
    return { resultMatrix: res, message: "Matriz rotada 90° en sentido horario." };
  }

  // ---- Ejercicio 7: Transpuesta (nueva matriz) ----
  transposeNew() {
    const res = new Matrix(this.cols, this.rows, 0);
    for (let i = 0; i < this.rows; i++)
      for (let j = 0; j < this.cols; j++) res.data[j][i] = this.data[i][j];
    return { resultMatrix: res, message: "Transpuesta (nueva matriz) generada." };
  }

  // ---- Ejercicio 8: Multiplicación de matrices ----
  multiplyBy(other) {
    if (this.cols !== other.rows) {
      return { resultMatrix: null, message: "Multiplicación: dimensiones incompatibles." };
    }
    const res = new Matrix(this.rows, other.cols, 0);
    for (let i = 0; i < res.rows; i++) {
      for (let j = 0; j < res.cols; j++) {
        let sum = 0;
        for (let k = 0; k < this.cols; k++) sum += this.data[i][k] * other.data[k][j];
        res.data[i][j] = sum;
      }
    }
    return { resultMatrix: res, message: "Resultado de A * B calculado." };
  }

  // ---- Ejercicio 9: Diagonal principal ----
  getMainDiagonal() {
    const arr = [];
    const n = Math.min(this.rows, this.cols);
    for (let i = 0; i < n; i++) arr.push(this.data[i][i]);
    return { diagonal: arr, message: `Diagonal principal: [${arr.join(", ")}]` };
  }

  // ---- Ejercicio 10: Diagonal secundaria ----
  getSecondaryDiagonal() {
    const arr = [];
    const n = Math.min(this.rows, this.cols);
    for (let i = 0; i < n; i++) arr.push(this.data[i][this.cols - 1 - i]);
    return { diagonal: arr, message: `Diagonal secundaria: [${arr.join(", ")}]` };
  }

  // ---- Ejercicio 11: Suma de filas ----
  sumRows() {
    const sums = [];
    for (let i = 0; i < this.rows; i++) {
      let s = 0;
      for (let j = 0; j < this.cols; j++) s += this.data[i][j];
      sums.push(s);
    }
    return { sums, message: `Suma de cada fila: [${sums.join(", ")}]` };
  }

  // ---- Ejercicio 12: Suma de columnas ----
  sumCols() {
    const sums = Array(this.cols).fill(0);
    for (let i = 0; i < this.rows; i++)
      for (let j = 0; j < this.cols; j++) sums[j] += this.data[i][j];
    return { sums, message: `Suma de cada columna: [${sums.join(", ")}]` };
  }

  // ---- Ejercicio 13: Transpuesta in-place ----
  transposeInPlace() {
    if (this.rows !== this.cols) {
      return { success: false, message: "Transpuesta in-place requiere matriz cuadrada." };
    }
    for (let i = 0; i < this.rows; i++)
      for (let j = i + 1; j < this.cols; j++) {
        const tmp = this.data[i][j];
        this.data[i][j] = this.data[j][i];
        this.data[j][i] = tmp;
      }
    return { success: true, message: "Transpuesta realizada in-place sobre la misma matriz." };
  }

  // ---- Ejercicio 14: Matriz identidad (estática) ----
  static identity(n) {
    const I = new Matrix(n, n, 0);
    for (let i = 0; i < n; i++) I.data[i][i] = 1;
    return I;
  }

  // ---- Ejercicio 15: Simétrica (verificar) ----
  isSymmetric() {
    if (this.rows !== this.cols) return { symmetric: false, message: "Matriz no cuadrada → no es simétrica." };
    for (let i = 0; i < this.rows; i++)
      for (let j = i + 1; j < this.cols; j++)
        if (this.data[i][j] !== this.data[j][i])
          return { symmetric: false, message: "¿Es simétrica? false" };
    return { symmetric: true, message: "¿Es simétrica? true" };
  }

  // ---- Ejercicio 16: Triangular superior (verificar) ----
  isUpperTriangular() {
    if (this.rows !== this.cols) return { isUpper: false, message: "Matriz no cuadrada → no aplica." };
    for (let i = 1; i < this.rows; i++)
      for (let j = 0; j < i; j++) if (this.data[i][j] !== 0)
        return { isUpper: false, message: "¿Es triangular superior? false" };
    return { isUpper: true, message: "¿Es triangular superior? true" };
  }

  // ---- Ejercicio 17: Triangular inferior (verificar) ----
  isLowerTriangular() {
    if (this.rows !== this.cols) return { isLower: false, message: "Matriz no cuadrada → no aplica." };
    for (let i = 0; i < this.rows; i++)
      for (let j = i + 1; j < this.cols; j++) if (this.data[i][j] !== 0)
        return { isLower: false, message: "¿Es triangular inferior? false" };
    return { isLower: true, message: "¿Es triangular inferior? true" };
  }

  // ---- Ejercicio 18: Suma de diagonales ----
  sumDiagonals() {
    if (this.rows !== this.cols) {
      // se permite matrices no cuadradas: usamos min(rows,cols)
    }
    const n = Math.min(this.rows, this.cols);
    let main = 0, sec = 0;
    for (let i = 0; i < n; i++) {
      main += this.data[i][i];
      sec += this.data[i][this.cols - 1 - i];
    }
    return { main, sec, message: `Suma diagonal principal: ${main} | Suma diagonal secundaria: ${sec}` };
  }

  // ---- Ejercicio 19: Suma de bordes ----
  sumBorders() {
    let s = 0;
    for (let i = 0; i < this.rows; i++)
      for (let j = 0; j < this.cols; j++)
        if (i === 0 || j === 0 || i === this.rows - 1 || j === this.cols - 1) s += this.data[i][j];
    return { sumaBordes: s, message: `Suma de los bordes: ${s}` };
  }

  // ---- Ejercicio 20: Max y Min con posiciones ----
  findMaxMinWithPositions() {
    let max = this.data[0][0], min = this.data[0][0];
    let maxPos = [0, 0], minPos = [0, 0];
    for (let i = 0; i < this.rows; i++)
      for (let j = 0; j < this.cols; j++) {
        const v = this.data[i][j];
        if (v > max) { max = v; maxPos = [i, j]; }
        if (v < min) { min = v; minPos = [i, j]; }
      }
    return {
      max, min, maxPos, minPos,
      message: `Máximo: ${max} en posición (${maxPos[0]}, ${maxPos[1]}) | Mínimo: ${min} en posición (${minPos[0]}, ${minPos[1]})`
    };
  }

  // ---- Ejercicio 21: Promedio (otro método) ----
  averageMatrix() {
    return this.average(); // reutilizamos
  }

  // ---- Ejercicio 22: Contar pares e impares ----
  countEvenOdd() {
    // CORRECCIÓN: incrementar las variables explícitamente (no usar ternario con ++)
    let pares = 0, impares = 0;
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        if (this.data[i][j] % 2 === 0) {
          pares++;
        } else {
          impares++;
        }
      }
    }
    return { pares, impares, message: `Cantidad de pares: ${pares} | Cantidad de impares: ${impares}` };
  }

  // ---- Ejercicio 23: Buscar un valor en la matriz (todas las posiciones) ----
  findValuePositions(value) {
    const positions = [];
    for (let i = 0; i < this.rows; i++)
      for (let j = 0; j < this.cols; j++)
        if (this.data[i][j] === value) positions.push([i, j]);
    return { value, positions, message: `Número buscado: ${value} | Posiciones encontradas: ${JSON.stringify(positions)}` };
  }

  // ---- Ejercicio 24: Suma arriba y abajo diagonal principal ----
  sumAboveBelowDiagonal() {
    if (this.rows !== this.cols) {
      // definimos por min dimension
    }
    let arriba = 0, abajo = 0;
    for (let i = 0; i < this.rows; i++)
      for (let j = 0; j < this.cols; j++) {
        if (j > i) arriba += this.data[i][j];
        else if (i > j) abajo += this.data[i][j];
      }
    return { arriba, abajo, message: `Suma arriba de la diagonal: ${arriba} | Suma abajo de la diagonal: ${abajo}` };
  }

  // ---- Ejercicio 25: Matriz espejo (reflejo horizontal) ----
  mirrorHorizontal() {
    const res = this.clone();
    for (let i = 0; i < res.rows; i++) {
      for (let j = 0; j < Math.floor(res.cols / 2); j++) {
        const tmp = res.data[i][j];
        res.data[i][j] = res.data[i][res.cols - 1 - j];
        res.data[i][res.cols - 1 - j] = tmp;
      }
    }
    return { resultMatrix: res, message: "Reflejo horizontal (espejo) generado." };
  }

  // Representación en texto
  toString() {
    return this.data.map(row => row.join("\t")).join("\n");
  }
}
