//your parameter variables go here!
var smallstroke = 0.4
var bigstroke = 1







function setup_wallpaper(pWallpaper) {
pWallpaper.output_mode(DEVELOP_GLYPH);
 //pWallpaper.output_mode(GRID_WALLPAPER);
  
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 0;
}

function wallpaper_background() {
  background(230, 223, 204); //Beige 
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function

fill(190, 30, 45,) //Red 
stroke(0)  
strokeWeight(smallstroke)
 triangle (55, 90, 95, 160, 55, 140)

fill(33, 64, 154) //Blue
stroke(0)  
strokeWeight(smallstroke)
  square(95, 80, 80)

noFill()
stroke(0)  
strokeWeight(smallstroke)
rect(140,120,50,70)


fill(255, 212, 23,) //Yellow
stroke(0)  
strokeWeight(smallstroke)
arc(55, 90, 80, 70, 270, 420, PIE);

noFill()
stroke(0)  
strokeWeight(smallstroke)
arc(175, 160, 30, 30, 270, 180, PIE)

fill(255, 212, 23) //Yellow
stroke(0)  
strokeWeight(smallstroke)
 rect(10, 10, 45, 80);

 fill(33, 64, 154) //Blue
stroke(0)  
strokeWeight(smallstroke)
  ellipse(94, 25, 100, 30)

fill(255, 212, 23,) //Yellow
square(160, 145, 15)

noFill()
stroke(0)  
strokeWeight(smallstroke)
fill(190, 30, 45,) //Red 
arc(135, 80, 80 , 80, 0, 180, PIE )
fill(255, 212, 23,) //Yellow
arc(95, 160, 90, 100, 270, 0, PIE)


noFill()
stroke(0)  
strokeWeight(smallstroke)
arc(55, 140, 40, 40, 386, 270, PIE)

fill(190, 30, 45,) //Red 
beginShape()
vertex(95, 80)
vertex(85, 65)
vertex(150, 25)
vertex(160, 40)
vertex(95, 80)
endShape()

 fill(33, 64, 154) //Blue
stroke(0)  
strokeWeight(smallstroke)
circle(155, 63, 33)



}
