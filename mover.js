class Mover{
  constructor(img){
    this.pos=createVector(30,300);
    this.vel=createVector(1,0);
    this.acc=createVector(0,0);
    this.pic=img;
    this.score=0
                         
  }
  
  update(){
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0,0);
  }
  
  show(){
    fill(255,204,0);
    // ellipse(this.pos.x,this.pos.y, 50,50);
    image(this.pic, this.pos.x,this.pos.y, 50,50);
    textSize(20)
    text("SCORE: "+ this.score + "                                   click anywhere to end game", this.pos.x - 80,60);
  }
  
  applyForce(f){
    this.acc.add(f);
  }
  
  edges(){
    if(this.pos.y>450){
      this.vel.y*=-0.5;
      this.pos.y=450
    }
    if(this.pos.y<10){
      this.vel.y*=-0.5;
    }
  }
  
 hit(Baddies){
    if((Baddies.pos.x >= this.pos.x && Baddies.pos.x <= (this.pos.x + 80)) &&
        (Baddies.pos.y >= this.pos.y && Baddies.pos.y <= (this.pos.y + 80))) {
        Baddies.pos.y = -400;
      //print ("this is uu");
        this.score--;
    }

  
}
  hitt(Goodies){
    if((Goodies.pos.x >= this.pos.x && Goodies.pos.x <= (this.pos.x + 80)) &&
        (Goodies.pos.y >= this.pos.y && Goodies.pos.y <= (this.pos.y + 80))) {
       Goodies.pos.y = -400;
      //print ("this is o");
        this.score++;
    }

  
}
}