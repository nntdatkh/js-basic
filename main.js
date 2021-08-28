let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");

function drawCircle(x, y, size) {
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.beginPath();
  ctx.fillStyle = "black";
  ctx.arc(x, y, size, 0, 2 * Math.PI);
  ctx.fill();
}

let x = 50;
let y = 50;
const size = 30;

drawCircle(x, y, size);

// Add your code here
let pressLeft, pressRight, pressUp, pressDown;

canvas.addEventListener('keydown', (e) => {
  switch(e.key){
    case 'a':
    case 'A':
      pressLeft = true;
      break;
    case 'd':
    case 'D':
      pressRight = true;
      break;
    case 'w':
    case 'W':
      pressUp = true;
      break;
    case 's':
    case 'S':
      pressDown = true;
    default:
      break;
  } 
  moveAndDraw();
})

canvas.addEventListener('keyup', (e) => {
  switch(e.key){
    case 'a':
    case 'A':
      pressLeft = false;
      break;
    case 'd':
    case 'D':
      pressRight = false;
      break;
    case 'w':
    case 'W':
      pressUp = false;
      break;
    case 's':
    case 'S':
      pressDown = false;
    default:
      break;
  } 
})

function moveAndDraw(){
  if(pressLeft && x >= 55)
    x -= 5;
  else if(pressRight&& x <= canvas.width - 55)
    x += 5;

  if(pressUp && y >= 55)
    y -= 5;
  else if(pressDown && y <= canvas.height - 55)
    y += 5;
  
  drawCircle(x, y, size);
}