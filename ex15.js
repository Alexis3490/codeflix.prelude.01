module.exports=function countSubtrings(str='', substring)
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

