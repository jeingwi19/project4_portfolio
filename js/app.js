import {GlowParticle} from './glowparticle.js';

//원형 컬러
const COLORS = [
  {r: 255, g: 109, b: 46}, //orange
  {r: 220, g: 20, b: 60}, //red
  {r: 83, g: 74, b: 201}, //purple
  {r: 255, g: 109, b: 46}, //orange
  {r: 255, g: 217, b: 0}, //yellow
];

class App {
  constructor() {
    //캔버스 생성
    this.canvas = document.createElement('canvas');
    document.body.appendChild(this.canvas);

    //현재 실행되는 View의 Context를 return
    this.ctx = this.canvas.getContext('2d');
    //픽셀 해상도
    this.pixelRatio = (window.devicePixelRatio > 1) ? 2 : 1;

    this.totalParticles = 15;
    this.particles = [];
    this.maxRadius = 900;
    this.minRadius = 400;

    //리사이징 이벤트 .bind()함수 출력
    window.addEventListener('resize', this.resize.bind(this), false);
    this.resize();
  }

  //리사이즈 함수
  resize() {
    this.stageWidth = document.body.clientWidth;
    this.stageHeight = document.body.clientHeight;

    this.canvas.width = this.stageWidth * this.pixelRatio;
    this.canvas.height = this.stageHeight * this.pixelRatio;
    this.ctx.scale(this.pixelRatio, this.pixelRatio);

    this.ctx.globalCompositeOperation = 'saturation';

    this.createParticles();
  }

  //캔버스 원형 스타일 함수
  createParticles() {
    let curColor = 0;
    this.particles = [];

    for(let i = 0; i < this.totalParticles; i++){

      const item = new GlowParticle(
        Math.random() * this.stageWidth,
        Math.random() * this.stageHeight,
        Math.random() * (this.maxRadius - this.minRadius) + this.minRadius, COLORS[curColor]
      );

      if(++curColor >= COLORS.length) {
        curColor = 0;
      }

      this.particles[i] = item;
    }
  }

  //원형 애니메이션 값
  animate() {
    window.requestAnimationFrame(this.animate.bind(this));

    this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);

    for(let i = 0; i < this.totalParticles; i++) {
      const item = this.particles[i];
      item.animate(this.ctx, this.stageWidth, this.stageHeight);
    }
  }
}

window.onload = () => {
  new App();
}