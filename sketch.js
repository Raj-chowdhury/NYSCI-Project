let img1 = 'Image_1.png';
let img2 = 'Image_2.png';
let img3 = 'Image_3.png';
let img4 = 'Image_4.jpg';
let img5 = 'Image_5.png';
let img6 = 'Image_6.png';
let img7 = 'Image_7.png';
let img8 = 'Image_8.png';
let img9 = 'Image_9.png';
let img10 = 'Image_10.png';

let images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10]

function preload() {
  img1 = loadImage('Image_1.png');
  img2 = loadImage('Image_2.png');

  img3 = loadImage('Image_3.png');
  img4 = loadImage('Image_4.jpg');
  img5 = loadImage('Image_5.png');

  img6 = loadImage('Image_6.png');
  img7 = loadImage('Image_7.png');
  img8 = loadImage('Image_8.png');

  img9 = loadImage('Image_9.png');
  img10 = loadImage('Image_10.png');
}

let budget = 100.00;
let category = ['Account','Your Cards','Transactions','Finance','Stats','Games', 'Network Connection','Wallet','Deposit','Search Engine'];


function setup() {
  createCanvas(1500, 900);
  background(255);
  let fs = fullscreen();
  fullscreen(!fs)
  
}

function draw() {
 
 stroke(220)

  //draws category rectangles on the left
  
  button1 = createButton(category[0]);
  button1.style('background-color', 'black');
  button1.style('font-size', '30px');
  button1.style('color', color(255));
  button1.position(width/1000, height/1000);
  button1.size(width/5, height/10)
  button1.mousePressed();
  
  button2 = createButton(category[1]);
  button2.style('background-color', 'black');
  button2.style('font-size', '30px');
  button2.style('color', color(255));
  button2.position(width/1000, height/10);
  button2.size(width/5, height/10)
  button2.mousePressed();
  
  button3 = createButton(category[2]);
  button3.style('background-color', 'black');
  button3.style('font-size', '30px');
  button3.style('color', color(255));
  button3.position(width/1000, height/5.2);
  button3.size(width/5, height/10)
  button3.mousePressed();
  
  button4 = createButton(category[3]);
  button4.style('background-color', 'black');
  button4.style('font-size', '30px');
  button4.style('color', color(255));
  button4.position(width/1000, height/3.45);
  button4.size(width/5, height/10)
  button4.mousePressed();
  
  button5 = createButton(category[4]);
  button5.style('background-color', 'black');
  button5.style('font-size', '30px');
  button5.style('color', color(255));
  button5.position(width/1000, height/2.6);
  button5.size(width/5, height/10);
  button5.mousePressed();
  
  button6 = createButton(category[5]);
  button6.style('background-color', 'black');
  button6.style('font-size', '30px');
  button6.style('color', color(255));
  button6.position(width/1000, height/2.1);
  button6.size(width/5, height/10);
  button6.mousePressed();
  
  button7 = createButton(category[6]);
  button7.style('background-color', 'black');
  button7.style('font-size', '30px');
  button7.style('color', color(255));
  button7.position(width/1000, height/1.75);
  button7.size(width/5, height/10);
  button7.mousePressed();
  
  button8 = createButton(category[7]);
  button8.style('background-color', 'black');
  button8.style('font-size', '30px');
  button8.style('color', color(255));
  button8.position(width/1000, height/1.5);
  button8.size(width/5, height/10);
  button8.mousePressed();
  
  button9 = createButton(category[8]);
  button9.style('background-color', 'black');
  button9.style('font-size', '30px');
  button9.style('color', color(255));
  button9.position(width/1000, height/1.31);
  button9.size(width/5, height/10);
  button9.mousePressed();
  
  button10 = createButton(category[9]);
  button10.style('background-color', 'black');
  button10.style('font-size', '30px');
  button10.style('color', color(255));
  button10.position(width/1000, height/1.159);
  button10.size(width/5, height/10);
  button10.mousePressed();


  //Top Banner including product category and budget
  rect(width/5 + 1,0,width/5 * 4,height/10)
  textSize(35)
  text('PlaceHolder', width/5 + 40, 40);

  line(width/2,0,width/2,height/10)
  line(width/2 + 10,0,width/2 + 10, height/10)

  text('Budget $' + budget,width*2/3,40);


}

function keyPressed() {
  if (keyCode == 81) {//Key Q
        image(img1, 300, 90, 1200, 810)
      }
  if (keyCode == 87) {//Key W
        image(img2, 300, 90, 1200, 810)
      }
  if (keyCode == 69) {//Key E
        image(img3, 300, 90, 1200, 810)
      }
  if (keyCode == 82) {//Key R
        image(img4, 300, 90, 1200, 810)
      }
  if (keyCode == 84) {//Key T
        image(img5, 300, 90, 1200, 810)
      }
  if (keyCode == 89) {//Key Y
        image(img6, 300, 90, 1200, 810)
      }
  if (keyCode == 85) {//Key U
        image(img7, 300, 90, 1200, 810)
      }
  if (keyCode == 73) {//Key I
        image(img8, 300, 90, 1200, 810)
      }
  if (keyCode == 79) {//Key O
        image(img9, 300, 90, 1200, 810)
      }
  if (keyCode == 80) {//Key P
        image(img10, 300, 90, 1200, 810)
      }
     }

