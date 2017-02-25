
var canvas = null;
var ctx = null; // global drawing context

import Player from './classes/Player';
import Ball from './classes/Ball';
import ScoreDisplay from './classes/ScoreDisplay';
import Sound from './classes/Sound';
import Particle from './classes/Particle';

import { keyDownHandler, keyUpHandler } from './buttonhandler';

const DEBUG = false;
let debugDraw = false;


const init = () => {
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");

  const ballRadius = 10;

  const sounds = {
    bgm: new Sound("sounds/freesound - accidental acid sounds.mp3 363696_1391542-lq.mp3"),
    ballPaddle: new Sound("sounds/freesound - saxu.mp3 47178_528100-lq.mp3"),
    ballWall: new Sound("sounds/freesound - fluttering 9753_24818-lq.mp3"),
  }

  const ball = new Ball({
    x: canvas.width/2,
    y: canvas.height-30,
    dx: 2,
    dy: -2,
    radius: ballRadius,
    sounds,
  });

  const player1 = new Player({
    x: 10,
    y: canvas.height / 2
  });

  const player2 = new Player({
    x: canvas.width-10-5,
    y: canvas.height / 2
  });

  const scoreDisplay = new ScoreDisplay([player1, player2]);

  sounds.bgm.play();

  const particles = [];
  var particleCount = 100;
  for(var i = 0; i < particleCount; i++) {
    particles.push(new Particle({x: 50, y: 50}));
  }

  const draw = () => {
    if(DEBUG && !debugDraw) {
      requestAnimationFrame(draw);
      return;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    player1.update();
    player2.update();

    ball.move([player1, player2]);

    scoreDisplay.update();

    ball.draw(ctx);
    player1.draw(ctx);
    player2.draw(ctx);

    particles.map((p, i) => {
      p.draw(ctx);
      const shouldRemove = p.update();
      if(shouldRemove) particles.splice(i, 1); // maybe better remove it after the map?
    });

    requestAnimationFrame(draw);
  }

  draw();

  document.addEventListener("keydown", e => keyDownHandler(e, {inputPlayer1: player1.input, inputPlayer2: player2.input}), false);
  document.addEventListener("keyup", e => keyUpHandler(e, {inputPlayer1: player1.input, inputPlayer2: player2.input}), false);

  // debuggin: draw on every keypress
  document.addEventListener("keydown", () => {debugDraw = true}, false);
  document.addEventListener("keyup", () => debugDraw = false, false);
}



export default init;
