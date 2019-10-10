const lowerCase = require('./ex01');
const upperCase = require('./ex02');
const length = require('./ex03');
const capitalize = require("./ex04");
const decapitalize = require("./ex05");
const kebabCase = require("./ex06");
const snakeCase = require("./ex07");
const swapCase = require("./ex08");
const charAt = require("./ex09");
const first = require("./ex10");
const last = require("./ex11");
const substr = require("./ex12");
const slice = require("./ex13");
const count = require("./ex14");
const countSubtrings = require("./ex15");
const countWords = require("./ex16");
const indexOf = require("./ex17");
const lastIndexOf = require("./ex18");

console.log('loxerCase:')
console.log(lowerCase('Chopper'))
console.log(lowerCase('TONY TONY'))
console.log('____')

console.log('upperCase:')
console.log(upperCase('Chopper'))
console.log(upperCase('TONY TONY'))
console.log('____')

console.log('length:')
console.log(length('ch0pper'));
console.log('____')

console.log('capitalize:')
console.log(capitalize('one Code'));
console.log(capitalize('One CODE', true));
console.log('____')

console.log('decapitalize:')
console.log(decapitalize('Wooman'));
console.log(decapitalize('El Drago'))
console.log('____')

console.log('kebabCase:')
console.log(kebabCase('love one code'));
console.log(kebabCase('LoveOnCode'));
console.log(kebabCase('-Love-One-Code-'));
console.log('____')

console.log('snakeCase:')
console.log(snakeCase('gold d roger'));
console.log(snakeCase('GoldDRoger'));
console.log(snakeCase('-Gold-D-Roger-'))
console.log('____')

console.log('swapCase:')
console.log(swapCase('One Code'));
console.log(swapCase('1337 Fruits'))
console.log('____')

console.log('charAt:')
console.log(charAt('chopper', 0));
console.log(charAt('chopper', 1))
console.log('____')

console.log('first:')
console.log(first('chopper'));
console.log(first('chopper', 2));
console.log(first('tony', 5));
console.log('____')

console.log('last:')
console.log(last('chopper'));
console.log(last('chopper', 2));
console.log(last('tony', 5));
console.log('____')

console.log('substr:');
console.log(substr('tony tony chopper',10));
console.log(substr('ch0pper',2,2));
console.log('____')

console.log('slice:');
console.log(slice('ch0pper', 1))
console.log(slice('ch0pper', -4))
console.log(slice('ch0pper', 1, 4))
console.log('____')

console.log('count:');
console.log(count('ch0pper'))
console.log('____')

console.log('countSubtrings:')
console.log(countSubtrings('Tony Tony Chopper!', 'Tony'));
console.log(countSubtrings('gomu gomu no bazooka', 'gatling'));
console.log('____')

console.log('countWords:');
console.log(countWords('Tony Tony Ch0pper'));
console.log(countWords('TonyTonyCh0pper'));
console.log(countWords('Tony Tony - Ch0pper'));
console.log('____')

console.log("indexOf:")
console.log(indexOf('ch0pper', '0'))
console.log(indexOf('ch0pper', 'o'))
console.log('____')

console.log('LastIndexOf:')
console.log(lastIndexOf('ch0pper', 'p'))
console.log(lastIndexOf('ch0pper', 'o'))