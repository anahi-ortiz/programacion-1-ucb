class Matrix{
    rows;
    cols;
    data;

    constructor(rowsParam, colsParam, defaulValue = 0){
        this.rows = rowsParam
        this.cols = colsParam
        this.data = []
        for (let i = 0; i < rowsParam; i++ ){
            const rowTemp = [];
            for (let j = 0; j <colsParam; j++){
                rowTemp.push(defaulValue);
            }
            this.data.push(rowTemp);
        }
    }
    isValidPosition (row, col){
        return row >= 0 && row < this.rows && col >= 0 &&col < this.cols;
    }
    setValue (row, col, value ){
        if (this.isValidPosition(row,col)){
            this.data [row] [col] = value;
        }
    }
    getValue(row, col) {
        if (this.isValidPosition(row, col)){
            return this.data[row][col];
        }else{
            return null
        }
    }

    fillRandom(min, max) {
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                const random = Math.floor(Math.random() * (max - min + 1)) + min;
                this.data[i][j] = random;
            }
        }
    }

    fillIncrementRows(){
        var initialValue = 1;
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                this.data[i][j] = initialValue;
            }
            initialValue = initialValue + 2;
        }
    }
//1
    fillSquare() {
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                this.data[i][j] = 1;
            }
        }
    }
//2
    fillInnerFrame() {
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                if (i === 0 || j === 0 || i === this.rows - 1 || j === this.cols - 1) {
                    this.data[i][j] = 0;
                } else {
                    this.data[i][j] = 1;
                }
            }
        }
    }
//3
    fillCross() {
        let mid = Math.floor(this.rows / 2);
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                if (i === mid || j === mid) {
                    this.data[i][j] = 1;
                } else {
                    this.data[i][j] = 0;
                }
            }
        }
    }


//4
    fillBordersAndDiagonals() {
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                if (i === 0 || j === 0 || i === this.rows - 1 || j === this.cols - 1) {
                    this.data[i][j] = 1;
                } else if (i === j || i + j === this.cols - 1) {
                    this.data[i][j] = 2;
                } else {
                    this.data[i][j] = 0;
                }
            }
        }
    }
//5
    fillFlag() {
        for (let i = 0; i < this.rows; i++) {
            let value;
            if (i < this.rows / 3) value = 1;
            else if (i < 2 * this.rows / 3) value = 2;
            else value = 0;

            for (let j = 0; j < this.cols; j++) {
                this.data[i][j] = value;
            }
        }
    }
//6
    fillAlternateRows() {
        for (let i = 0; i < this.rows; i++) {
            let value = i % 2 === 0 ? 1 : 0;
            for (let j = 0; j < this.cols; j++) {
                this.data[i][j] = value;
            }
        }
    }
//7
    fillZigZag() {
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                this.data[i][j] = (j === i) ? 1 : 0;
            }
        }
    }
//8
    fillSpiral() {
      // Ejercicio 8: Relleno en Espiral (versión simplificada)
    // Reiniciar matriz a ceros
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                this.data[i][j] = 0;
            }
        }

        let top = 0;
        let bottom = this.rows - 1;
        let left = 0;
        let right = this.cols - 1;

        // Recorremos "capas" pero avanzando las fronteras en 2
        // para dejar una fila/columna de ceros entre vueltas (camino).
        while (top <= bottom && left <= right) {
            // izquierda -> derecha (fila superior)
            for (let j = left; j <= right; j++) this.data[top][j] = 1;
            // bajar la frontera superior
            top++;

            // arriba -> abajo (columna derecha)
            for (let i = top; i <= bottom; i++) this.data[i][right] = 1;
            // mover la frontera derecha
            right--;

            // derecha -> izquierda (fila inferior)
            if (top <= bottom) {
                for (let j = right; j >= left; j--) this.data[bottom][j] = 1;
                bottom--;
            }

            // abajo -> arriba (columna izquierda)
            if (left <= right) {
                for (let i = bottom; i >= top; i--) this.data[i][left] = 1;
                left++;
            }

            // IMPORTANTE: avanzamos las fronteras una vez más para dejar
            // una "línea" de ceros entre esta vuelta y la siguiente.
            top++;
            left++;
            bottom--;
            right--;
        }
    }

//9
   fillUpperLeftTriangle() {
    for (let i = 0; i < this.rows; i++) {
        for (let j = 0; j < this.cols; j++) {
            if (j <= i) {
                this.data[i][j] = 1;  // Lado del triángulo
            } else {
                this.data[i][j] = 0;  // Resto vacío
            }
        }
    }
}

//10
    fillLowerRightTriangle() {
       for (let i = 0; i < this.rows; i++) {
        for (let j = this.cols - 1 - i; j < this.cols; j++) {
            this.data[i][j] = 1;
        }
    }
}
//11
    fillGrid() {
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                if (i % 2 === 0 || j % 10 === 0 || j === this.cols - 1) {
                    this.data[i][j] = 1;
                } else {
                    this.data[i][j] = 0;
                }
            }
        }
    }
//12
    fillCenterTriangle() {
    for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                if (
                    i >= 1 && i <= 5 && // zona del triángulo
                    j >= this.cols / 2 - i &&
                    j <= this.cols / 2 + i
                ) {
                    this.data[i][j] = 1;
                } else {
                    this.data[i][j] = 0;
                }
            }
        }
    }
    //13
    fillConcentricRhombus() {
        let mid = Math.floor(this.rows / 2);
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                let dist = Math.abs(i - mid) + Math.abs(j - mid);
                this.data[i][j] = dist <= 4 ? 1 : 0;
            }
        }
    }

    //14
    fillConcentricCrosses() {
        let mid = Math.floor(this.rows / 2);
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                if (
                    i === 2 || j === 2 ||
                    i === mid || j === mid ||
                    i === this.rows - 3 || j === this.cols - 3
                ) {
                    this.data[i][j] = 1;
                } else {
                    this.data[i][j] = 0;
                }
            }
        }
    }
    //15
    fillDiagonalFlag() {
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                this.data[i][j] = (j <= i) ? 1 : 0;
            }
        }
    }

    //16
    fillNestedSquares() {
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {

                // --- Cuadro exterior (borde) ---
                if (i === 0 || j === 0 || i === this.rows - 1 || j === this.cols - 1) {
                    this.data[i][j] = 1;

                // --- Cuadro interior ---
                } else if (i >= 2 && i <= this.rows - 3 && j >= 2 && j <= this.cols - 3) {

                    // Rellenar el borde del cuadrado interior con 2
                    if (i === 2 || j === 2 || i === this.rows - 3 || j === this.cols - 3) {
                        this.data[i][j] = 2;
                    } else {
                        this.data[i][j] = 0; // Interior vacío
                    }

                // --- Resto ---
                } else {
                    this.data[i][j] = 0;
                }
            }
        }
    }

 
    //17
    fillBordersAndCenter() {
        let start = Math.floor(this.rows / 2) ;
        let end = Math.floor(this.cols / 2) ;

        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                if (i === 0 || j === 0 || i === this.rows - 1 || j === this.cols - 1) {
                    this.data[i][j] = 1;
                } else if (i >= start - 2 && i <= start + 1 && // 4 filas centradas
                j >= end - 2 && j <= end + 1)
                {this.data[i][j] = 2; // 3 columnas centradas
                }else {
                    this.data[i][j] = 0;
                }
            }
        }
    }

    //18
    fillParallelLines() {
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                if (i % 2 === 0 || j === 0 || j === this.cols - 1) {
                    this.data[i][j] = 1;
                } else {
                    this.data[i][j] = 0;
                }
            }
        }
    }

    //19

    fillCrossMarks() {
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                this.data[i][j] = ((i + j) % 4 === 0 || (i - j) % 4 === 0) ? 1 : 0;
            }
        }
    }

    //20
    fillCornerRhombus() {
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {

                // Por defecto todo vacío
                this.data[i][j] = 0;

                // --- Esquina superior izquierda ---
                if (i + j <= 3) {
                    this.data[i][j] = 1;
                }

                // --- Esquina superior derecha ---
                else if ((this.cols - 1 - j) + i <= 3) {
                    this.data[i][j] = 1;
                }

                // --- Esquina inferior izquierda ---
                else if ((this.rows - 1 - i) + j <= 3) {
                    this.data[i][j] = 1;
                }

                // --- Esquina inferior derecha ---
                else if ((this.rows - 1 - i) + (this.cols - 1 - j) <= 3) {
                    this.data[i][j] = 1;
                }
            }
        }
    }

    //21
    fillChessboard() {
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                this.data[i][j] = (i + j) % 2 === 0 ? 1 : 0;
            }
        }
    }

    //22

    fillHourglass() {
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                if (j >= i && j < this.cols - i || j >= this.cols - i - 1 && j <= i) {
                    this.data[i][j] = 1;
                } else {
                    this.data[i][j] = 0;
                }
            }
        }
    }


    sumabtn(){
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
            this.data[i][j] = (j % 3)+ (i * 3+ 1);
            }
        }
              
    }


    toString() {
        return this.data.map(row => row.join('\t')).join('\n');
    }



}