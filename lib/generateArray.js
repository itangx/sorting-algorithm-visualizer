const generateArray = (length = 10, maxNumber = 10) => {
    return Array.from({length: length}, () => Math.floor(Math.random() * maxNumber) + 1);
};

module.exports = {
    generateArray
}