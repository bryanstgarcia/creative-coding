const canvasSketch = require("canvas-sketch");

const settings = {
    dimensions: [2048, 2048],
};

const sketch = () => {
    return ({context, width, height}) => {
        context.fillStyle = "white";
        context.fillRect(0, 0, width, height);
        // Creates a square from values
        function createSquareStroke(
            x,
            y,
            widthSquare,
            heightSquare,
            widthCanvas,
            heightCanvas
        ) {
            context.lineWidth = widthCanvas * 0.01;
            context.beginPath();
            context.rect(x, y, widthSquare, heightSquare);
            context.stroke();
        }
        // Creates a Matrix of ssquare al fill some of thesquare with
        // tinnier squares randomly
        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < 5; j++) {
                const squareWidth = width * 0.1;
                const squareHeight = height * 0.1;
                const gap = width * 0.033;
                const ix = width * 0.17;
                const iy = height * 0.17;
                const offset = width * 0.02;
                const x = ix + (squareWidth + gap) * i;
                const y = iy + (squareHeight + gap) * j;

                createSquareStroke(x, y, squareWidth, squareHeight, width, height);
                const randomNumber = Math.floor(Math.random() * 10);
                if (randomNumber > 5) {
                    createSquareStroke(
                      x + offset / 2,
                      y + offset / 2,
                      squareWidth - offset,
                      squareHeight - offset,
                      width,
                      height
                    );
                }
            }
        }
    };
};

canvasSketch(sketch, settings);
