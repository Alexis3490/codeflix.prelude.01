module.exports=function slice(str='', start, endopt=str.length) {

    return str.substr(start, endopt-1)
}