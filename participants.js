// Returns an array of all the player names (no player should be listed more than once)
const participants = function(matches) {
  const playerSet = new Set();

  // Adds to set the winners and losers of each match
  matches.forEach((match) => {
    playerSet.add(match.winner);
    playerSet.add(match.loser);
  })

  // Returns only the unique names
  return [...playerSet];
}

module.exports = participants;
