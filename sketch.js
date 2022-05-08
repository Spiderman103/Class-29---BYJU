const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var engine;
var world;
var ground;
var fruit;
var rope;
var fruit_con;


function setUp(){
createCanvas(500,700);

 engine = Engine.create();;
 world = engine.world;
 ground = new Ground(200,680,600,20);
 rope = new Rope(7,{x:245,y:30});

 



}
function draw(){

    background(51);

    Engine.update(engine);
    ground.display();
    rope.display();
    





}