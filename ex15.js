function countSubtrings(str='', substring)
{
    let compteur=0;
    let tab = str.split(' ');

    for(elements of tab)
    {
        if (substring === elements)
        {
          compteur++;
        }
    }
return compteur;

}

console.log(countSubtrings('Tony Tony Chopper!', 'Tony'));
console.log(countSubtrings('gomu gomu no bazooka', 'gatling'));