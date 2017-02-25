import { collideRects } from '../util/collision';

export default class {
  constructor ({x, y, dx = 2, dy = 2, radius = 5}) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
  }

  hit (otherRect) {
    const hitbox = { // use a rectangle for the ball
      x: this.x - this.radius,
      y: this.y - this.radius,
      width: this.radius * 2,
      height: this.radius * 2,
    };

    return collideRects(hitbox, otherRect);
  }

  move (players) {
    const x = this.x;
    const y = this.y;
    let dx = this.dx;
    let dy = this.dy;
    const canvas = window.canvas;

    if(this.hit(players[0].paddle) || this.hit(players[1].paddle)) {
      // only works for "frontal" hit. it bugs out when hittin the side of a panel
      // when hitting the side of a paddle it should probably reverse dy
      dx = -dx;
      // TODO: when only left/right half of ball hits the paddle, change dy speed?
      // dy = dy * 1.2; // speed up y
    }
    // bounce off the walls
    else if(x + dx > canvas.width-this.radius || x + dx < this.radius) {
      if(x + dx < this.radius) { // hit left wall
        players[1].score++;
      }
      else if(x + dx > canvas.width-this.radius) {
        players[0].score++; // hit right wall
      }

      dx = -dx; // change movement direction
    }

    if(y + dy > canvas.height-this.radius || y + dy < this.radius) {
      dy = -dy; // change movement direction
    }

    // new direction + speed
    this.dx = dx;
    this.dy = dy;

    // new position
    this.x += dx;
    this.y += dy;
  }

  draw (ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.closePath();
  }
}