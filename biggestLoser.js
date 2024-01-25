// Returns the loser name with the biggest tally of loser_points.
// If a player is the winner, the loser_points are subtracted, 
// and if a player is a loser, then the loser_points are added. 
// Find the player with the largest tally of loser_points.
const biggestLoser = function(matches) {
  const tally = {};

  // Iterate through each match
  matches.forEach(match => {
    // Add or subtract points
    tally[match.winner] = (tally[match.winner] || 0) - match.loser_points;
    tally[match.loser] = (tally[match.loser] || 0) + match.loser_points;
  })

  // Find player with most loser points
  let biggestLoser = null
  let maxPoints = Number.NEGATIVE_INFINITY;

  // Determine biggest loser
  for (const player in tally) {
    if (tally[player] > maxPoints) {
      biggestLoser = player;
      maxPoints = tally[player];
    }
  }
  return biggestLoser;
}

module.exports = biggestLoser;
