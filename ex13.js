function slice(str='', start, endopt=str.length) {

    return str.substr(start, endopt-1)
}

console.log(slice('ch0pper', 1))
console.log(slice('ch0pper', -4))
console.log(slice('ch0pper', 1, 4))