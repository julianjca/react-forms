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
if (width > height) {
  if (width > maxWidth) {
    height *= maxWidth / width;
    width = maxWidth;
  }
} else {
  if (height > maxHeight) {
    width *= maxHeight / height;
    height = maxHeight;
  }
}
```