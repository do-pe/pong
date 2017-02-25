export default class {
  constructor(players = []) {
    this.players = players;
    this.scoreDisplay = document.getElementById("scoreDisplay");
  }

  update () {
    this.scoreDisplay.innerHTML = `${this.players[0].score} | ${this.players[1].score}`
  }
}
