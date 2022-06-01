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

// 2

/* Takes an array of words
Returns a new array of words
Figure out the difference with the examples below and use an array iterator method to implement it.*/

const wordArraySpot = ["spray", "limit", "disco", "exuberant", "destruction", "present"];

const sliceWords = (array) => {
  return array.slice(-3);
};

console.log(sliceWords(wordArraySpot));

/* Takes an array of words
Returns a new array of words
Figure out the difference with the examples below and use an array iterator method to implement it. */

const discoArray = ["please camel", "join casing", "these disco", "with shoes"];

const camelize = (array) => {};

console.log(camelize(discoArray));

/* Takes an array of scrabble tile objects
Returns a score
Figure out the difference with the examples below and use an array iterator method to implement it.
*/

const scrabbleArray = [
  {letter: "a", value: 1},
  {letter: "k", value: 5},
  {letter: "c", value: 3},
];

const totalValues = (array) => {
  return array.map((item) => item.value).reduce((prev, current) => (prev += current));
};

console.log(totalValues(scrabbleArray));
