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

module.exports = {
    bubbleSort,
    selectionSort,
    insertionSort
}