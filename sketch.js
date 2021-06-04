let hero;
let force;
let gravity;
let mySound;
let sNum = 0;
let enemys=[];
let fenemys2=[];
let img
let rock
let gem

function setup() {
  createCanvas(600,500);
//loading assets
  //soundFormats('mp3');
  mySound = loadSound("assets/energy.mp3");
   img = loadImage("bbird.gif");
  let img2 = loadImage("gem.gif")
  let img3 = loadImage("rock.png");
phase = loadImage("phase.gif")
  hero = new Mover(img);
  force = createVector(-0.01, 0);
  gravity = createVector(0, 0.10);
  rock = new Baddies(img3);
  gem = new Goodies(img2);
  
  for(let i=0;i<15; i++){
    fenemys2.push(new Goodies(img2))
  }
    for(let d=0;d<20; d++){
    enemys.push(new Baddies(img3))
  }
}

function keyPressed() {
  if (key == " ") {
    let jump = createVector(0, -2);
    hero.applyForce(jump);
  }
}

function mousePressed() {
  sNum++;
}

function draw() {
  if (sNum%3 === 0) {
    open();
  } else if (sNum%3 === 1) {
    game();
  } else if (sNum%3 === 2) {
    close();
  }
}

function open() {
  background('hsl(160, 100%, 50%)');
  textSize(50)
  text("Welcome to the Game!", 45, 100);
  textSize(20)
  text("-Collect as many gems as possible to increase score", 45, 200);
    textSize(20)
  text("-Colliding with rocks will decrease score", 45, 230);
      textSize(20)
  text("-Press space to fly", 45, 260);
    textSize(20)
  text("-", 45, 200);
  textSize(15)
  text("Click anywhere to start...", 45, 350);
      //mySound.play();

}

function close() {
  background('hsl(160, 100%, 50%)');
  textSize(50)
  text("Thanks for playing!", 70, 100);
  textSize(40)
  text("Your score:  " + hero.score, 70, 200);
}

function game() {
  background(phase);

  hero.applyForce(gravity);
  translate(-hero.pos.x + 100, 0);
  // if (mouseIsPressed) {
  //    hero.applyForce(force);
  //  }
  hero.update();
  hero.show();
  hero.edges();
  
  for(let i=0; i<enemys.length; i++){
    enemys[i].show();
    enemys[i].update();
    hero.hit(enemys[i]);
  }
  
    for(let i=0; i<fenemys2.length; i++){
    fenemys2[i].show();
    fenemys2[i].update();
    hero.hitt(fenemys2[i]);
  }

 // fill("blue");
 //rect(200, 300, 20, 20);
}
