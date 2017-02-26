import Paddle from './Paddle';

export default class {
  constructor ({score = 0, powerup = null, x, y} = {}) {
    this.score = score;
    this.powerup = powerup;
    this.Behaviour = null;
    this.paddle = new Paddle({x, y});
    this.input = {
      left: false,
      right: false,
      up: false,
      down: false,
    }
  }

  addBehaviour (powerup) {
    // ...
  }

  timedPress ({timeframe = 50, buttons = []} = {}) {
    // check if the player pressed a button in a timeframe before an event
    // for now, we just use right and left keys
    // later we might have to differentiate more
    const now = new Date();
    const pressed = Math.max(this.input.rightTime || this.input.leftTime);
    return (now - pressed < timeframe);
  }

  update () {
    if(this.input.down && this.paddle.y < window.canvas.height- this.paddle.height) {
      this.paddle.y += 7;
    }
    if(this.input.up && this.paddle.y > 0) {
      this.paddle.y -= 7;
    }
    if(this.input.right && this.paddle.x < window.canvas.width- this.paddle.width) {
      this.paddle.x += 7;
    }
    if(this.input.left && this.paddle.x > 0) {
      this.paddle.x -= 7;
    }
  }

  draw(ctx) {
    this.paddle.draw(ctx);
  }
}
