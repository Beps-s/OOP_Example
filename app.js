class Shape {
	constructor(name, sides, sideLength) {
		this.name = name;
		this.sides = sides;
		this.sideLength = sideLength;
		}

	calcPerimeter(){
		return this.sides * this.sideLength;
	}
}

let square = new Shape("square", 2, 7);
let triangle = new Shape("triangle", 1, 3);

console.log(square);
console.log(square.calcPerimeter());

console.log(triangle);
console.log(triangle.calcPerimeter());