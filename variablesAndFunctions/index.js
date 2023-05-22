let canvas = document.querySelector('canvas');
let context = canvas.getContext('2d');
context.fillStyle = 'gold'
// fillRect is a three in one method. Creates a new shape, draw a rectangle and fill it
context.fillRect(0, 0, canvas.width, canvas.height)
    // Defines line width
    context.lineWidth = 4
    // Creates a new shape
    context.beginPath()
    // Draw a rectangle 
    context.rect(0, 0, canvas.width, canvas.height)
    // Fill the rectangle with a color (default black )
    context.stroke()
// Crear círculos
// Inicia un path
context.beginPath()
// Crea un arco y define (Revisar documentacion para los parámetros)
context.arc(canvas.width / 2, canvas.height / 2, canvas.width / 4, 0, Math.PI * 2)
// Dibuja la línea del círculo
context.stroke()
