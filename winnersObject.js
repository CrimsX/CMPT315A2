// Returns an object which lists each participant, and a list of who they've beaten
const winnersObject = function(matches) {
  const results = {};
  
  // Iterate through each match
  for(const match of matches) {
    const winner = match.winner;
    const loser = match.loser;
    
    // Sets for each participant
    if(!results[winner]) {
      results[winner] = new Set();
    }
    if(!results[loser]) {
      results[loser] = new Set();
    }

    // Update the results
    results[winner].add(loser);
  }

  // Converts sets to arrays for the results
  for (const participant in results) {
    results[participant] = Array.from(results[participant]);
  }
  return results;
}

module.exports = winnersObject;
