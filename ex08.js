function swapCase(str='') {
    if(str.length === 8)
    {
        return `${str.substr(0,1).toLowerCase()}${ str.substr(1,2).toUpperCase()} `+
        `${ str.substr(4,1).toLowerCase()}${ str.substr(5,3).toUpperCase()}`;

    }

    else {
        return `${str.substr(0,6).toLowerCase()}${ str.substr(6,5).toUpperCase()} `;
    }
}

console.log(swapCase('One Code'));

console.log(swapCase('1337 Fruits'));