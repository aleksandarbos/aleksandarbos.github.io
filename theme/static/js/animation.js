// theme/static/js/animation.js
class ParticleCanvas {
  constructor() {
    this.canvas = document.getElementById("animation-canvas");
    this.ctx = this.canvas.getContext("2d");
    this.particles = [];
    this.mouseX = 0;
    this.mouseY = 0;

    this.init();
    this.animate();
    this.setupEventListeners();
  }

  init() {
    this.resize();
    this.createParticles();
  }

  resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  createParticles() {
    this.particles = [];
    const numberOfParticles = Math.floor(
      (this.canvas.width * this.canvas.height) / 10000
    );

    for (let i = 0; i < numberOfParticles; i++) {
      this.particles.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        size: Math.random() * 2 + 1,
        speedX: Math.random() * 2 - 1,
        speedY: Math.random() * 2 - 1,
      });
    }
  }

  animate() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.particles.forEach((particle) => {
      // Update position
      particle.x += particle.speedX;
      particle.y += particle.speedY;

      // Wrap around screen
      if (particle.x > this.canvas.width) particle.x = 0;
      if (particle.x < 0) particle.x = this.canvas.width;
      if (particle.y > this.canvas.height) particle.y = 0;
      if (particle.y < 0) particle.y = this.canvas.height;

      // Draw particle
      this.ctx.beginPath();
      this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      this.ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
      this.ctx.fill();

      // Draw connections
      this.particles.forEach((otherParticle) => {
        const dx = particle.x - otherParticle.x;
        const dy = particle.y - otherParticle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 100) {
          this.ctx.beginPath();
          this.ctx.strokeStyle = `rgba(255, 255, 255, ${
            0.2 * (1 - distance / 100)
          })`;
          this.ctx.lineWidth = 0.5;
          this.ctx.moveTo(particle.x, particle.y);
          this.ctx.lineTo(otherParticle.x, otherParticle.y);
          this.ctx.stroke();
        }
      });
    });

    requestAnimationFrame(() => this.animate());
  }

  setupEventListeners() {
    window.addEventListener("resize", () => this.resize());
    this.canvas.addEventListener("mousemove", (e) => {
      this.mouseX = e.clientX;
      this.mouseY = e.clientY;
    });
  }
}

// Initialize when the DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  new ParticleCanvas();
});
