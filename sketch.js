var vid;

var vScale = 16;

function setup() {
  createCanvas(320*2, 240*2);
  pixelDensity(1);
  vid = createCapture(VIDEO);
  //frameRate(30)
  vid.size(width / vScale, height / vScale);


}

function draw() {
  background(51);
  vid.loadPixels();

  for (var y = 0; y < height; y++) {
    for (var x = 0; x < width; x++) {
      var loc = (x + (y * vid.width)) * 4;
      var r = vid.pixels[loc + 0];
      var g = vid.pixels[loc + 1];
      var b = vid.pixels[loc + 2];
      var bright = (r + g + b) / 3
      var w = map(bright, 0, 255, 0, 16);
      noStroke();
      //fill(r, g, b);
      fill("red");
      rectMode(CENTER);
      rect(x * vScale + vScale / 2, y * vScale + vScale / 2, 10 , w);
      // pixels[loc+0] = bright;
      // pixels[loc+1] = bright;
      // pixels[loc+2] = bright;
      // pixels[loc+3] = vid.pixels[loc+3];
    }
  }

  // for (var y = 0; y < height; y++) {
  //   for (var x = 0; x < width; x++) {
  //     var loc = (x + (y * vid.width)) * 4;
  //     var mvalue = 255
  //     var d = dist(mouseX, mouseY, x * vScale + vScale / 2, y * vScale + vScale / 2)
  //     if (d < 64) {
  //       mvalue = 0;
  //     }
  //     // if (d < 120 && d>64) {
  //     //   mvalue = 170;
  //     // }
  //
  //     noStroke();
  //     fill(0, 0, 0, mvalue);
  //     rect(x * vScale + vScale / 2, y * vScale + vScale / 2, vScale, vScale);
  //   }
  // }


  //updatePixels();
}
