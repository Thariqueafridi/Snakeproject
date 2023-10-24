const gameBoard = document.getElementById('gameBoard');
const context = gameBoard.getContext('2d');

const WIDTH  = gameBoard.width;
const HEIGHT = gameBoard.height;
const UNIT =25; //food height,width

let foodX;
let foodY;

let snake = [
    {x:UNIT*3,y:0},
    {x:UNIT*2,y:0},
    {x:UNIT,y:0},
    {x:0,y:0}, 
];

startGame();


function startGame(){
    context.fillStyle = '#212121';
    //fillRect(xStart,yStart,width,height)
    context.fillRect(0,0,WIDTH,HEIGHT);

    createFood();
    displayFood();
    drawSnake();
}

function createFood(){
    foodX = Math.floor(Math.random()*WIDTH/UNIT)*UNIT;
    foodY = Math.floor(Math.random()*HEIGHT/UNIT)*UNIT;
}

function displayFood(){
    context.fillStyle = 'red';
    context.fillRect(foodX,foodY,UNIT,UNIT)
}

function drawSnake(){
    context.fillStyle = 'aqua';
    context.strokeStyle ='#212121'
    snake.forEach((snakePart)=> {
        context.fillRect(snakePart.x,snakePart.y,UNIT,UNIT);
        context.strokeRect(snakePart.x,snakePart.y,UNIT,UNIT);
    })
}