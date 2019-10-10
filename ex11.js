module.exports=function last(str='', len=1) {
    if (len > str.length)
    {
        return str;
    }
    else
    {
        return str.substr(str.length-len);
    }
}