const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 2048, 2048 ]
};
const degToRad = (degrees) => {
  // Gets degrees and return the equivalent in radiants
  return (degrees / 180 ) * Math.PI
}
const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);

    context.fillStyle = 'black';

    const cx = width * 0.5;
    const cy = height * 0.5;
    const w = width * 0.01;
    const h = height * 0.1;
    const num = 12;
    let x, y;

    for (let i = 0; i < num; i++) {
      const slice = degToRad(360 / num)
      const angle = slice * i
      const radius = width * 0.3

      x = cx + radius * Math.sin(angle)
      y = cy + radius * Math.cos(angle)
      context.save()
      context.translate(x, y)
      // context.rotate(0.3)  Este ángulo del rotate está en radianes
      // Si queremos usar grados, lo cual es mas sencillo, podemos usar la siguiente formula
      // (grados / 180) * Math.PI => (45 / 180) * Math.PI para obtener 45 grados en radianes
      context.rotate(-angle)
      context.beginPath()
      context.rect(-w * 0.5, -h * 0.5, w, h)
      context.fill()
      context.restore()
    };
      
  }
};

canvasSketch(sketch, settings);
