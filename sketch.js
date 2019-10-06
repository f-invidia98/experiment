var element = [];
var eleCounter = 999;
var count=0;
var tempele = []
var limit=105

function preload(){
  // put preload code here
}


function setup() {
  createCanvas(windowWidth,windowHeight);
  frameRate(120);
  background(0);


  for (var i = 0; i < eleCounter; i++) {
    element[i] = new Myelement();
  }
}

function draw() {
  background(0);
  stroke(255)
  ellipse(width/2, height/2, 50);


  for (var i = 0; i < count+1; i++) {
    element[i].display();
  }
  console.log(count)

}

function mouseClicked(){

  count+=1;
  element[count].coordinate();


}

function Myelement(){
  this.coordinate = function(){
  this.x = -(windowWidth/2-mouseX);
  this.y = -(windowHeight/2-mouseY);
  this.raggio = sqrt((this.x*this.x)+(this.y*this.y))
  this.iteratorx = acos(this.x/this.raggio);
  this.variable = 1
  this.variabletwo = 1
  this.limit=105
  console.log(this.variable)
  if (this.y<0) {
    this.iteratorx=-this.iteratorx
  }
  }

  this.transition = 50;
  angleMode(DEGREES)
  stroke(30)
  this.display = function(){
    this.iteratorx++
    this.variable+=0.01
    this.variabletwo+=0.1
    this.raggio-=this.variable
    // if (frameCount>1000) {
    //   this.raggio+=10
    // }
    if (this.raggio<=limit) {
      this.raggio=limit-5
    }

    this.mov = cos(this.iteratorx*this.variabletwo)*(this.raggio)+(windowWidth/2)
    this.movi = sin(this.iteratorx*this.variabletwo)*(this.raggio)+(windowHeight/2)
    ellipse(this.mov,this.movi,this.transition)
  }

}
