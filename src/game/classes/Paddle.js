
export default class {
  constructor ({x, y, width = 5, height = 50, powerup = null}) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.powerup = powerup;
  }

  draw (ctx) {
    ctx.beginPath();
    ctx.rect(this.x, this.y, this.width, this.height);

    if(this.powerup) {
      ctx.strokeStyle = "rgba(255, 255, 0, 0.7)";
      ctx.lineWidth = 3;
      ctx.stroke();
    }

    ctx.fillStyle = "white";
    ctx.fill();
    ctx.closePath();
  }
}
