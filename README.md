# Form
The form with validation is in this Repository. <br>
To run it <br>
```
npm install
npm run start
```

# Solution for rotating image
```js
let img = //uploaded image
let maxWidth = 400;
// width must be larger than height
let maxHeight = 200;
let width = img.width;
let height = img.height;
// check if width > height
let canvas = document.createElement('canvas'),
let ctx = canvas.getContext("2d");
if(width > height) {
  canvas.width = width;
  canvas.height = height;
} else {
  canvas.width = height;
  canvas.height = width;
}

// rotate image to the right 90 degree
ctx.rotate(0.5 * Math.PI)
ctx.translate(0, -height)

// draw the image
ctx.drawImage(img, 0, 0);
```