const palindromes = function (orgPhase) {
    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789'
    let newPhase = orgPhase.toLowerCase().split("").filter((character) => alphanumerical.includes(character)).join("")
    let revPhase = newPhase.split("").reverse().join("")
    return revPhase === newPhase
};

// Do not edit below this line
module.exports = palindromes;
