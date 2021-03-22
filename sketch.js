var pxlfont;
//Font Used:"Press Start 2P" by Code "Dibyayan Kar" Boisclair.
//Font Link:https://fonts.google.com/specimen/Press+Start+2P

var stage = 0;

var cx = 0;
var lmove = 2;

var px = 250;
var py = 200;
var pxmove = 0;
var pymove = 3;

var ex = 70;

var hx = 0;
var h2x = 0;
var h3x = 0;
var h1xmove = 1.5;
var h2xmove = 2;
var h3xmove = 2.5;


function preload() {
  pxlfont = loadFont('pixelfont.ttf');
}

function setup() {
  createCanvas(400, 400);
}

function keyPressed() {
  if (key == 'r') {
    cx = 0;
    lmove = 2;

    px = 250;
    py = 200;
    pxmove = 0;
    pymove = 3;

    hx = 0;
    h2x = 0;
    h3x = 0;
    h1xmove = 1.5;
    h2xmove = 2;
    h3xmove = 2.5;
  } else if (key == 'm') {
    stage = 0;
  } else if (key == 'i') {
    stage = 1;
  } else if (key == 's') {
    stage = 2;
  }

}

function draw() {
  if (stage == 0) {
   menuStart();

  }

  if (stage == 1) {
    menuInstruction();

  }

  if (stage == 2) {
    background(187, 129, 7);

    canyonWalls();

    canyonLevel();

    player();

    cattle1(-100, 140);

    cattle2(-80, 200);

    cattle3(-120, 250);

    cattleBehavior();

    game();
  }

}

function canyonLevel() {

    canyonObstacleMRock(470, 225);
    canyonObstacleCactus(666, 180);
    canyonObstacleSRock(774, 270);
    canyonObstacleMRock(970, 195);
    canyonObstacleCactus(1234, 225);
    canyonObstacleSRock(1374, 266);
    canyonObstacleMRock(1560, 130);
    canyonObstacleSRock(1774, 266);
    canyonObstacleCactus(1820, 225);
    canyonObstacleSRock(2000, 143);
    canyonObstacleMRock(2300, 199);
    canyonObstacleCactus(2680, 175);
    canyonObstacleSRock(2774, 186);
    canyonObstacleCactus(2960, 123);
    canyonObstacleMRock(3090, 199);
    canyonObstacleMRock(3350, 170);
    canyonObstacleCactus(3636, 222);
    canyonObstacleMRock(3806, 157);
    canyonObstacleSRock(4000, 247);
    canyonObstacleMRock(4150, 220);
    canyonObstacleSRock(4321, 159);
    canyonObstacleCactus(4600, 290);
    canyonObstacleSRock(4748, 200);
    canyonObstacleCactus(5000, 208);
    canyonObstacleMRock(5150, 295);
    canyonObstacleSRock(5348, 220);
    canyonObstacleCactus(5542, 210);

}

function canyonWalls() {
   cx = cx - lmove;

  if (cx <= -800) {
    lmove = 3;
  }
  if (cx <= -1200) {
    lmove = 4;
  }
  if (cx <= -2400) {
    lmove = 5;
  }
  if (cx <= -3600) {
    lmove = 6;
  }
  if (cx <= -4400) {
    lmove = 7;
  }
  if (cx <= -5700) {
    lmove = 0;
  }
  
  
  fill(153, 72, 26);
  noStroke();
  //Top Wall
  {
    beginShape();
    vertex(cx, 0);
    vertex(cx + 6150, 0);
    vertex(cx + 6150, 100);
    { //Right Corner To Major Low
      vertex(cx + 5900, 135);
      vertex(cx + 5700, 120);
      vertex(cx + 5660, 100)
      vertex(cx + 5560, 135);
      vertex(cx + 5460, 145)
      vertex(cx + 5300, 157);
      vertex(cx + 5200, 145);
      vertex(cx + 5000, 175);
    } //Right Corner To Major Low
    { //Major Low To Major High
      vertex(cx + 4900, 158);
      vertex(cx + 4850, 166);
      vertex(cx + 4600, 165);
      vertex(cx + 4440, 130);
      vertex(cx + 4400, 140);
      vertex(cx + 4300, 128);
      vertex(cx + 4200, 104)
      vertex(cx + 4000, 110);
      vertex(cx + 3810, 90);
      vertex(cx + 3740, 110);
      vertex(cx + 3600, 60);
      vertex(cx + 3440, 70);
      vertex(cx + 3230, 60);
      vertex(cx + 3120, 80);
      vertex(cx + 3000, 50);
    } //Major Low To Major High
    { //Major High To Start
      vertex(cx + 3000, 50);
      vertex(cx + 2880, 69);
      vertex(cx + 2700, 80);
      vertex(cx + 2570, 77);
      vertex(cx + 2400, 95);
      vertex(cx + 2320, 62);
      vertex(cx + 2220, 86);
      vertex(cx + 2000, 102);
      vertex(cx + 1900, 80);
      vertex(cx + 1700, 90);
      vertex(cx + 1560, 74);
      vertex(cx + 1320, 111);
      vertex(cx + 1240, 93);
      vertex(cx + 1100, 100);
      vertex(cx + 950, 86);
      vertex(cx + 800, 108);
      vertex(cx + 690, 120);
      vertex(cx + 510, 100);
      vertex(cx + 400, 115);
      vertex(cx + 230, 90);
      vertex(cx + 100, 110);
      vertex(cx, 100);
    } //Major High To Start
    endShape(CLOSE);
  }

  //Top Wall Slowdown Limits
  {
    if (px > cx && px <= (cx + 600) && py + 50 < 180) {
      pxmove = 0.5;
    } else {
      pxmove = 0;
    }
    if (px > (cx + 600) && px <= (cx + 790) && py + 50 < 190) {
      pxmove = 0.5;
    }
    if (px > (cx + 790) && px <= (cx + 1470) && py + 50 < 175) {
      pxmove = 0.5;
    }
    if (px > (cx + 1470) && px <= (cx + 1930) && py + 50 < 165) {
      pxmove = 0.5;
    }
    if (px > (cx + 1930) && px <= (cx + 2590) && py + 50 < 160) {
      pxmove = 0.5;
    }
    if (px > (cx + 2590) && px <= (cx + 3000) && py + 50 < 155) {
      pxmove = 0.5;
    }
    if (px > (cx + 3000) && px <= (cx + 3670) && py + 50 < 145) {
      pxmove = 0.5;
    }
    if (px > (cx + 3670) && px <= (cx + 4270) && py + 50 < 180) {
      pxmove = 0.5;
    }
    if (px > (cx + 4270) && px <= (cx + 4500) && py + 50 < 205) {
      pxmove = 0.5;
    }
    if (px > (cx + 4500) && px <= (cx + 5600) && py + 50 < 230) {
      pxmove = 0.5;
    }
    if (px > (cx + 5600) && px <= (cx + 6000) && py + 50 < 210) {
      pxmove = 0.5;
    }

  }

  //Top Wall Movement Limits
  {
    if (px > cx && px <= (cx + 600) && py + 50 < 160) {
      py = py + pymove;
    }
    if (px > (cx + 600) && px <= (cx + 790) && py + 50 < 170) {
      py = py + pymove;
    }
    if (px > (cx + 790) && px <= (cx + 1470) && py + 50 < 155) {
      py = py + pymove;
    }
    if (px > (cx + 1470) && px <= (cx + 1930) && py + 50 < 145) {
      py = py + pymove;
    }
    if (px > (cx + 1930) && px <= (cx + 2590) && py + 50 < 140) {
      py = py + pymove;
    }
    if (px > (cx + 2590) && px <= (cx + 3000) && py + 50 < 135) {
      py = py + pymove;
    }
    if (px > (cx + 3000) && px <= (cx + 3670) && py + 50 < 125) {
      py = py + pymove;
    }
    if (px > (cx + 3670) && px <= (cx + 4270) && py + 50 < 160) {
      py = py + pymove;
    }
    if (px > (cx + 4270) && px <= (cx + 4500) && py + 50 < 185) {
      py = py + pymove;
    }
    if (px > (cx + 4500) && px <= (cx + 5600) && py + 50 < 210) {
      py = py + pymove;
    }
    if (px > (cx + 5600) && px <= (cx + 6000) && py + 50 < 190) {
      py = py + pymove;
    }

  }

  //Bottom Wall
  {
    beginShape();
    vertex(cx, 400);
    vertex(cx + 5730, 400);
    vertex(cx + 5720, 310);
    vertex(cx + 5700, 310);
    { //Right Corner To Major Low
      vertex(cx + 5650, 300);
      vertex(cx + 5450, 340);
      vertex(cx + 5330, 323);
      vertex(cx + 5220, 340);
      vertex(cx + 5100, 336);
      vertex(cx + 5000, 360);
    } //Right Corner To Major Low
    { //Major Low To Major High
      vertex(cx + 4950, 330);
      vertex(cx + 4860, 330);
      vertex(cx + 4720, 300);
      vertex(cx + 4690, 313);
      vertex(cx + 4600, 333);
      vertex(cx + 4500, 290);
      vertex(cx + 4440, 300);
      vertex(cx + 4310, 270);
      vertex(cx + 4060, 286);
      vertex(cx + 3870, 260);
      vertex(cx + 3750, 280);
      vertex(cx + 3550, 246);
      vertex(cx + 3370, 260);
      vertex(cx + 3220, 280);
      vertex(cx + 3130, 235);
      vertex(cx + 2910, 250);
      vertex(cx + 2800, 230);
    } //Major Low To Major High
    { //Major High To Start
      vertex(cx + 2910, 250);
      vertex(cx + 2800, 300);
      vertex(cx + 2700, 290);
      vertex(cx + 2640, 310);
      vertex(cx + 2500, 230);
      vertex(cx + 2400, 245);
      vertex(cx + 2270, 235);
      vertex(cx + 2100, 259);
      vertex(cx + 1910, 345);
      vertex(cx + 1700, 361);
      vertex(cx + 1540, 320);
      vertex(cx + 1310, 300);
      vertex(cx + 1200, 296);
      vertex(cx + 1050, 342);
      vertex(cx + 930, 300);
      vertex(cx + 790, 330);
      vertex(cx + 650, 350);
      vertex(cx + 600, 320);
      vertex(cx + 450, 304);
      vertex(cx + 340, 299);
      vertex(cx + 240, 320);
      vertex(cx + 130, 308);
      vertex(cx + 55, 318);
      vertex(cx, 300);
    } //Major High To Start
    endShape(CLOSE);
  }

  //Bottom Wall Slowdown Limits
  {
    if (px > cx && px <= (cx + 620) && py + 50 > 335) {
      pxmove = 0.5;
    } else {
      pxmove = 0;
    }
    if (px > (cx + 620) && px <= (cx + 810) && py + 50 > 355) {
      pxmove = 0.5;
    }
    if (px > (cx + 810) && px <= (cx + 1610) && py + 50 > 335) {
      pxmove = 0.5;
    }
    if (px > (cx + 1610) && px <= (cx + 1970) && py + 50 > 370) {
      pxmove = 0.5;
    }
    if (px > (cx + 1970) && px <= (cx + 2070) && py + 50 > 320) {
      pxmove = 0.5;
    }
    if (px > (cx + 2070) && px <= (cx + 2190) && py + 50 > 280) {
      pxmove = 0.5;
    }
    if (px > (cx + 2190) && px <= (cx + 2570) && py + 50 > 260) {
      pxmove = 0.5;
    }
    if (px > (cx + 2570) && px <= (cx + 2860) && py + 50 > 310) {
      pxmove = 0.5;
    }
    if (px > (cx + 2860) && px <= (cx + 3220) && py + 50 > 275) {
      pxmove = 0.5;
    }
    if (px > (cx + 3220) && px <= (cx + 4020) && py + 50 > 290) {
      pxmove = 0.5;
    }
    if (px > (cx + 4020) && px <= (cx + 4500) && py + 50 > 310) {
      pxmove = 0.5;
    }
    if (px > (cx + 4500) && px <= (cx + 4800) && py + 50 > 330) {
      pxmove = 0.5;
    }
    if (px > (cx + 4800) && px <= (cx + 5700) && py + 50 > 355) {
      pxmove = 0.5;
    }

  }

  //Bottom Wall Movement Limits
  {
    if (px > cx && px <= (cx + 620) && py + 50 > 355) {
      py = py - pymove;
    }
    if (px > (cx + 620) && px <= (cx + 810) && py + 50 > 375) {
      py = py - pymove;
    }
    if (px > (cx + 810) && px <= (cx + 1610) && py + 50 > 355) {
      py = py - pymove;
    }
    if (px > (cx + 1610) && px <= (cx + 1970) && py + 50 > 390) {
      py = py - pymove;
    }
    if (px > (cx + 1970) && px <= (cx + 2070) && py + 50 > 340) {
      py = py - pymove;
    }
    if (px > (cx + 2070) && px <= (cx + 2190) && py + 50 > 300) {
      py = py - pymove;
    }
    if (px > (cx + 2190) && px <= (cx + 2570) && py + 50 > 280) {
      py = py - pymove;
    }
    if (px > (cx + 2570) && px <= (cx + 2860) && py + 50 > 330) {
      py = py - pymove;
    }
    if (px > (cx + 2860) && px <= (cx + 3220) && py + 50 > 295) {
      py = py - pymove;
    }
    if (px > (cx + 3220) && px <= (cx + 4020) && py + 50 > 310) {
      py = py - pymove;
    }
    if (px > (cx + 4020) && px <= (cx + 4500) && py + 50 > 330) {
      py = py - pymove;
    }
    if (px > (cx + 4500) && px <= (cx + 4800) && py + 50 > 350) {
      py = py - pymove;
    }
    if (px > (cx + 4800) && px <= (cx + 5700) && py + 50 > 375) {
      py = py - pymove;
    }

  }

}

function canyonObstacleCactus(ox, oy) {
  { //Cactus
    noStroke();
    fill(20, 70, 10);
    ellipse(cx + ox, oy, 40, 40);
    fill(190, 190, 10);
    triangle(cx + (ox + 18), oy + 5, cx + (ox + 18), oy - 5, cx + (ox + 25), oy);
    triangle(cx + (ox - 18), oy + 5, cx + (ox - 18), oy - 5, cx + (ox - 25), oy);

    triangle(cx + (ox + 5), oy + 18, cx + (ox - 5), oy + 18, cx + (ox), oy + 25);
    triangle(cx + (ox + 5), oy - 18, cx + (ox - 5), oy - 18, cx + (ox), oy - 25);

    triangle(cx + (ox + 15), oy + 10, cx + (ox + 8), oy + 16, cx + (ox + 16), oy + 18);
    triangle(cx + (ox + 15), oy - 10, cx + (ox + 8), oy - 16, cx + (ox + 16), oy - 18);

    triangle(cx + (ox - 15), oy - 10, cx + (ox - 8), oy - 16, cx + (ox - 16), oy - 18);
    triangle(cx + (ox - 15), oy + 10, cx + (ox - 8), oy + 16, cx + (ox - 16), oy + 18);

    beginShape();
    vertex(cx + (ox + 10), oy);
    vertex(cx + (ox + 7), oy + 3);
    vertex(cx + (ox + 8), oy + 8);
    vertex(cx + (ox + 3), oy + 7);
    vertex(cx + (ox), oy + 10);
    vertex(cx + (ox - 3), oy + 7);
    vertex(cx + (ox - 8), oy + 8);
    vertex(cx + (ox - 7), oy + 3);
    vertex(cx + (ox - 10), oy);
    vertex(cx + (ox - 7), oy - 3);
    vertex(cx + (ox - 8), oy - 8);
    vertex(cx + (ox - 3), oy - 7);
    vertex(cx + (ox), oy - 10);
    vertex(cx + (ox + 3), oy - 7);
    vertex(cx + (ox + 8), oy - 8);
    vertex(cx + (ox + 7), oy - 3);
    endShape(CLOSE);
  } //Cactus

  if (px + 40 >= cx + ox && px <= cx + ox + 20 && py + 35 >= oy && py <= oy + 35) {
    px = px - 20;
  }

}

function canyonObstacleSRock(rx, ry) {
  { //Rock
    noStroke();
    fill(100);
    beginShape();
    vertex(cx + (rx + 15), ry - 24);

    vertex(cx + (rx - 10), ry - 20);

    vertex(cx + (rx - 15), ry);

    vertex(cx + (rx), ry + 24);

    vertex(cx + (rx + 23), ry + 18);

    vertex(cx + (rx + 26), ry);

    endShape(CLOSE);

    noFill();
    strokeWeight(3);
    stroke(80);
    beginShape();
    vertex(cx + (rx + 5), ry - 14);

    vertex(cx + (rx - 2), ry + 10);

    vertex(cx + (rx + 13), ry + 8);

    vertex(cx + (rx + 16), ry);

    vertex(cx + (rx + 5), ry - 14);

    endShape();

    line(cx + (rx + 13), ry - 22, cx + (rx + 5), ry - 14);
    line(cx + (rx - 8), ry - 18, cx + (rx + 2), ry - 14);
    line(cx + (rx - 13), ry, cx + (rx - 3), ry + 7);
    line(cx + (rx), ry + 20, cx + (rx - 2), ry + 10);
    line(cx + (rx + 20), ry + 16, cx + (rx + 13), ry + 8);
    line(cx + (rx + 22), ry, cx + (rx + 16), ry);
  } //Rock
  if (px + 40 >= cx + rx && px <= cx + rx + 20 && py + 30 >= ry && py <= ry + 35) {
    px = px - lmove;
  }
}

function canyonObstacleMRock(rx, ry) {
  { //Rock
    fill(100);
    noStroke();
    beginShape();
    vertex(cx + (rx + 25), ry - 20);

    vertex(cx + (rx), ry - 28);

    vertex(cx + (rx - 28), ry);

    vertex(cx + (rx - 14), ry + 24);

    vertex(cx + (rx), ry + 28);

    vertex(cx + (rx + 26), ry + 14);

    endShape(CLOSE);

    noFill();
    strokeWeight(3);
    stroke(80);
    beginShape();
    vertex(cx + (rx - 7), ry - 10);

    vertex(cx + (rx - 18), ry);

    vertex(cx + (rx), ry + 13);

    vertex(cx + (rx + 16), ry + 8);

    vertex(cx + (rx + 10), ry - 5);

    vertex(cx + (rx - 7), ry - 10);

    endShape();

    line(cx + (rx + 10), ry - 5, cx + (rx + 25), ry - 20);
    line(cx + (rx - 7), ry - 10, cx + (rx), ry - 28);
    line(cx + (rx - 17), ry, cx + (rx - 28), ry);
    line(cx + (rx), ry + 13, cx + (rx - 14), ry + 24);
    line(cx + (rx), ry + 13, cx + (rx), ry + 28);
    line(cx + (rx + 16), ry + 8, cx + (rx + 26), ry + 14);
  } //Rock
  if (px + 40 >= cx + rx && px <= cx + rx + 25 && py + 35 >= ry && py <= ry + 30) {
    px = px - lmove;
  }

}

function player() {
  { //Hat
    fill(87, 42, 16);
    ellipse(px, py, 63, 50);
    fill(30);
    ellipse(px, py, 43, 30);
    fill(107, 42, 26);
    ellipse(px, py, 36, 23);
    fill(77, 42, 16);
    ellipse(px - 2, py, 23, 15);
    ellipse(px + 5, py, 22, 8);
  } //Hat

  px = px - pxmove;

  if (keyIsDown(UP_ARROW)) {
    py = py - pymove;
  }
  if (keyIsDown(DOWN_ARROW)) {
    py = py + pymove;
  }

}

function game() {
  
  //gameOver
  {
    if (px <= 45) {
      fill(255, 45);
      rect(0, 0, 400, 400);

      fill(0);
      textFont(pxlfont);
      textAlign(CENTER);
      textSize(30);
      text("YOU'VE BEEN", 200, 155);
      text("TRAMPLED", 200, 195);

      textSize(15);
      text('Press "r" To Restart', 200, 255);
      text('Or "m" To Go To Menu', 200, 280);

      lmove = 0;
      pymove = 0;
    }
  }

  //gameWon
  {
    if (cx <= -5600) {
      py = py + 10;
    }
    if (cx <= -5600 && py >= 350) {
      py = 350;
    }

    if (cx <= -5600 && px >= 220) {
      textFont(pxlfont);
      textAlign(CENTER);
      fill(0);
      textSize(30);
      text('YOU MADE IT!', 200, 185);
      textSize(15);
      text('With A Perfect Score!', 200, 220);
      textSize(12);
      text('Press "m" To Go To Menu', 200, 255);
      text('Or "r" To Restart', 200, 275);
    }
    if (cx <= -5600 && px < 220 && px >= 100) {
      textFont(pxlfont);
      textAlign(CENTER);
      fill(0);
      textSize(30);
      text('YOU MADE IT!', 200, 185);
      textSize(15);
      text('Good Job!', 200, 220);
      textSize(12);
      text('Press "m" To Go To Menu', 200, 255);
      text('Or "r" To Restart', 200, 275);
    }

    if (cx <= -5600 && px < 100 && px > 45) {
      textFont(pxlfont);
      textAlign(CENTER);
      fill(0);
      textSize(30);
      text('YOU', 200, 100);
      text('(Barely)', 200, 140);
      text('MADE IT!', 200, 180);
      textSize(15);
      text('But Good Job!', 200, 220);
      textSize(12);
      text('Press "m" To Go To Menu', 200, 255);
      text('Or "r" To Restart', 200, 275);
    }
  }
  
}

function cattle1(sx, sy) {
  noStroke();

  fill(83, 27, 27);
  triangle((sx - 70) + hx, sy, sx + (hx), sy + 10, sx + (hx), sy - 10); //Tail
  fill(63, 27, 27);
  ellipse(sx + (hx), sy, 100, 60); //Body
  ellipse((sx + 40) + (hx), sy, 50, 50); //Head
  ellipse((sx + 60) + (hx), sy, 30, 40); //Muzzle
  
  fill(223, 145, 131, 100);
  ellipse((sx + 70) + (hx), sy, 10, 25); //Nose

  fill(0);
  ellipse((sx + 48) + (hx), sy + 12, 8, 8); //Eye
  ellipse((sx + 48) + (hx), sy - 12, 8, 8); //Eye

  fill(83, 27, 27);
  ellipse((sx + 32) + (hx), sy + 25, 10, 25);
  ellipse((sx + 32) + (hx), sy - 25, 10, 25);

  { //Horns
    fill(212, 148, 91);
    beginShape();
    vertex((sx + 55) + (hx), sy + 50);
    vertex((sx + 35) + (hx), sy + 35);
    vertex((sx + 33) + (hx), sy + 15);
    vertex((sx + 40) + (hx), sy + 10);
    vertex((sx + 43) + (hx), sy + 35);
    endShape(CLOSE);

    beginShape();
    vertex((sx + 55) + (hx), sy - 50);
    vertex((sx + 35) + (hx), sy - 35);
    vertex((sx + 33) + (hx), sy - 15);
    vertex((sx + 40) + (hx), sy - 10);
    vertex((sx + 43) + (hx), sy - 35);
    endShape(CLOSE);
  } //Horns

  hx = hx + h1xmove;

}

function cattle2(sx, sy) {
  noStroke();

  fill(123, 77, 27);
  triangle((sx - 70) + h2x, sy, sx + (h2x), sy + 10, sx + (h2x), sy - 10); //Tail
  fill(153, 95, 41);
  ellipse(sx + (h2x), sy, 100, 60); //Body
  ellipse((sx + 40) + (h2x), sy, 50, 50); //Head
  ellipse((sx + 60) + (h2x), sy, 30, 40); //Muzzle
  
  fill(223, 165, 131, 100);
  ellipse((sx + 60) + (h2x), sy, 25, 10); //Decoration
  
  fill(223, 145, 131);
  ellipse((sx + 70) + (h2x), sy, 10, 25); //Nose

  fill(0);
  ellipse((sx + 48) + (h2x), sy + 12, 8, 8); //Eye
  ellipse((sx + 48) + (h2x), sy - 12, 8, 8); //Eye

  fill(123, 77, 27);
  ellipse((sx + 32) + (h2x), sy + 25, 10, 25);
  ellipse((sx + 32) + (h2x), sy - 25, 10, 25);

  { //Horns
    fill(212, 148, 91);
    beginShape();
    vertex((sx + 55) + (h2x), sy + 50);
    vertex((sx + 35) + (h2x), sy + 35);
    vertex((sx + 33) + (h2x), sy + 15);
    vertex((sx + 40) + (h2x), sy + 10);
    vertex((sx + 43) + (h2x), sy + 35);
    endShape(CLOSE);

    beginShape();
    vertex((sx + 55) + (h2x), sy - 50);
    vertex((sx + 35) + (h2x), sy - 35);
    vertex((sx + 33) + (h2x), sy - 15);
    vertex((sx + 40) + (h2x), sy - 10);
    vertex((sx + 43) + (h2x), sy - 35);
    endShape(CLOSE);
  } //Horns

  h2x = h2x + h2xmove;

}

function cattle3(sx, sy) {
  noStroke();

  fill(83, 27, 27);
  triangle((sx - 70) + h3x, sy, sx + (h3x), sy + 10, sx + (h3x), sy - 10); //Tail
  fill(63, 27, 27);
  ellipse(sx + (h3x), sy, 100, 60); //Body
  ellipse((sx + 40) + (h3x), sy, 50, 50); //Head
  ellipse((sx + 60) + (h3x), sy, 30, 40); //Muzzle
  
  fill(223, 165, 131, 150);
  ellipse((sx + 60) + (h3x), sy, 25, 10); //Decoration
  
  fill(223, 145, 131);
  ellipse((sx + 70) + (h3x), sy, 10, 25); //Nose

  fill(0);
  ellipse((sx + 48) + (h3x), sy + 12, 8, 8); //Eye
  ellipse((sx + 48) + (h3x), sy - 12, 8, 8); //Eye

  fill(83, 27, 27);
  ellipse((sx + 32) + (h3x), sy + 25, 10, 25);
  ellipse((sx + 32) + (h3x), sy - 25, 10, 25);

  { //Horns
    fill(212, 148, 91);
    beginShape();
    vertex((sx + 55) + (h3x), sy + 50);
    vertex((sx + 35) + (h3x), sy + 35);
    vertex((sx + 33) + (h3x), sy + 15);
    vertex((sx + 40) + (h3x), sy + 10);
    vertex((sx + 43) + (h3x), sy + 35);
    endShape(CLOSE);

    beginShape();
    vertex((sx + 55) + (h3x), sy - 50);
    vertex((sx + 35) + (h3x), sy - 35);
    vertex((sx + 33) + (h3x), sy - 15);
    vertex((sx + 40) + (h3x), sy - 10);
    vertex((sx + 43) + (h3x), sy - 35);
    endShape(CLOSE);
  } //Horns

  h3x = h3x + h3xmove;

}

function cattleE(sx, sy) {
  noStroke();

  fill(83, 27, 27);
  triangle((sx - 70) + h3x, sy, sx + (h3x), sy + 10, sx + (h3x), sy - 10); //Tail
  fill(63, 27, 27);
  ellipse(sx + (h3x), sy, 100, 60); //Body
  ellipse((sx + 40) + (h3x), sy, 50, 50); //Head
  ellipse((sx + 60) + (h3x), sy, 30, 40); //Muzzle
  
  fill(223, 165, 131, 150);
  ellipse((sx + 60) + (h3x), sy, 25, 10); //Decoration
  
  fill(223, 145, 131);
  ellipse((sx + 70) + (h3x), sy, 10, 25); //Nose

  fill(0);
  ellipse((sx + 48) + (h3x), sy + 12, 8, 8); //Eye
  ellipse((sx + 48) + (h3x), sy - 12, 8, 8); //Eye

  fill(83, 27, 27);
  ellipse((sx + 32) + (h3x), sy + 25, 10, 25);
  ellipse((sx + 32) + (h3x), sy - 25, 10, 25);

  { //Horns
    fill(212, 148, 91);
    beginShape();
    vertex((sx + 55) + (h3x), sy + 50);
    vertex((sx + 35) + (h3x), sy + 35);
    vertex((sx + 33) + (h3x), sy + 15);
    vertex((sx + 40) + (h3x), sy + 10);
    vertex((sx + 43) + (h3x), sy + 35);
    endShape(CLOSE);

    beginShape();
    vertex((sx + 55) + (h3x), sy - 50);
    vertex((sx + 35) + (h3x), sy - 35);
    vertex((sx + 33) + (h3x), sy - 15);
    vertex((sx + 40) + (h3x), sy - 10);
    vertex((sx + 43) + (h3x), sy - 35);
    endShape(CLOSE);
  } //Horns

}

function cattleBehavior() {

  if (hx >= 100 || hx <= 0) {
    h1xmove = -h1xmove;
  }
  if (h2x >= 90 || h2x <= -40) {
    h2xmove = -h2xmove;
  }
  if (h3x >= 120 || h3x <= -10) {
    h3xmove = -h3xmove;
  }

  if (cx <= -5700) {
    h1xmove = 5.5;
    h2xmove = 5.75;
    h3xmove = 5.25;
  }
}

function menuStart() {
   background(187, 129, 7);

    fill(63, 27, 27);
    textFont(pxlfont);
    textAlign(CENTER);
    textSize(40);
    text("STAMPEDE!", 200, 77);
    textSize(12);
    text('A Game By Dibyayan Kar', width / 2, 95);

    fill(0);
    textSize(17);
    text("A Herd Of Stampeding", 200, 160);
    text("Cattle Is Chasing You", 200, 190);
    text("Down A Canyon,", 200, 220);

    textSize(19);
    text("Can You Outrun Them?", 200, 260);

    push();
      rectMode(CENTER);
      noFill();
      strokeWeight(5);
      stroke(63, 27, 27);
      rect(200, 345, 240, 90);
    pop();

    fill(63, 27, 27);
    textSize(15);
    text('Press "i" For', 200, 325);
    text('Instructions On', 200, 350);
    text('How To Play', 200, 375);
}

function menuInstruction() {
  background(187, 129, 7);

    canyonObstacleSRock(110, 141);
    canyonObstacleMRock(60, 141);
    canyonObstacleCactus(75, 230);

    cattleE(95, 337);

    { //Hat
      fill(87, 42, 16);
      ellipse(ex, 53, 63, 50);
      fill(30);
      ellipse(ex, 53, 43, 30);
      fill(107, 42, 26);
      ellipse(ex, 53, 36, 23);
      fill(77, 42, 16);
      ellipse(ex - 2, 53, 23, 15);
      ellipse(ex + 5, 53, 22, 8);
    } //Hat

    push();
      rectMode(CENTER);
      noFill();
      strokeWeight(5);
      stroke(0);
      rect(200, 50, 360, 75);
      rect(200, 140, 360, 75);
      rect(200, 230, 360, 75);
      rect(200, 335, 360, 110);
    pop();

    textAlign(LEFT);
    textFont(pxlfont);
    textSize(12);
    text("Use The Up And Down", 120, 50);
    text("Arrows To Move.", 120, 65);

    text("Walls And Rocks", 145, 140);
    text("Will Slow You Down.", 145, 155);

    text("Cacti Will Push You", 135, 230);
    text("Backwards.", 135, 245);

    textSize(18);
    text('Press "s"', 190, 325);
    text("To Start!", 190, 350);
}