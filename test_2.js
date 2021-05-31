const areAnagrams = (str1, str2) => {
    
    if(str1.length !== str2.length)
        return false;

    for(var i=0;i<str1.length;i++){
        var found = false;
        for(var j=0;j<str2.length;j++){
            if(str1[i] === str2[j])
                found = true;
        }
        if(!found){
            return false;
        }
    }
    
    return true;

}
console.log(areAnagrams('bhaskor', 'bhasrok'));