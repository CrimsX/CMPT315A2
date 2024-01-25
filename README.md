# CMPT315A2
Understanding JavaScript and Creating your own NPM Library

## Purpose
Develop a basic JavaScript library similar to Lodash that provides functions to manipulate arrays and objects. 

## Usage
**Install it:**
'npm install @crimsx/CMPT315A2'
**Require it:**
'const _ = require('@crimsx/CMPT315A2');'
**Call it:**
'const _ = _.findNaNIndex()'
## Documentation
The following functions are currently implemented:
* 'findNaNIndex(arr)': Find all the indexes where NaN is found in a given array of numbers and NaN. 
* 'isArrayFactorChain(arr)': Return true or false if an array is a factor chain or not. 
* 'countNumberOfArrays(arr)': Return the count for the number of arrays inside a given array. 
* 'participants(matches)': Returns an array of all the player names (no player should be listed more than once). 
* 'winnersObject(matches)': Returns an object which lists each participant, and a list of who they've beaten. 
* 'biggestLoser(matches)': Returns the loser name with the biggest tally of loser_points. If a player is the winner, the loser_points are subtracted, and if a player is a loser, then the loser_points are added. Find the player with the largest tally of loser_points. 
