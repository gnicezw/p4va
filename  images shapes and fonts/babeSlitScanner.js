/*
 * p5.js Slit-Scanner
 */

/* Sketch setup */

// Store uploaded media data
let img, ih, iw, ix;
let ip = 0;
 let i = 0;
function handleFileChange(file) {
  if (file.type === "image") {
    img = loadImage(file.data);
  } else if (file.type === "video") {
    img = loadVideo("assets/" + file.name);
    img.loop();
  }

  // clear window, set variables
  setTimeout(windowResized);
}

/* p5.js handlers */

function preload() {
  // load an initial image
  img = loadImage(
    "data:image/jpeg;base64,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"
  );

  // clear window, set variables
  setTimeout(windowResized);
}

// Setup the sketch
function setup() {
  // create and position file input
  const input = createFileInput(handleFileChange);
  input.position(0, 0);

  // configure canvas
  createCanvas(windowWidth, windowHeight);
  // strokeWeight(5)
  // fill('#ffffff')
  stroke("lightblue");
}

// Move the source image whenever the image is dragged
function mouseDragged({ movementX }) {
  ip = min(iw / 2 - 2, max(-iw / 2, ip + movementX)) || 0;
}

// Draw a frame
function draw() {
  if (img) {
    // draw the source image
    image(img, ix, ih, iw, ih);

    // draw slit-screen
    copy(
      img,
      img.width / 2 + (img.width * ip) / iw,
      0,
      1,
      img.height,
      i,
      0,
      1,
      windowHeight / 2
    );

    // update slit position
    i = i >= windowWidth ? 0 : i + 1;
  }

  // draw slit
  line(
    windowWidth / 2 + ip,
    windowHeight / 2,
    windowWidth / 2 + ip,
    windowWidth
  );
}

// Handle window resize
function windowResized() {
  // clear the canvas
  clear();

  // pre-calculate media size and position
  i = 0; // reset slit position
  ip = 0; // reset image drag offset
  ih = window.height / 2;
  iw = ih * (img.width / img.height);
  ix = (window.width - iw) / 2;

  // resize canvas
  resizeCanvas(windowWidth, windowHeight);
}
