const array = [];
function generateArray(length, min, max) {
  for (let i = 0; i < length; i++) {
    // цикл для генерації випадкових чисел і додавання у масив
    array.push(Math.floor(Math.random() * (max - min + 1)) + min);
  }
  for (let i = 0; i < array.length; i++) {
    // цикл для виводу елементів
    console.log(`{[cell - ${i}, value - ${array[i]}]}`);
  }
}
generateArray(7, -15, 15);

function bubbleSort(array, pointer = true) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      if (
        (pointer && array[j] > array[j + 1]) ||
        (!pointer && array[j] < array[j + 1])
      ) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }
  return array;
}

/*const unsortedArray = array;
console.log("unsorted array:", unsortedArray);

const sortedArrayTrue = bubbleSort(unsortedArray, true);
console.log("sorted array (true):", sortedArrayTrue);

const sortedArrayFalse = bubbleSort(unsortedArray, false);
console.log("sorted array (false):", sortedArrayFalse);*/

function intertionSort(array, pointer = true) {
  for (let i = 1; i < array.length; i++) {
    const currentV = array[i];
    let p = i;
    if (pointer) {
      while (p > 0 && array[p - 1] > currentV) {
        array[p] = array[p - 1];
        p--;
      }
    } else {
      while (p > 0 && array[p - 1] < currentV) {
        array[p] = array[p - 1];
        p--;
      }
    }
    array[p] = currentV;
  }
  return array;
}
/*const unsortedArray = array;
console.log("unsorted array:", unsortedArray);

const sortedArrayTrue = intertionSort(unsortedArray, true);
console.log("sorted array (true):", sortedArrayTrue);

const sortedArrayFalse = intertionSort(unsortedArray, false);
console.log("sorted array (false):", sortedArrayFalse);*/


function selectionSort(array, pointer = true) { 
        
    for(let i = 0; i < array.length; i++) {
        let min = i;
        for(let j = i+1; j < array.length; j++){
            if((pointer && array[j] > array[j + 1]) || (!pointer && array[j] < array[j + 1])) {
                min=j; 
            }
         }
         if (min !== i) {
            [array[i], array[min]] = [array[min], array[i]];    
        }
    }
    return array;
}
const unsortedArray = array;
console.log("unsorted array:", unsortedArray);

const sortedArrayTrue = selectionSort(unsortedArray, true);
console.log("sorted array (true):", sortedArrayTrue);

const sortedArrayFalse = selectionSort(unsortedArray, false);
console.log("sorted array (false):", sortedArrayFalse);

