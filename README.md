# Turtle Canvas

A simple package to help you create wonderful [Turtle Graphics](http://en.wikipedia.org/wiki/Turtle_graphics).

### Installation

**Install via npm for browserify:**

```
npm install turtle-canvas --save
```

**Install via clone and include in script tag**

```html
<script src="path/to/clone/turtle-graphics/browser/turtle-canvas.min.js"></script>
```

### Usage

via node:

```js
var Turtle = require('turtle-canvas');
var turtle = new Turtle("canvasID");

// move turtle forward 10 pixels and draw line
turtle.forward(10);
turtle.stroke();
```

via `<script>`:

```js
var turtle = new TURTLE("canvasID");

// move turtle forward 10 pixels and draw line
turtle.forward(10);
turtle.stroke();
```

### Documentation

Each function returns the turtle instance to allow for chaining of commands.

##### Turtle(canvas)

Constructor; `canvas` can either be a string of the ID of the canvas, or a `canvas` DOMElement itself.

##### Turtle.penup()

Sets the turtle to not stroke when using `turtle.forward()` or `turtle.back()`

##### Turtle.pendown()

Sets the turtle to stroke when using `turtle.forward()` or `turtle.back()`

##### Turtle.moveTo(x, y)

Move (not stroke) the turtle to coordinates `(x,y)`.

##### Turtle.forward(amount)

Move the turtle forward by `amount` pixels. If the turtle pen is down, the turtle will stroke the distance.

##### Turtle.back(amount)

Move the turtle backward by `amount` pixels. If the turtle pen is down, the turtle will stroke the distance.

##### Turtle.left(amount)

Turn the turtle counter-clockwise by `amount` degrees.

##### Turtle.right(amount)

Turn the turtle clockwise by `amount` degrees.

##### Turtle.save()

Save the current state of the turtle; saves penup/pendown, orientation, position.

##### Turtle.restore()

Restores the most recently saved state of the turtle; restores penup/pendown, orientation, position.

##### Turtle.fill()

Fill all shapes from last `turtle.fill()`.

##### Turtle.stroke()

Stroke all shapes from last `turtle.stroke()`.

### Lisense

MIT
