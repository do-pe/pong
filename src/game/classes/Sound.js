export default class {
  constructor(src) {
    const myAudio = document.createElement("audio");
    myAudio.src = src;

    this.audio = myAudio;
  }

  play(start, stop) {
    if(start) {
      this.audio.currentTime = start;
    }
    this.audio.play();
  }
}
