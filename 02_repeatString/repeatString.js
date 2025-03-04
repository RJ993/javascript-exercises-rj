const repeatString = function(word, number) {
    if(number < 0) return "ERROR";
    let phrase = ''
    for(i = 0; i < number; i++){
        phrase += word
    }
    return phrase;
};

// Do not edit below this line
module.exports = repeatString;
