const symbolsEl = document.querySelector('#symbols')
const numbersEl = document.querySelector('#numbers')
const lowercaseEl = document.querySelector('#lowercase')
const uppercaseEl = document.querySelector('#uppercase')
const similarEl = document.querySelector('#similar')
const ambiguousEl = document.querySelector('#ambiguous')
const finalPassword = document.querySelector('.final-password')
const btn = document.querySelector('.btn')

const symbolsArr = ['!','@','#','$','%', '^', '&',"{", "[","]", "(", ")", "/", ",",">"]
const numbersArr = ['0','1','2','3','4','5','6','7','8','9']
const uppercaseArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
const uppercaseArrExcluded = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "M", "N", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
const lowercaseArrExcluded = ["a", "b", "c", "d", "e", "f", "g", "h", "j", "k", "m", "n", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
const lowercaseArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
const simmilarArr = ["i", "l", "1", "L", "o", "0", "O"]
const ambiguousArrExcluded = ['!','@','#','$','%', '^', '&']


btn.addEventListener('click', ()=> {
    const length = document.querySelector('#length').value

    const includeSymbols = symbolsEl.checked;
    const includeNumbers = numbersEl.checked;
    const includeLowercaseCharacters = lowercaseEl.checked;
    const includeUppercaseCharacter = uppercaseEl.checked;
    const exludeSimiliarCharacters = similarEl.checked;
    const exludeSAmbiguousCharacters = ambiguousEl.checked;

    const generatedPassword = generatePassword(length, includeSymbols, includeNumbers, includeLowercaseCharacters, includeUppercaseCharacter, exludeSimiliarCharacters, exludeSAmbiguousCharacters,lowercaseArrExcluded)


    finalPassword.innerText = generatedPassword
    
    
})

const generatePassword = (length, includeSymbols, includeNumbers, includeLowercaseCharacters, includeUppercaseCharacter, exludeSimiliarCharacters, exludeSAmbiguousCharacters) => {
    let password = ""
    

    const possibleOptions = [];

    if (includeSymbols) {
        possibleOptions.push('generateRandomSymbol');
    }

    if (includeNumbers) {
        possibleOptions.push('generateRandomNumber');
    }

    if (includeLowercaseCharacters) {
        possibleOptions.push('generateRandomLowercaseCharacter');
    }

    if (includeUppercaseCharacter) {
        possibleOptions.push('generateUppercaseCharacter');
    }

    for(let i=0; i<length; i++){
        const randomFunctionIndex = Math.floor(Math.random() * possibleOptions.length)
        const randomFunction = possibleOptions[randomFunctionIndex];

        if (randomFunction === 'generateRandomSymbol') {
            if(exludeSAmbiguousCharacters) {
            password += generateAmbiguousCharactersExcluded();
            } else {
                password += generateRandomSymbol();
            }
            
        }

        if (randomFunction === 'generateRandomNumber') {
            password += generateRandomNumber();
        }

        if (randomFunction === 'generateRandomLowercaseCharacter') {
            if(exludeSimiliarCharacters) {
                password += generateLowercaseCharacterWithExcluded()
            } else {
                password += generateRandomLowercaseCharacter();
            }
            
        }

        if (randomFunction === 'generateUppercaseCharacter') {
            if (exludeSimiliarCharacters) {
                password += generateUppercaseCharacterWithExcluded() ;
            } else {
                password += generateUppercaseCharacter();
            }
        }
    }
    
    return password
}

const generateRandomSymbol = () => {
    return symbolsArr[Math.floor(Math.random() * symbolsArr.length)];
}

const generateRandomNumber = () => {
    return Math.floor(Math.random() * 10);
}

const generateRandomLowercaseCharacter = () => {
    return lowercaseArr[Math.floor(Math.random() * lowercaseArr.length)];
}

const generateUppercaseCharacter = () => {
    return uppercaseArr[Math.floor(Math.random() * uppercaseArr.length)];

}

const generateUppercaseCharacterWithExcluded = () => {
    return uppercaseArrExcluded[Math.floor(Math.random() * uppercaseArrExcluded.length)];

}
const generateLowercaseCharacterWithExcluded = () => {
    return lowercaseArrExcluded[Math.floor(Math.random() * lowercaseArrExcluded.length)];

}

const generateAmbiguousCharactersExcluded = () => {
    return ambiguousArrExcluded[Math.floor(Math.random() * ambiguousArrExcluded.length)]
}
