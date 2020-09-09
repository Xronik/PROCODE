let maxNmbr = 1;
let iterationCount = 1;
let fibonachiRow = [1, 1];

function maxFibonachi(arg) {
  while (maxNmbr < arg) {
    fibonachiRow[iterationCount] = maxNmbr;
    maxNmbr = fibonachiRow[iterationCount] + fibonachiRow[iterationCount - 1];
    ++iterationCount;
  }

  return `Максимальное число фибоначи ниже ${arg} = ${
    fibonachiRow[fibonachiRow.length - 1]
  }  ////  Количество итераций = ${iterationCount}`;
}

console.log(maxFibonachi(9991999));
