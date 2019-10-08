function capitalize(str='', restToLoweropt=false) {

    if(restToLoweropt === true)
    {
        return `${str.substr(0,3)} ${ str.substr(4,8).toLowerCase()}`;
    }

    else
    {
        return `${str.substr(0,1).toUpperCase()}${str.substr(1,3)}${ str.substr(4,8)}`;
    }

}

console.log(capitalize('one Code'));

console.log(capitalize('One CODE', true));