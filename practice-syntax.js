// 1

/* Takes an array of names as a parameter.
It needs return a new array with each of the first letters of the names capitalized */

const nameArray = ["charlie", "rob"];

const capitaliseFirstLetter = (array) => {
  return array.map((name) => {
    // console.log(name.charAt(0).toUpperCase());
    // console.log(name.substring(1));
    return name.charAt(0).toUpperCase() + name.substring(1);
  });
};

console.log(capitaliseFirstLetter(nameArray));

/* Takes an array of letters as a parameter.
It needs return a new array with only consonants, the vowels need to be removed.
*/

const mixedLetters = ["c", "r", "a"];

const removeVowels = (array) => {
  const vowels = ["a", "e", "i", "o", "u"];

  const consonants = array.filter((letter) => {
    return vowels.indexOf(letter) === -1;
  });

  return consonants;
};

console.log(removeVowels(mixedLetters));

/* 

Takes an array of numbers as a parameter
It needs to return the mean average
Total the numbers and divide by the amount of numbers in the array
*/

const scoresArray = [25, 50, 175, 50];

const meanAverage = (array) => {
  return array.reduce((prevVal, currentVal) => (prevVal += currentVal)) / array.length;
};

console.log(meanAverage(scoresArray));
