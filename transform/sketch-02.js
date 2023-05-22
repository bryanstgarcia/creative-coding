const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 1080, 1080 ]
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);
    context.fillStyle = 'black';

    const x = width * 0.5;
    const y = height * 0.5;
    const w = width * 0.3;
    const h = height * 0.3;
    // Salvamos el estado del contexto para poder utilizar el contexto en su estado por defecto
    // Así no tenemos que sacar ceuntas locar o reiniciarlo manualmente
    context.save()
    // Posicionamos el contexto en "x" y "y"
    // De esta forma, dibujamos la figura en este punto y tenemos mayor control sobre
    // las transformaciones asociadas a la misma
    context.translate(x, y)
    // La rotacion de esta figura se realiza desde "x" y "y" y no desde el origen 
    // Gracias a que usamos un translate antes de definir la figura
    context.rotate(0.3)
    context.beginPath();
    // Dibujamos la figura como punto de origen "x" y "y", lugar en el cual se encuentra el contexto
    // Posicionamos la figura la mitad de su ancho y la mitad de su alto hacia atras
    // Así la centramos
    context.rect(- w * 0.5, -h * 0.5, w, h)
    context.fill()
    // Una vez finalizamos con las transformaciones, retauramos al ultimo save point 
    // De esta forma limpiamos el contexto 
    context.restore()
  };
};

canvasSketch(sketch, settings);
