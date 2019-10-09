function first(str='', len=1) {
    if (len > str.length)
    {
        return str;
    }
    else
    {
        return str.substr(str.length-len);
    }
}

console.log(first('chopper'));
console.log(first('chopper', 2));
console.log(first('tony', 5));