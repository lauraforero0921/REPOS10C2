let manzana;


function setup() {
  createCanvas(400, 400);
  manzana = new FRUTA(100,100,"manzana");

}

function draw() {
  background(220);
  manzana.printFruit();
}
