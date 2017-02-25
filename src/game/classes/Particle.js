const PARTICLE_MODE = {
  GROW: "GROW",
  SHRINK: "SHRINK",
}

export default class {
  constructor({x, y}) {
		//speed range = -2.5 to 2.5
		this.speed = {x: -2.5+Math.random()*5, y: -2.5+Math.random()*5};

		this.position = {x, y};

		//radius range = 10-30
		this.radius = 5+Math.random()*10;

    this.mode = PARTICLE_MODE.SHRINK;
    //this.color = ..
    //this.life...
    //this.gravity = ...
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.fillStyle = "white";
    ctx.arc(this.position.x, this.position.y, this.radius, Math.PI*2, false);
    ctx.fill();
  }

  update() {
    this.position.x += this.speed.x;
    this.position.y += this.speed.y;

    if(this.mode = PARTICLE_MODE.SHRINK) {
      // make it gradually smaller
      this.radius *= 0.95;
    }

    // return false when the particle should die
    return this.radius < 0.5;
  }
}
