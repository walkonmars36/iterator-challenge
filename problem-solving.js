// 2

/* Takes an array of words
Returns a new array of words
Figure out the difference with the examples below and use an array iterator method to implement it.*/

const wordArraySpot = ["spray", "limit", "disco", "exuberant", "destruction", "present"];

const sliceWords = (array) => {
  return array.filter((word) => {
    return word.length > 6;
  });
};

console.log(sliceWords(wordArraySpot));

/* Takes an array of words
Returns a new array of words
Figure out the difference with the examples below and use an array iterator method to implement it. */

const discoArray = ["please camel", "join casing", "these disco", "with shoes"];

const camelCase = (array) => {
  return array.map((string) => {
    let camelArr = string.split(" ");
    console.log(camelArr);

    return camelArr[0] + camelArr[1].charAt(0).toUpperCase() + camelArr[1].slice(1);
  });
};

console.log(camelCase(discoArray));

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
  return array.map((item) => item.value).reduce((prev, current) => prev + current);
};

console.log(totalValues(scrabbleArray));
