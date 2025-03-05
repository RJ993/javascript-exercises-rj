const sumAll = function(initialNumber, finishingNumber) {
    let finalSum = 0
    if(initialNumber < 0 || finishingNumber < 0){
        return "ERROR"
    }else if(!Number.isInteger(initialNumber) || !Number.isInteger(finishingNumber)){
        return "ERROR"
    }else if (initialNumber < finishingNumber){
        for(i = initialNumber; i <= finishingNumber; i++){
            finalSum += initialNumber++
        }
        return parseInt(finalSum)
    }else if (initialNumber > finishingNumber){
        for(i = finishingNumber; i <= initialNumber; i++){
            finalSum += finishingNumber++
        }
        return parseInt(finalSum)
    }


};

// Do not edit below this line
module.exports = sumAll;
