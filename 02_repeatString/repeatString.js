const repeatString = function(word, count) {
    if(count<0){
        return "ERROR";
    }
    
    let result = ""
    for(let i = 0; i < count; i++) {
        result += word;
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
