let number = [1,2];

number.push(5);
number.push(10);
number.push(10);


console.log(number);
console.log([...new Set(number)]);