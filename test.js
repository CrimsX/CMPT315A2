/* Import */
const findNaNIndex = require('./findNaNIndex')
const isArrayFactorChain = require('./isArrayFactorChain')
const countNumberOfArrays = require('./countNumberOfArrays')
const participants = require('./participants');
const winnersObject = require('./winnersObject');
const biggestLoser = require('./biggestLoser');

/* Test data */
console.log("findNanIndex:")
console.log(findNaNIndex([2, NaN, 8, 16, 32])) // => [1]
console.log(findNaNIndex([2, 4, NaN, 16, 32, NaN])) // => [2,5]
console.log(findNaNIndex([2, 4, 16, 32])) // => []

console.log("\nisArrayFactorChain:")
console.log(isArrayFactorChain([2, 4, 8, 16, 32])) // => true
console.log(isArrayFactorChain([2, 4, 8, 16, 32, 68])) // => false

console.log("\ncountNumberOfArrays:");
console.log(countNumberOfArrays([2,8,[6],3,3,5,3,4,[5,4]])) // => 2
console.log(countNumberOfArrays([2,8,[6,3,3],[4],5,[3,4,[5,4]]])) // => 3

const matches = [
  { winner: 'Alice', loser: 'Bob',   loser_points: 3 },
  { winner: 'Carol', loser: 'Dean',  loser_points: 1 },
  { winner: 'Elise', loser: 'Bob',   loser_points: 2 },
  { winner: 'Elise', loser: 'Carol', loser_points: 4 },
  { winner: 'Alice', loser: 'Carol', loser_points: 2 },
  { winner: 'Carol', loser: 'Dean',  loser_points: 3 },
  { winner: 'Dean',  loser: 'Elise', loser_points: 2 },
]

console.log("\nparticipants");
console.log(participants(matches)) // => ['Alice', 'Bob', 'Carol', 'Dean', 'Elise']

console.log("\nwinnersObject:");
console.log(winnersObject(matches))
        // expected output:
/*
          {
            'Alice': ['Bob', 'Carol'],
            'Bob':   [],
            'Carol': ['Dean'],
            'Dean':  ['Elise'],
            'Elise': ['Bob', 'Carol'],
          }
*/

console.log("\nbiggestLoser:");
console.log(biggestLoser(matches)) // => 'Bob',
