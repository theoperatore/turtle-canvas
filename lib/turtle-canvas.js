"use strict";

// constructor
// cvs is either element ID or a canvas DOM element itself
var Turtle = function(cvs) {
  this.dir = 0;
  this.x = 0;
  this.y = 0;
  this.draw = true;

  this.cvs = document.getElementById(cvs) || cvs;
  this.ctx = this.cvs.getContext('2d');
  this.states = [];
  this.ctx.beginPath();
}

// do not stroke
Turtle.prototype.penup = function() {
  this.draw = false;
  return this;
};

// stroke
Turtle.prototype.pendown = function() {
  this.draw = true;
  return this;
};

// pick up pen and move to (x, y)
Turtle.prototype.moveTo = function(x, y) {
  this.x = x;
  this.y = y;

  this.ctx.beginPath();
  this.ctx.moveTo(this.x, this.y);

  return this;
}

// Move turtle foward by 'dist' pixels. 
// if pendown, stroke, otherwise moveTo
Turtle.prototype.forward = function(dist) {

  // vector transformation
  this.x += dist * Math.cos(this.dir);
  this.y += dist * Math.sin(this.dir);

  if (!this.draw) {
    this.ctx.moveTo(this.x, this.y);
  }
  else {
    this.ctx.lineTo(this.x, this.y);
  }

  return this;
};

// move turtle backward by 'dist' pixels.
// if pendown, stroke, otherwise moveTo
Turtle.prototype.back = function(dist) {

  this.x += dist * Math.cos(this.dir - Math.PI);
  this.y += dist * Math.sin(this.dir - Math.PI);

  if (!this.draw) {
    this.ctx.moveTo(this.x, this.y);
  }
  else {
    this.ctx.lineTo(this.x, this.y);
  }

  return this;
};

// rotate turtle counter-clockwise by 'angle' degrees.
Turtle.prototype.left = function(angle) {
  this.dir -= (angle * (Math.PI / 180));
  return this;
};

// rotate turtle clockwise by 'angle' degrees.
Turtle.prototype.right = function(angle) {
  this.dir += (angle * (Math.PI / 180));
  return this;
};

// save the current state of the turtle
Turtle.prototype.save = function() {
  this.states.push({ x : this.x, y : this.y, dir : this.dir });
  return this;
};


// restore the most recently saved state of the turtle
Turtle.prototype.restore = function() {
  var prev = this.states.pop();
  this.x = (prev) ?  prev.x : this.x;
  this.y = (prev) ?  prev.y : this.y;
  this.dir = (prev) ? prev.dir : this.dir;

  return this;
};

// fill the shape drawn by the turtle
Turtle.prototype.fill = function() {
  this.ctx.fill();
  return this;
};

// stroke the shape drawn by the turtle
Turtle.prototype.stroke = function() {
  this.ctx.stroke();
  return this;
};

module.exports = Turtle;