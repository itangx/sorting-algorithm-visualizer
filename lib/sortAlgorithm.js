const animation = (type, idx, oldValue, newValue) => {
    return {
        type: type,
        idx: idx,
        oldValue: oldValue,
        newValue: newValue,
    }
}
const animationCheck = (idx, oldValue, newValue) => animation("check", idx, oldValue, newValue);
const animationSwap = (idx, oldValue, newValue) => animation("swap", idx, oldValue, newValue);
const animationClear = (idx, oldValue, newValue) => animation("clear", idx, oldValue, newValue);
const bubbleSort = (array) => {
    const animations = [];
    const duplicateArray = array.slice();
    while(true) {
        let continueSort = false;
        for (let index = 0; index < duplicateArray.length - 1; index++) {
            animations.push(animationCheck(index, duplicateArray[index], duplicateArray[index + 1]));
            if (duplicateArray[index] > duplicateArray[index + 1]) {
                animations.push(animationSwap(index, duplicateArray[index], duplicateArray[index + 1]));
                let tempValue = duplicateArray[index + 1];
                duplicateArray[index + 1] = duplicateArray[index];
                duplicateArray[index] = tempValue;
                continueSort = true
            }
            animations.push(animationClear(index, duplicateArray[index], duplicateArray[index + 1]));
        }

        if (!continueSort) break;
    }
    return animations;
};

module.exports = {
    bubbleSort
}