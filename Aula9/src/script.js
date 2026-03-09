// Utilização do método toString()
let numero = 123;
let exToString = numero.toString();
console.log(typeof exToString);

// Utilização do método toExponential()
let a = 9.464;
let exToExponential = a.toExponential(2);
console.log(exToExponential);

// Utilização do método toFixed()
let b = 44.6346210
let exToFixed = b.toFixed(2);
console.log(exToFixed);

// Utilização do método toPrecision()
let c = 73.849238732;
let exToPrecision = c.toPrecision(4)
console.log(exToPrecision);

// Utilização do método valueOf()
let d = 2003;
let exValueOf = d.valueOf();
console.log(exValueOf);

// Utilização do método Number()
let e = "593";
let exNumber = Number(e);
console.log(exNumber);
