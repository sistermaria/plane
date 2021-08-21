x=100;
y=100;
x1=250;
y1=170;
function setup() {
  createCanvas(600, 600);
}


function draw() {
background(0,0,240);	
	
	
fill(255);
noStroke();
ellipse(x1, y1, 24, 24);  //cloud
    ellipse(x1+10,y1+10,24,24);
    ellipse(x1+30,y1+10,24,24);
    ellipse(x1+30,y1-10,24,24);
    ellipse(x1+20,y1-10,24,24);
    ellipse(x1+40,y1,24,26);	


fill(255);
ellipse(x,y,150,30);//body of plane

fill(30,100,250);
rect(x,y+5,40,50,10);//wing

rect(x-60,y-30,20,20,5);//tail
fill(255,0,0);
rect(x-60,y,20,20,0.5);//tail 2

fill(255);
ellipse(300,50,40,40);
x+=0.5;
y+=0.5
x1+=1;
}
