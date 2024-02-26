
export const genPassword = (...params) => {

    
    const [length,number,symbols,upperCase,lowerCase]=params
    var allChars = ''
    let symbolsChar = '!@#$%^&*()_-+=<>?/'
    let upperCaseChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let lowerCaseChar = "abcdefghijklmnopqrstuvwxyz"
    let numbers = '0123456789'
    let isSymbol = symbols
    let isUpperCase = upperCase
    let isLowerCase = lowerCase
    let isNumber = number
    

    if (isSymbol) allChars += symbolsChar
    if (isUpperCase) allChars += upperCaseChar
    if (isLowerCase) allChars += lowerCaseChar
    if (isNumber) allChars += numbers
    let generatedPassword = ''
    for (let i = 0; i < length; i++) {

        let index = Math.floor(Math.random() * allChars.length)
        generatedPassword += allChars[index]
    }
    return generatedPassword

}

