//elementos del DOOM
const canvas = document.getElementById('matrixCanvas');
const fillButton = document.getElementById('fillBtn');
const clearButton = document.getElementById('clearBtn');
const incrementBtn = document.getElementById('incrementBtn');
const exerciseSelect = document.getElementById('exerciseSelect');
const executeExercise = document.getElementById('executeExercise');
const sumabtn1 = document.getElementById('sumabtn');
//Contexto de dibujo 
const context = canvas.getContext('2d');

// instancia de la matriz
const matrix = new Matrix(10, 10, 0);

//inicializa el canvas y el dibuja la matriz
function initializaCanvas(){
    drawMatrix();
    window.addEventListener('resiza', drawMatrix);
    fillButton.addEventListener('click', fillMatrix);
    clearButton.addEventListener('click', clearCanvas);
    incrementBtn.addEventListener('click', fillIncrementRows);;
    sumabtn1.addEventListener('click', sumabtn);
    
    executeExercise.addEventListener('click', () => {
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
    });
    
}

// Dibuja la matriz en el canvas
function drawMatrix() {
  const width = canvas.width = canvas.clientWidth;
  const height = canvas.height = canvas.clientHeight;
  const cellWidth = width / matrix.cols;
  const cellHeight = height / matrix.rows;

  context.clearRect(0, 0, width, height);
  context.font = `${Math.min(cellWidth, cellHeight) / 3}px Arial`;
  context.textAlign = 'center';
  context.textBaseline = 'middle';

  for (let row = 0; row < matrix.rows; row++) {
    for (let col = 0; col < matrix.cols; col++) {
      const x = col * cellWidth;
      const y = row * cellHeight;
      const value = matrix.getValue(row, col);

      context.strokeRect(x, y, cellWidth, cellHeight); 
      context.fillText(value, x + cellWidth / 2, y + cellHeight / 2);
        }
    }
}


// Llena la matriz con valores aleatorios y la dibuja
function fillMatrix() {
    matrix.fillRandom(0, 9);
    drawMatrix();
}

function fillIncrementRows(){
    matrix.fillIncrementRows();
    drawMatrix();
}
function sumabtn(){
    matrix.fillIncrementRows();
    drawMatrix();
}




// Limpia el canvas
function clearCanvas() {
    context.clearRect(0, 0, canvas.width, canvas.height);
}
// Ejecuta la inicialización
initializaCanvas();



