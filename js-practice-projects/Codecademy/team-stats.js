const team = {
    _players: [],
    _games: [],
    get players() {
      return this._players;
    },
    get games() {
      return this._games;
    },
    _players: [
      { firstName: "Eddie", lastName: "Stink", age: 32 },
      { firstName: "Nanci", lastName: "Boudin", age: 45 },
      { firstName: "Dewglass", lastName: "Richard", age: 1400 },
    ],
    _games: [
      { opponent: "Pittsburg CoolBirds", teamPoints: 14, opponentPoints: 12 },
      {
        opponent: "Chicago Feather Rufflers",
        teamPoints: 10,
        opponentPoints: 15,
      },
      { opponent: "Orlando Pelicans", teamPoints: 32, opponentPoints: 0 },
    ],
    addPlayer: function (newFirstName, newLastName, newAge) {
      const player = {
        firstName: newFirstName,
        lastName: newLastName,
        age: newAge,
      };
      this._players.push(player);
    },
     addGame: function (newOpponent, newTeamPoints, newOpponentPoints) {
      const newGame = {
        opponent: newOpponent,
        teamPoints: newTeamPoints,
        opponentPoints: newOpponentPoints,
      };
      this._games.push(newGame);
    }
  };
  team.addPlayer('Bugs', 'Bunny', 76)
  team.addGame('Titans', 100, 98)
  console.log(team._players)
  console.log(team._games)