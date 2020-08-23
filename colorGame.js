var numSquares = 6;
var colors=generateRandomColors(numSquares);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

colorDisplay.textContent = pickedColor;


easyBtn.addEventListener("click", function(){
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");
     
    //generate all new colors;
    numSquares=3;
    colors=generateRandomColors(numSquares);

    //pick a new random color from array;
    pickedColor = pickColor();
     
    //change colorDisplay to matched picked array;
    colorDisplay.textContent = pickedColor;
     
    //change color of the squares
    for(var i=0; i<squares.length; i++)
    {
        if(colors[i])
            squares[i].style.backgroundColor = colors[i];
        else
            squares[i].style.display = "none";
    }   
     h1.style.backgroundColor="steelblue";
});

hardBtn.addEventListener("click", function(){
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    
    //generate all new colors;
    numSquares=6;
    colors=generateRandomColors(numSquares);

     //pick a new random color from array;
     pickedColor = pickColor();
     
     //change colorDisplay to matched picked array;
     colorDisplay.textContent = pickedColor;
     
     //change color of the squares
     for(var i=0; i<squares.length; i++)
     {
         squares[i].style.backgroundColor = colors[i];
         squares[i].style.display = "block";
     }
     h1.style.backgroundColor="steelblue";
 
});



for(var i = 0; i < squares.length; i++){

    //add initial colors to squares
    squares[i].style.backgroundColor= colors[i];

    //add click eventListener to squares
    squares[i].addEventListener("click", function(){
        //grab colors of clicked square
        var clickedColor=this.style.backgroundColor;
        //compare color to pickedColor
        if(clickedColor === pickedColor){
            messageDisplay.textContent= "Correct";
            resetButton.textContent="Play Again";
            changeColor(pickedColor);
        }
        else{
            this.style.backgroundColor= "#232323";
            messageDisplay.textContent= "Try Again";
        }
    });

}

function changeColor(color){
    //loop through all squares
    for(var i=0; i<squares.length;i++)
    {
        //change each color to match given color
        squares[i].style.backgroundColor= color;
    }
    h1.style.backgroundColor=color;
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random]; 
}

function generateRandomColors(num)
{
    //make an array
    var arr=[];
    //add num random colors to array
    for(var i=0;i<num;i++)
    {
        arr.push(randomColor());
    }

    //return array
    return arr;
}

function randomColor(){
    var red = Math.floor(Math.random() * 256);    
    var green = Math.floor(Math.random() * 256);    
    var blue = Math.floor(Math.random() * 256);    

    var pattern = "rgb("+red+", "+green+", "+blue+")";
    return pattern;
}

resetButton.addEventListener("click", function(){
    //generate all new colors;
    colors=generateRandomColors(numSquares);

    //pick a new random color from array;
    pickedColor = pickColor();
    
    //change colorDisplay to matched picked array;
    colorDisplay.textContent = pickedColor;
    this.textContent = "New Colors";
    
    //change color of the squares
    for(var i=0; i<squares.length; i++)
    {
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor="steelblue";
    messageDisplay.textContent= "";

});