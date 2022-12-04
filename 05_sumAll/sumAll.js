const sumAll = function(paramOne, paramTwo) {
    let result = 0;

    if(typeof paramOne != "number") {
        return "ERROR"
    }

    if(typeof paramTwo != "number") {
        return "ERROR"
    }

    if(paramOne < 0) {
        return "ERROR"
    }

    if(paramTwo < 0) { 
        return "ERROR"
    }

    // paramOne is not necessarily smaller or bigger than paramTwo so we cannot make assumptions on the order of the for-loop
    let small = Math.min(paramOne, paramTwo);
    let large = Math.max(paramOne, paramTwo);

    for(let i = small; i <= large; i++) {
        result += i;
    }

    return result;
};

// Do not edit below this line
module.exports = sumAll;
