//your parameter variables go here!


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  //pWallpaper.output_mode(GRID_WALLPAPER);
  
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  background(230, 223, 204); //Beige 
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function


fill(255, 212, 23) //Yellow
noStroke()
 rect(10, 40, 65, 100);

fill(33, 64, 154) //Blue
noStroke()
 circle(95.5, 60, 40.5);

fill(255) //White 
noStroke()
 ellipse(70, 160, 100, 40)

fill(190, 30, 45,) //Red 
noStroke()
 triangle (75, 140, 130, 40, 130, 140)

}
