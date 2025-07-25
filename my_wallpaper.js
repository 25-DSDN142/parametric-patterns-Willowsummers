//your parameter variables go here!
var wheelSize = 22 //22
var rectCorner = 4 //4
var wheelHeightX = 130 //130

function setup_wallpaper(pWallpaper) {
  //pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.output_mode(GRID_WALLPAPER);
  
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  background(242, 215, 155); //light honeydew green colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function

  //rect(40 ,40, rect_width, rect_height);


    // Car body
    strokeWeight(1)
   fill(255, 0, 0); // red
  rect(40, 100, 120, 30, rectCorner*4, rectCorner+2, rectCorner, rectCorner);

  // Car top
  strokeWeight(1)
  fill(167, 238, 252,); // light blue
  rect(65, 80, 90, 25, rectCorner*4, rectCorner*7, rectCorner, rectCorner);

  // Wheels
  fill(0); // black
  ellipse(60, wheelHeightX, wheelSize);  // front wheel
  ellipse(140, wheelHeightX, wheelSize); // rear wheel

//Hub caps 
fill(200); // black
  ellipse(60, wheelHeightX, wheelSize/1.5);  // front wheel
  ellipse(140, wheelHeightX, wheelSize/1.5); // rear wheel


}
