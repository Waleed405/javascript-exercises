const removeFromArray = function() {
    let paramArr = arguments[0];

    for(let i = 1; i < arguments.length; i++) {
        let index = paramArr.indexOf(arguments[i]);
        while(index != -1) {
            paramArr.splice(index, 1);
            index = paramArr.indexOf(arguments[i]);
        }
    }

    return paramArr;
};

// Do not edit below this line
module.exports = removeFromArray;
