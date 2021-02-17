import { animationCheck, animationClear, animationSwap } from './animation';

const bubbleSort = (array) => {
    const animations = [];
    const duplicateArray = array.slice();
    while(true) {
        let continueSort = false;
        
        for (let index = 0; index < duplicateArray.length - 1; index++) {
            animations.push(animationCheck(index, index + 1));

            if (duplicateArray[index] > duplicateArray[index + 1]) {
                animations.push(animationSwap(index, index + 1, duplicateArray[index], duplicateArray[index + 1]));
                let tempValue = duplicateArray[index + 1];
                duplicateArray[index + 1] = duplicateArray[index];
                duplicateArray[index] = tempValue;
                continueSort = true
            }

            animations.push(animationClear(index, index + 1));
        }

        if (!continueSort) break;
    }
    return [animations, duplicateArray];
};

const selectionSort = (array) => {
    const animations = [];
    const duplicateArray = array.slice();

    for (let index = 0; index < duplicateArray.length - 1; index++) {
        let minIndex = index;
        for (let j = index + 1 ; j < duplicateArray.length; j++) {
            if (duplicateArray[minIndex] > duplicateArray[j]) {
                minIndex = j;
            }
        }
        animations.push(animationCheck(index, minIndex));
        animations.push(animationSwap(index, minIndex, duplicateArray[index], duplicateArray[minIndex]));
        animations.push(animationClear(index, minIndex));
        let tempValue = duplicateArray[minIndex];
        duplicateArray[minIndex] = duplicateArray[index];
        duplicateArray[index] = tempValue;
    }

    return [animations, duplicateArray];
};

const insertionSort = (array) => {
    const animations = [];
    const duplicateArray = array.slice();

    for (let index = 1; index < duplicateArray.length; index++) {
        let currentValue = duplicateArray[index];
        let j = index - 1;
        while (j >= 0 && duplicateArray[j] > currentValue) {
            duplicateArray[j + 1] = duplicateArray[j];
            j--;
        }
        duplicateArray[j + 1] = currentValue;
    }

    return [animations, duplicateArray];
};

const quickSortRange = (array, first, last) => {
    if (last <= first) 
        return;
    
    const pivot = array[first];
    let position = last;
    for (let index = last; index > first; index--) {
        if (array[index] > pivot) {
            swapArrayPosition(array, position, index);
            position--;
        }
    }

    swapArrayPosition(array, position, first);
    quickSortRange(array, first, position - 1);
    quickSortRange(array, position + 1, last);
};

const quickSort = (array) => {
    const animations = [];
    const duplicateArray = array.slice();
    quickSortRange(duplicateArray, 0, duplicateArray.length - 1);
    console.log(array);
    console.log(duplicateArray);
    return [animations, duplicateArray];
};

const mergeSortRange = (array) => {
    if (array.length <= 1) return;
    const mid = Math.floor(array.length / 2);
    const arrayL = array.slice(0, mid);
    const arrayR = array.slice(mid, array.length);
    mergeSortRange(arrayL);
    mergeSortRange(arrayR);

    //do merge array
    let positionL = 0; 
    let positionR = 0;
    let index = 0;
    while (positionL < arrayL.length && positionR < arrayR.length) {
        if (arrayL[positionL] < arrayR[positionR]) {
            array[index] = arrayL[positionL];
            positionL++;
        } else {
            array[index] = arrayR[positionR];
            positionR++;
        }
        index++;
    }

    //remaining of left
    while (positionL < arrayL.length) {
        array[index] = arrayL[positionL];
        positionL++;
        index++;
    }

    //remaining of right
    while (positionR < arrayR.length) {
        array[index] = arrayR[positionR];
        positionR++;
        index++;
    }
};

const mergeSort = (array) => {
    const animations = [];
    const duplicateArray = array.slice();
    mergeSortRange(duplicateArray)
    console.log(array);
    console.log(duplicateArray);
    return [animations, duplicateArray];
};

const heapSort = (array) => {
    const animations = [];
    const duplicateArray = array.slice();
    quickSortRange(duplicateArray, 0, duplicateArray.length - 1);
    console.log(array);
    console.log(duplicateArray);
    return [animations, duplicateArray];
};

const swapArrayPosition = (array, a, b) => {
    let tempValue = array[b];
    array[b] = array[a];
    array[a] = tempValue;
}

module.exports = {
    bubbleSort,
    selectionSort,
    insertionSort,
    quickSort,
    mergeSort,
    heapSort
}