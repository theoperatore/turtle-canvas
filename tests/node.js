// run this test with command: beefy tests/node.js -> localhost:9966
var Turtle = require('../lib/turtle-canvas');
var cvs = document.createElement("canvas");

cvs.width = 500;
cvs.height = 450;

document.body.appendChild(cvs);

var turtle = new Turtle(cvs);

turtle.moveTo(10, 225);

turtle.left(45);
turtle.forward(100);
turtle.right(45);
turtle.forward(10);
turtle.right(45);
turtle.forward(100);
turtle.right(135);
turtle.forward(25);
turtle.right(45);
turtle.forward(50);
turtle.left(45);
turtle.forward(30);
turtle.left(45);
turtle.forward(50);
turtle.right(45);
turtle.forward(25);

turtle.stroke();