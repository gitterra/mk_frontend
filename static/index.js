document.addEventListener('DOMContentLoaded', (function() {
    const canvas = document.querySelector('.canvas');
    const context = canvas.getContext('2d');
    canvas.width = 280;
    canvas.height = 280;

    const Mouse = {x:0, y:0};
    const lastMouse = {x:0, y:0};
    context.fillStyle='white';
    context.fillRect(0,0, canvas.width, canvas.height);
    context.color = 'black';
    context.lineWidth = 10;
    context.lineJoin = context.lineCap = 'round';

    const clearButton = document.querySelector('.buttonClear');

    clearButton.addEventListener('click', ()=>{
        context.clearRect(0,0, canvas.width, canvas.width);
        context.fillStyle='white';
        context.fillRect(0,0, canvas.width, canvas.height);
    })

    canvas.addEventListener('mousemove', function (e) {
        lastMouse.x = Mouse.x;
        lastMouse.y = Mouse.y;

        Mouse.x = e.pageX - this.offsetLeft;
        Mouse.y = e.pageY - this.offsetTop;
    }, false);

    canvas.addEventListener('mousedown', function (e) {
        canvas.addEventListener('mousemove', onPaint, false);
    }, false);
    
    canvas.addEventListener('mouseup', function (e) {
        canvas.removeEventListener('mousemove', onPaint, false);
    }, false);
    

    function onPaint() {
        context.lineWidth = context.lineWidth;
        context.lineJoin = 'round';
        context.lineCap = 'round';
        context.strokeStyle = context.color;

        context.beginPath();
        context.moveTo(lastMouse.x, lastMouse.y);
        context.lineTo(Mouse.x, Mouse.y);
        context.closePath();
        context.stroke();
    }

})());