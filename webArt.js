let a,x,y;
let b0,b1,b2,b3;
let cnt=0,j;
var input;
var slider,slider0,slider1;
var t0=0,t1,t2;
let one;
let bt0,bt1,bt2;
let myCanvas;
let main=[];
let world=[];
let canvas, imagine;
let c,d,e,g;



function setup() {
  myCanvas=createCanvas(1000,700);
    b0=createElement('p','will');
  b1=createElement('p','you');
  b2=createElement('p','love');
  b3=createElement('p','me?');
 
  
 
   background(255,122,133);
}

function draw() {
 
frameRate(5);
  
  /*(bt.hide();
  slider.hide();
  slider0.hide();
  slider1.hide();
  */
  
 /* g=createImg("https://ae01.alicdn.com/kf/HTB1OKyfOXXXXXcKXVXXq6xXFXXXo/-.jpg_640x640.jpg");
  g.size(500,350);
  g.position(250,175);
  */
  
  
for (let i = 0; i < 4; i++) {
    main[i]=random(1000);
  }
  
  for(let j=0;j<4;j++){
world[j]=random(700);  
  
  }
  
  x=width/2;
  y=height/2;

  for(one=0;one<4;one++){
  if(one==0){
  b0.position(main[one],y);
    fill(100);
    b0.size(10,10);
  }
  if(one==1){
  b1.position(x,world[one]);
  }
    if(one==2){
    b2.position(main[one],world[one]);
    }
    if(one==3){
    b3.position(world[one],main[one]);
    }
  }
}
  


function mousePressed(){
  
  
  
  a=createImg("http://www.artnet.com/WebServices/images/ll00015lldeTRJFgoPjR3CfDrCWvaHBOcQFPF/adrian-ghenie-van-gogh.jpg");
  
   canvas=createImg("https://www.sciencemag.org/sites/default/files/styles/article_main_large/public/images/sn-pigheart.jpg?itok=mFsvY_GJ");
   
  imagine=createImg("http://img.soogif.com/zC3QdbDYox970BPmXhcmzDrsT37G9g1e.gif?scope=guoyoo");
  
  
  
a.size(200,280);
  a.position(30,30);
  b0.hide();
  b1.hide();
  b2.hide();
  b3.hide();
 
 
  
  
   slider=createSlider(0,100,50);
  slider0=createSlider(0,100,50);
  slider1=createSlider(0,100,50); 
    slider.position(30,340);
  slider0.position(30,380);
  slider1.position(30,420);

  c=createButton('how');
  d=createButton('much');
  e=createButton('?');
  c.position(180, 340);
  d.position(180,380);
  e.position(180,420);
  
  bt=createButton('push me hard!');
  
  
  bt.mousePressed(changecolor);
  bt.position(280,280);
  bt.size(680,370);
  
  imagine.size(200,50);
  imagine.position(30,600);
 
  
  t2=text('push me hard');
  
if(mouseIsPressed){
 t1=createP("DENY ME AND BE DOOMED");
  t1.position(30,450);
 
  t0+=10;
  t1.size(t0);
}
  

  
  canvas. size(680,200);
  canvas.position(280,30);

  
  
}
//마우스 눌렸을 때



function changecolor(){
  cnt+=10;
  
 background (255-cnt,122-cnt,133-cnt);
}//색깔바꾸기



function hyde(){

g.hide();
}