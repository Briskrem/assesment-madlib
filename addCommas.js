function addCommas(num) {
   
    let arr = String(num)

    let wholeNumber;
    let afterDecimal = null;
    if(arr.indexOf('.') != -1){
        wholeNumber= arr.split('.')
        arr = wholeNumber[0]
        afterDecimal = wholeNumber[1]
    }

    arr = arr.split('')
    arr.reverse().join('')

    for(let i = arr.length; i > 0; i--){
        if(i%3==0){
            arr.splice(i,0,',')   
        }
    }
  
    let p = arr.reverse().join('')
    if(p[0] == ','){
        p = p.substring(1)
    }
    
    if(afterDecimal){
        return p.concat('.', afterDecimal)
    }else{
        return p
    }
    
}

console.log(addCommas(1000))

module.exports = addCommas;