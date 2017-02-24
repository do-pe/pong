
var inputPlayer1 = {
  left: false,
  right: false,
  up: false,
  down: false,
}

class Player {
  constructor (score, powerup = null) {
    this.score = score;
    this.powerup = powerup;
    this.Behaviour = null;
  }

  addBehaviour (powerup) {
    // ...
  }

  move () {

  }
}

const init = () => {
  const canvas = document.getElementById("canvas");
  let ctx = canvas.getContext("2d");
  const scoreDisplay = document.getElementById("scoreDisplay");

  var x = canvas.width/2;
  var y = canvas.height-30;
  var dx = 2;
  var dy = -2;
  var ballRadius = 10;

  const player1 = new Player(0);
  const player2 = new Player(0);

  const paddleLeft = {
    height: 50,
    width: 5,
    x: 10,
    y: (canvas.height-50)/2,
  }

  const paddleRight = {
    height: 50,
    width: 5,
    x: canvas.width-10-5,
    y: (canvas.height-50)/2,
  }

  const playerInputAndMovePaddles = () => {
    if(inputPlayer1.down && paddleLeft.y < canvas.height- paddleLeft.height) {
      paddleLeft.y += 7;
    }
    else if(inputPlayer1.up && paddleLeft.y > 0) {
      paddleLeft.y -= 7;
    }
    else if(inputPlayer1.right && paddleLeft.x < canvas.width- paddleLeft.width) {
      paddleLeft.x += 7;
    }
    else if(inputPlayer1.left && paddleLeft.x > 0) {
      paddleLeft.x -= 7;
    }
  }

  const drawBall = () => {
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, Math.PI*2, false);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.closePath();
  }

  const drawLeftPaddle = () => {
    ctx.beginPath();
    ctx.rect(paddleLeft.x, paddleLeft.y, paddleLeft.width, paddleLeft.height);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.closePath();
  }

  const drawRightPaddle = () => {
    ctx.beginPath();
    ctx.rect(paddleRight.x, paddleRight.y, paddleRight.width, paddleRight.height);
    ctx.strokeStyle = "rgba(0, 0, 255, 0.5)";
    ctx.stroke();
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.closePath();
  }

  const updateScore = () => {
    scoreDisplay.innerHTML = `${player1.score} | ${player2.score}`
  }

  const draw = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawBall();
    drawLeftPaddle();
    drawRightPaddle();

    playerInputAndMovePaddles();

    // bounce off left paddle
    if(x + dx < paddleLeft.x + ballRadius
      && y > paddleLeft.y &&  y < paddleLeft.y + paddleLeft.height ) {
        // only works for the middle of the ball
        // TODO: when only left/right half of ball hits the paddle, change dy too? (or even speed?)
      dx = -dx;
    }
    // bounce off the walls
    else if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
      if(x + dx < ballRadius) { // hit left wall
        player2.score++;
        updateScore();
      }
      else if(x + dx > canvas.width-ballRadius) {
        player1.score++; // hit right wall
        updateScore();
      }

      dx = -dx; // change movement direction
    }

    if(y + dy > canvas.height-ballRadius || y + dy < ballRadius) {
      dy = -dy; // change movement direction
    }

    x += dx;
    y += dy;
  }

  // game.update -> player.update
  // game.draw -> player.draw

  setInterval(draw, 20);

  document.addEventListener("keydown", keyDownHandler, false);
  document.addEventListener("keyup", keyUpHandler, false);
}

const keyDownHandler = (e) => {
    if(e.keyCode === 39) {
        inputPlayer1.right = true;
    }
    else if(e.keyCode === 37) {
        inputPlayer1.left = true;
    }
    else if(e.keyCode === 38) {
        inputPlayer1.up = true;
    }
    else if(e.keyCode === 40) {
        inputPlayer1.down = true;
    }
}

const keyUpHandler = (e) => {
    if(e.keyCode === 39) {
        inputPlayer1.right = false;
    }
    else if(e.keyCode === 37) {
        inputPlayer1.left = false;
    }
    else if(e.keyCode === 38) {
        inputPlayer1.up = false;
    }
    else if(e.keyCode === 40) {
        inputPlayer1.down = false;
    }
}


export default init;
