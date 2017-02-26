import Particle from './Particle';

export default class {
  constructor() {
    this.particles = [];
  }

  add({x, y, count = 42}) {
    for(let i = 0; i < count; i++) {
      this.particles.push(new Particle({x, y}));
    }
  }

  update() {
    this.particles.map((p, i) => {
      const shouldRemove = p.update();
      if(shouldRemove) this.particles.splice(i, 1); // maybe better remove it after the map?
    });
  }

  draw(ctx) {
    this.particles.map((p, i) => {
      p.draw(ctx);
    });
  }
}
