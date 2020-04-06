1. setup canvas dom declaration

2. draw function console e

3. setup isDrawing with mouse event

4.

ctx.beginPath()
ctx.moveTo(lastX, lastY)
ctx.lineTo(e.offsetX, e.offsetY)
ctx.stroke()
lastX = e.offsetX
lastY = e.offsetY

5.
canvas.addEventListener('mousedown', (e) => {
isDrawing = true;
lastX = e.offsetX
lastY = e.offsetY
})

6 setup hue
