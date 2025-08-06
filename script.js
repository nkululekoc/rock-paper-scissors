let gameResults = document.querySelector(".result-container");
let loses = document.querySelector(".loses");
let wins = document.querySelector(".wins");
let draws = document.querySelector(".draws");
let score = {
  win: 0,
  lose: 0,
  draw: 0
};

function playerMove(move) {
  let computerMove = Math.random();

  if (computerMove < 0.3) {
    computerMove = "rock";
  } else if (computerMove > 0.6) {
    computerMove = "scissors";
  } else if (computerMove >= 0.3 || computerMove <= 0.6) {
    computerMove = "paper";
  }

  if (
    (computerMove == "rock" && move == "rock") ||
    (computerMove == "paper" && move == "paper") ||
    (computerMove == "scissors" && move == "scissors")
  ) {
    gameResults.innerHTML = `
        <p class="results">DRAW</p>
        <div class="results-container">
          <div>
            <img
              src="images/${move}-emoji.png"
              alt="paper hand emoji"
              class="player-results-images"
            />
            <p>YOU</p>
          </div>
          <div>
            <img
              src="images/${computerMove}-emoji.png"
              alt="scissors hand imoji"
              class="computer-results-images"
            />
            <p>COMPUTER</p>
          </div>
    </div>
`;
    score.draw++;
    draws.innerHTML = score.draw;
  } else if (
    (computerMove == "rock" && move == "paper") ||
    (computerMove == "paper" && move == "scissors") ||
    (computerMove == "scissors" && move == "rock")
  ) {
    gameResults.innerHTML = `
        <p class="results">YOU WIN</p>
        <div class="results-container">
          <div>
            <img
              src="images/${move}-emoji.png"
              alt="paper hand emoji"
              class="player-results-images"
            />
            <p>YOU</p>
          </div>
          <div>
            <img
              src="images/${computerMove}-emoji.png"
              alt="scissors hand imoji"
              class="computer-results-images"
            />
            <p>COMPUTER</p>
          </div>
    </div>
`;
    score.win++;
    wins.innerHTML = score.win;
  } else if (
    (computerMove == "paper" && move == "rock") ||
    (computerMove == "scissors" && move == "paper") ||
    (computerMove == "rock" && move == "scissors")
  ) {
    gameResults.innerHTML = `
        <p class="results">YOU LOSE</p>
        <div class="results-container">
          <div>
            <img
              src="images/${move}-emoji.png"
              alt="paper hand emoji"
              class="player-results-images"
            />
            <p>YOU</p>
          </div>
          <div>
            <img
              src="images/${computerMove}-emoji.png"
              alt="scissors hand imoji"
              class="computer-results-images"
            />
            <p>COMPUTER</p>
          </div>
    </div>
`;
    score.lose++;
    loses.innerHTML = score.lose;
  }
}
