let canvas = document.querySelector('canvas');
let context = canvas.getContext('2d');

// Creates a square from values
function createSquareStroke(x, y, width, height) {
    context.lineWidth = 2
    context.beginPath()
    context.rect(x, y, width, height);
    context.stroke()
}
// Creates a Matrix of ssquare al fill some of thesquare with
// tinnier squares randomly 
for (let i = 0; i < 5; i++) {
    for ( let j = 0; j < 5; j++) {
        const squareWidth = 60;
        const squareHeight = 60;
        const gap = 20;
        const x = 100 + (squareWidth + gap) * i;
        const y = 100 + (squareHeight + gap) * j;

        createSquareStroke(x, y, squareWidth, squareHeight)
        const randomNumber = Math.floor(Math.random() * (10))
        if (randomNumber > 5) {
            createSquareStroke(x + randomNumber, y + randomNumber, squareWidth - 16, squareHeight - 16 )
        }
    }
}