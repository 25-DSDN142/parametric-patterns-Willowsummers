//your parameter variables go here!

let ss = 0.4 // 0.4

// Parameters for function DrawPacEatTri
let triX =55; //55
let triY = 60; //90

// Parameters for function DrawFunkySquare
let squareX = 50; //95
let squareY = 50; //80

let rectX = 140;
let rectY = 120;
let rectW = 50;
let rectH = 70;

let arcw = 80;
let arcH = 70;

let ellipseW = 100;
let ellipseH = 30; 

let circleSize = 33;

// Color variables
let red = [190, 30, 45];
let yellow = [255,212,23];
let blue = [33, 64, 154];
let white = [255];
let black = [0];


function setup_wallpaper(pWallpaper) {
pWallpaper.output_mode(DEVELOP_GLYPH);
 //pWallpaper.output_mode(GRID_WALLPAPER);
  
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 100;



}

function wallpaper_background() {
  background(230, 223, 204); //Beige 
}
function my_symbol() { // do not rename this function. Treat this similarly to a Draw function

//DrawPacEatTri()

DrawFunkySquare()




fill(white)
stroke(0)  
strokeWeight(ss)
//arc(55, 90, 80, 70, 270, 420, PIE);

fill(255, 212, 23) //Yellow
stroke(0)  
strokeWeight(ss)
//rect(10, 10, 45, 80);

 fill(33, 64, 154) //Blue
stroke(0)  
strokeWeight(ss)
 // ellipse(94, 25, 100, 30)




fill(190, 30, 45,) //Red 
beginShape()
vertex(95, 80)
vertex(85, 65)
vertex(150, 25)
vertex(160, 40)
vertex(95, 80)
//endShape()

 fill(0)
stroke(0)  
strokeWeight(ss)
//circle(155, 63, 33)

}












//Functions



function DrawPacEatTri(){

fill(red)
stroke(0)  
strokeWeight(ss)
triangle (triX, triY, triX + 40, triY + 70, triX, triY + 50)

fill(yellow) 
arc(triX, triY + 50, 40, 40, 386, 270, PIE)
}

function DrawFunkySquare(){

fill(yellow) 
stroke(black)  
strokeWeight(ss)
rect(squareX + 45, squareY +40 , 50, 70)

fill(blue) 
square(squareX, squareY, 80)
arc(squareX + 80 , squareY + 80, 30, 30, 270, 180, PIE)

fill(yellow)
square(squareX + 65, squareY + 65, 15)

fill(red) 
arc(squareX + 40,squareY , 80 , 80, 0, 180, PIE )

fill(yellow) 
arc(squareX , squareY + 80, 90, 100, 270, 0, PIE)

noFill()
stroke(black)
strokeWeight(ss)
rect(squareX , squareY , 95, 110)
arc( squareX, squareY + 110, 60, 60 , 270, 0, PIE)

}