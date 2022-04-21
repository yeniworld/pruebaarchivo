// Para usar el motor físico, usaremos 3 objetos creados en la librería Matter.min.js

const Engine = Matter.Engine; // Se utiliza para crear el motor físico, cambiamos el nombre a Engine solamente.
//const Render = Matter.Render; //
const World = Matter.World; // Crear el mundo físico y agregarle objetos.
const Bodies = Matter.Bodies; // Se utiliza para crear los objetos físicos que habitan el mundo
const Constraint = Matter.Constraint;
const Body = Matter.Body; // Se utiliza para crear el cuerpo
const Composites = Matter.Composites;  
const Composite = Matter.Composite; 

let engine;
let world;

function setup() 
{
  createCanvas(500,700);
  engine = Engine.create(); // Creamos el motor físico
  world = engine.world;     // Creamos el mundo yupi !!
 
  rectMode(CENTER);//Crar un rectángulo desde el centro
  ellipseMode(RADIUS);
  textSize(50)
}

function draw() 
{
  background(51);
  Engine.update(engine); // Actiualizamos el motor físico
   
}




