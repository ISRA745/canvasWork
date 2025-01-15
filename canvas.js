// rectangel
// const canvas = document.getElementById("myCanvas");
// const ctx = canvas.getContext("2d");

// draw on canvas
// ctx.fillStyle = "rgba(92, 7, 71, 0.7)";
// ctx.fillRect(10,140,250,100);
// // clear rectangle
// ctx.clearRect(30,150,60,60)

// line box
// ctx.strokeStyle = "red"
// ctx.lineWidth = 10;
// ctx.strokeRect(250,30,150,75);

// lines
// ctx.beginPath();
// ctx.moveTo(250,250);
// ctx.lineTo(400,400);
// ctx.lineWidth = 10;
// ctx.strokeStyle = "green";
// ctx.lineCap = "round";
// ctx.stroke();

// triangle
// ctx.beginPath();
// ctx.moveTo(100,20);
// ctx.lineTo(180,100);
// ctx.lineTo(20,100);
// ctx.lineTo(100,20);
// ctx.lineTo(100,20);
// ctx.strokeStyle = "blue";
// ctx.lineWidth = 10;
// ctx.stroke();

// circle
// ctx.beginPath();
// ctx.arc(250,250,100,0,7);
// ctx.lineWidth = 10 ;
// ctx.strokeStyle = "pink";
// ctx.stroke();

// text
// ctx.font = "bold italic 50px arial";
// ctx.strokeStyle = "orange";
// ctx.strokeText("Hello, Canvas!!", 100,200);

// transperanct text
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
// Draw a filled rectangle
ctx.fillStyle = "plum";
ctx.fillRect(50, 50, 400, 200);
// Draw a circle
ctx.beginPath();
ctx.arc(250, 150, 80, 0, 7);
ctx.fillStyle = "pink";
ctx.fill();
//   ctx.closePath();
// Set transparency for text
ctx.font = "40px Arial";
ctx.fillStyle = "rgba(97, 21, 21, 0.3)"; // Red color with 50% transparency
ctx.lineWidth = 3;
// Draw transparent text
ctx.fillText("Transparent Text!!", 100, 160);

// img in canvas
// const img = new Image();
// img.src = "imges/pic1.jpg";
// img.onload = function () {
//   ctx.drawImage(img, 30, 30, 100, 100);
// };