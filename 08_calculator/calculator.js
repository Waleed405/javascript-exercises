const add = function(a, b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b
};

const sum = function(a) {
	const thingy = a.reduce((total, c) => {
    	return add(total, c);
  	} ,0);

  	return thingy;
};

const multiply = function(a) {
	const thingy = a.reduce((product, c) => {
		return product*c;
	}, 1)
	return thingy;
};

const power = function(a,b) {
	return a**b;
};

const factorial = function(a) {
	let total = 1;
	for(let i = a; i>1; i--) {
		total *= i;
	}

	return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
