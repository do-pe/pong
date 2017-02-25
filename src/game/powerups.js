const powerups = {
  move: "MOVE_X_POS", // player can move on x-axis by pressing left/right
  changeSpeed: "CHANGE_SPEED", // player can accelerate/slow down the ball by pressing left/right
  beat: "BEAT_BALL", // earn bonus by pressing a button when the ball hits
  narrow: "NARROW", // panels move closer together - harder for both players
  fireball: "FIREBALL", // avoid the ball or it destroys the paddle
  switchSides: "SWITCH_SIDES", // paddles change sides
  largePaddle: "LARGE_PADDLE",
  smallPaddle: "SMALL_PADDLE",
  coop: "COOP", // both players switch to the same side and there are two balls? - maybe not a powerup, but rather a "mode"
}
