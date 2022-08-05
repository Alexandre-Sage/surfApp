export default function toCamelCase(stringToConvert) {
    const arrayOfString = stringToConvert.split(" ");
    const lower = arrayOfString.shift().toLocaleLowerCase();
    arrayOfString.forEach((word, index) => {
        const newWord = word.split("")
        newWord[0] = word.charAt(0).toUpperCase()
        return arrayOfString.splice(index, 1, newWord.join(""))
    })
    arrayOfString.unshift(lower)
    return arrayOfString.join("");
}