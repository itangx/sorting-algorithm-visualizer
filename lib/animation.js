const animation = (type, oldIndex, newIndex, oldValue, newValue) => {
    return {
        type: type,
        oldIndex: oldIndex,
        newIndex: newIndex,
        oldValue: oldValue,
        newValue: newValue,
    }
}
const animationCheck = (oldIndex, newIndex, oldValue = 0, newValue = 0) => animation("check", oldIndex, newIndex, oldValue, newValue);
const animationSwap = (oldIndex, newIndex, oldValue = 0, newValue = 0) => animation("swap", oldIndex, newIndex, oldValue, newValue);
const animationClear = (oldIndex, newIndex, oldValue = 0, newValue = 0) => animation("clear", oldIndex, newIndex, oldValue, newValue);

module.exports = {
    animationCheck,
    animationClear,
    animationSwap
}