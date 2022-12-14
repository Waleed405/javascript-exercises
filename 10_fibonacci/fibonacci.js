const fibonacci = function(n) {
    if(n<0) {
        return "OOPS"
    }

    // return naiveSolution(n);
    return solution(n);
};

const naiveSolution = function(n) {
    if(n==0) {
        return 0;
    }

    if(n==1) {
        return 1;
    }

    return fibonacci(n-1) + fibonacci(n-2);
}

const solution = function(n) {
    let cache = {};

    if(n==0) {
        return 0;
    }

    if(n==1) {
        return 1;
    }

    if(cache[n] != undefined) {
        return cache[n];
    }

    let value = fibonacci(n-1) + fibonacci(n-2);
    cache[n] = value;
    return value;
}

// Do not edit below this line
module.exports = fibonacci;
