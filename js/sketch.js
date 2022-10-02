
//load text
var eyesText = 'The most common effects on the eyes are an enlarged optic disc, which is where the optic nerve enters the retina, and a flattening of the shape of the eye.'
var brainText = 'Research has shown that astronauts\' minds slow down in general during their first time in space. Researchers say that compared to before the flight, astronauts made more mistakes and responded more slowly during and after the flight. Also data has shown that astronauts have a higher pain threshold in space.'
var legsText = 'In space astronauts will experience their bodily fluids getting moved through their body. The fluids will move around the body because of the lack of gravity. This will cause the size of the legs to decrease and the size of the upperbody to increase.'
var bonesText = 'In space astronauts will experience their bones getting weaker. This is because of the lack of gravity. The lack of gravity will cause the bones to become weaker because in space the bones don\'t have to work against the 1g (G-force) we experience on Earth.'
var kidneyText = 'In space astronauts will experience their kidneys getting smaller. Also, there is an elevated amount of calcium in the urine. This results in more chance of developing kidney stones.'
var type
var astronaut
var e,br,l,b,k
var box1;
var engine,world;
var menuOpen = false;
var info = document.getElementById("info")
var infotitle=document.getElementById("infotitle")

//window.addEventListener("load", typewriter)

function preload(){
  astronaut = loadImage("../assets/astronaut.png")

  e = loadImage("../assets/eye.jpg")
  br = loadImage("../assets/brain.png")
  l = loadImage("../assets/leg.png")
  b = loadImage("../assets/bone.png")
  k = loadImage("../assets/kidney.png")
}



function setup() {


  //canvas
  var cnv = createCanvas(windowWidth-100, windowHeight/1.5);
  var x = (windowWidth - width) / 2;
  var y= cnv.y
  cnv.position(x,y)
  cnv.parent('sketch-holder');

  //astronaut image
  naut=createSprite(cnv.width/2 , cnv.height/2)
  naut.addImage(astronaut)
  astronaut.resize(cnv.width, cnv.height)

  //interactive sprites
  eyes=createSprite(cnv.width/1.52, cnv.height/3.4, cnv.width/15, cnv.height/16);
  eyes.addImage(e)
  e.resize(cnv.width/20,cnv.height/15)

  brain=createSprite(cnv.width/1.49, cnv.height/4.8, cnv.width/15, cnv.height/10);
  brain.addImage(br)
  br.resize(cnv.width/10, cnv.height/6)

  legs=createSprite(cnv.width/2.5, cnv.height/1.8, cnv.width/12, cnv.height/8);
  legs.addImage(l)
  l.resize(cnv.width/10, cnv.height/5)

  bones=createSprite(cnv.width/2.05, cnv.height/3.9, cnv.width/13, cnv.height/13);
  bones.addImage(b)
  b.resize(cnv.width/10, cnv.height/10)

  kidney=createSprite(cnv.width/1.9, cnv.height/2.3, cnv.width/15, cnv.height/10);
  kidney.addImage(k)
  k.resize(cnv.width/10, cnv.height/6)
  
  brain.onMousePressed = function(){info.innerHTML = brainText; infotitle.innerHTML = "Brain"}
  eyes.onMousePressed = function(){info.innerHTML = eyesText; infotitle.innerHTML = "Eyes"}
  legs.onMousePressed = function(){info.innerHTML = legsText; infotitle.innerHTML = "Legs"}
  bones.onMousePressed = function(){info.innerHTML = bonesText; infotitle.innerHTML = "Bones"}
  kidney.onMousePressed = function(){info.innerHTML = kidneyText; infotitle.innerHTML = "Kidneys"}


}

function draw() {
  background(255);
  drawSprites();
}
