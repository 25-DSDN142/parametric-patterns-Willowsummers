//your parameter variables go here!

//strokeWeight 
let ss = 0.4 // 0.4 thin

// Parameters for function DrawPacEatTri
let triX =55; //55
let triY = 60; //90

// Parameters for function DrawFunkySquare
let squareX = 50; //95
let squareY = 50; //80

//Parameters for DrawBAU
let BAUX = 30//20
let BAUY = -14//20

//Parameters for DrawHAUS
let HAUSX = 10//40
let HAUSY = 153 //40

// Color variables
let red = [190, 30, 45];
let yellow = [255,212,23];
let blue = [33, 64, 154];
let white = [255];
let black = [0];
let beige = [230, 223, 204]

function setup_wallpaper(pWallpaper) {
pWallpaper.output_mode(DEVELOP_GLYPH);
//pWallpaper.output_mode(GRID_WALLPAPER);
  
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 0;



}

function wallpaper_background() {
  background(beige)
}
function my_symbol() { // do not rename this function. Treat this similarly to a Draw function


DrawFunkySquare();
DrawCorners();
//DrawBAU();
DrawHAUS();

push();
translate(200, 100); // move to bottom right
scale(-1, -1);       // flip both axes
DrawBAU();
pop();
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

function DrawCorners(){

noStroke()
fill(blue)
arc(0,200, 60, 60 , 270, 0, PIE)
arc(200,200, 60, 60 , 180, 270, PIE)
arc(200,0, 60, 60 , 90, 180, PIE)
arc(0,0, 60, 60 , 360, 90, PIE)

}


function DrawBAU(){

  noStroke();
  fill(0);
  // B
  rect(BAUX - 2, BAUY + 30, 6, 30);
  arc(BAUX + 6, BAUY + 38, 16, 16, PI + HALF_PI, HALF_PI, CHORD);
  arc(BAUX + 6, BAUY + 52, 16, 16, PI + HALF_PI, HALF_PI, CHORD); 

  // A
  triangle(BAUX + 15, BAUY + 60, BAUX + 27, BAUY + 30, BAUX + 39, BAUY + 60);
  fill(beige);
  triangle(BAUX + 25, BAUY + 60, BAUX + 27, BAUY + 56, BAUX + 29, BAUY + 60);
  
  // U
  fill(black);
  rect(BAUX + 41, BAUY + 30, 6, 24);
  rect(BAUX + 53, BAUY + 30, 6, 24);
  arc(BAUX + 50, BAUY + 53, 18, 18, 0, 180);

}

function DrawHAUS(){
noStroke();
  fill(black);

  // H
  rect(HAUSX + 70, HAUSY + 10, 6, 30);
  rect(HAUSX + 82, HAUSY + 10, 6, 30);
  rect(HAUSX + 76, HAUSY + 20, 6, 6);

  // A
  triangle(HAUSX + 90, HAUSY + 40, HAUSX + 102, HAUSY + 10, HAUSX + 114, HAUSY + 40);
  fill(beige);
  triangle(HAUSX + 100, HAUSY + 40, HAUSX + 102, HAUSY + 36, HAUSX + 104, HAUSY + 40);
 
  // U
   fill(black);
  rect(HAUSX + 115, HAUSY + 10, 6, 24);
  rect(HAUSX + 127, HAUSY + 10, 6, 24);
  arc(HAUSX + 124, HAUSY + 33, 18, 18, 0, 180);

  // S
  arc(HAUSX + 145, HAUSY + 18, 18, 18, 90, 360);
  arc(HAUSX + 145, HAUSY + 32, 18, 18, 270, 180 )

}






