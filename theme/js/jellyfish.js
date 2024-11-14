(function initAnimation() {
  // Responsive parameters based on screen size
  const getMobileParams = () => ({
    opacity: 0.376,
    speed: 0.6,
    pointSpacing: 5,
    startX: 99,
    endX: 300,
    startY: 99,
    endY: 300,
    backgroundColor: [0, 0, 0, 0.0],
    scale: 0.4,
    motionScale: 3,
  });

  const getDesktopParams = () => ({
    opacity: 0.376,
    speed: 0.6,
    pointSpacing: 5,
    startX: 99,
    endX: 300,
    startY: 99,
    endY: 300,
    backgroundColor: [0, 0, 0, 0.0],
    scale: 0.6,
    motionScale: 2,
  });

  function initJellyfish(containerId = "glCanvas") {
    // Check if mobile
    const isMobile = window.innerWidth <= 768;
    const PARAMS = isMobile ? getMobileParams() : getDesktopParams();

    // Create canvas if it doesn't exist
    let canvas = document.getElementById(containerId);
    if (!canvas) {
      canvas = document.createElement("canvas");
      canvas.id = containerId;
      document.body.appendChild(canvas);
    }

    // Add necessary styles
    // canvas.style.position = "fixed";
    // canvas.style.top = isMobile ? "25%" : "50%";
    // canvas.style.left = "50%";
    // canvas.style.transform = "translate(-50%, -50%)";
    // canvas.style.zIndex = "-1";
    // canvas.style.background = "transparent";

    function resizeCanvas() {
      const aspectRatio = 1;
      const windowAspectRatio = window.innerWidth / window.innerHeight;

      if (windowAspectRatio > aspectRatio) {
        canvas.height = window.innerHeight;
        canvas.width = window.innerHeight * aspectRatio;
      } else {
        canvas.width = window.innerWidth;
        canvas.height = window.innerWidth / aspectRatio;
      }
    }

    resizeCanvas();
    window.addEventListener("resize", () => {
      resizeCanvas();
      if (gl) {
        gl.viewport(0, 0, canvas.width, canvas.height);
      }
    });

    const gl = canvas.getContext("webgl", { alpha: true });
    if (!gl) {
      console.error("Unable to initialize WebGL");
      return;
    }

    function initWebGL() {
      const vertexShaderSource = `
      attribute vec2 a_position;
      void main() {
        gl_Position = vec4(a_position, 0.0, 1.0);
        gl_PointSize = 1.0;
      }
    `;

      const fragmentShaderSource = `
      precision mediump float;
      uniform float u_opacity;
      void main() {
        gl_FragColor = vec4(1.0, 1.0, 1.0, u_opacity);
      }
    `;

      function createShader(gl, type, source) {
        const shader = gl.createShader(type);
        gl.shaderSource(shader, source);
        gl.compileShader(shader);
        if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
          console.error("Shader compile error:", gl.getShaderInfoLog(shader));
          gl.deleteShader(shader);
          return null;
        }
        return shader;
      }

      const vertexShader = createShader(
        gl,
        gl.VERTEX_SHADER,
        vertexShaderSource
      );
      const fragmentShader = createShader(
        gl,
        gl.FRAGMENT_SHADER,
        fragmentShaderSource
      );

      if (!vertexShader || !fragmentShader) {
        console.error("Shader creation failed");
        return;
      }

      const program = gl.createProgram();
      gl.attachShader(program, vertexShader);
      gl.attachShader(program, fragmentShader);
      gl.linkProgram(program);

      if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        console.error("Program link error:", gl.getProgramInfoLog(program));
        return;
      }

      const positionAttributeLocation = gl.getAttribLocation(
        program,
        "a_position"
      );
      const opacityLocation = gl.getUniformLocation(program, "u_opacity");
      const positionBuffer = gl.createBuffer();

      function mag(x, y) {
        return Math.sqrt(x * x + y * y);
      }

      let t = 0;
      function calculatePoint(x, y) {
        const k = x / 8 - 25;
        const e = y / 8 - 25;
        const d = mag(k, e) ** 2 / 99;
        const q =
          (x / 3 + ((k * 0.5) / Math.cos(y * 5)) * Math.sin(d * d - t)) *
          PARAMS.motionScale;
        const c = d / 2 - t / 8;

        return [
          ((q * Math.sin(c) +
            e * Math.sin(d + k - t) * PARAMS.motionScale +
            200) /
            200 -
            1) *
            PARAMS.scale,
          (((q + y / 8 + d * 9 * PARAMS.motionScale) * Math.cos(c) + 200) /
            200 -
            1) *
            PARAMS.scale,
        ];
      }

      function draw() {
        gl.viewport(0, 0, canvas.width, canvas.height);
        gl.clearColor(...PARAMS.backgroundColor);
        gl.clear(gl.COLOR_BUFFER_BIT);
        gl.enable(gl.BLEND);
        gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

        const points = [];
        for (let y = PARAMS.startY; y < PARAMS.endY; y += PARAMS.pointSpacing) {
          for (let x = PARAMS.startX; x < PARAMS.endX; x++) {
            points.push(...calculatePoint(x, y));
          }
        }

        gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
        gl.bufferData(
          gl.ARRAY_BUFFER,
          new Float32Array(points),
          gl.STATIC_DRAW
        );

        gl.useProgram(program);
        gl.uniform1f(opacityLocation, PARAMS.opacity);
        gl.enableVertexAttribArray(positionAttributeLocation);
        gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
        gl.vertexAttribPointer(
          positionAttributeLocation,
          2,
          gl.FLOAT,
          false,
          0,
          0
        );

        gl.drawArrays(gl.POINTS, 0, points.length / 2);

        t += (Math.PI / 60) * PARAMS.speed;
        requestAnimationFrame(draw);
      }

      draw();
    }

    initWebGL();
  }
  initJellyfish();
})();
