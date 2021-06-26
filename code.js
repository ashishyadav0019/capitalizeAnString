function capitalize(str){
    var strObj = {};
    var outStr = "";
    for(var i =0; i<str.length; i++){
        strObj[i] = str[i]
    }
    strObj[0] = strObj[0].toUpperCase()
    for(var j=0; j<str.length; j++){
        if(strObj[j].charCodeAt()===32){
             if(strObj[j+1]) strObj[j+1] = strObj[j+1].toUpperCase()
        }
    outStr += strObj[j]
    }
    return outStr
}
capitalize("we should follow the programming expert")
