canvas =
document.getElementById("myCanvas");
color = "red";
ctx= canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle = color ;
ctx.lineWidth = 2 ;
ctx.arc(150,143,430,200);
ctx.stroke();
canvas = document.getElementById("myCanvas");c
color = "blue";
ctx.beginPath();
ctx.strokeStyle = color ;
ctx.lineWidth = 2 ;
ctx.arc(250,210,0,2);
ctx.stroke();

canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e)
{
    mouse_x = e.clientX - canvas.offsetLeft;
    mouse_y = e.clientY - canvas.offsetTop;
console.log("X = " + mouse_x +" ,Y = " + mouse_y);
circle(mouse_x , mouse_y);
}
function circle(mouse_x , mouse_y) 
{
ctx.beginPath();
ctx.strokeStyle = color ;
ctx.lineWidth = 2 ;
ctx.arc(mouse_x,mouse_y,50,0,2*Math.PI);
ctx.stroke();
}
canvas =
document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

function cleararea(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}
