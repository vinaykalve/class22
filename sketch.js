const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


function setup() {
  createCanvas(400, 400);

  engine = Engine.create();
  world = engine.world;

  ground_options = {
    isStatic: true
  }

  ground = Bodies.rectangle(200, 390, 400, 20, ground_options);
  World.add(world, ground);

  console.log(ground);
  
  ball_option = {
    restitution: 1.0
  }

  ball = Bodies.circle(50,50,25,ball_option);
  World.add(world, ball);

}

function draw() {
  background(0);
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 400, 20);

  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 25,25);
}
