// Your code here
class Polygon {
    constructor(sides) {
      this.sides = sides;
    }
  
    get countSides() {
      return this.sides.length;
    }
  
    get perimeter() {
      return this.sides.reduce((acc, side) => acc + side, 0);
    }
  }
  
  class Triangle extends Polygon {
    get isValid() {
      if (this.countSides === 3) {
        const [a, b, c] = this.sides;
        return a + b > c && a + c > b && b + c > a;
      }
      return false;
    }
  }
  
  class Square extends Polygon {
    get isValid() {
      if (this.countSides === 4) {
        const [a, b, c, d] = this.sides;
        return a === b && b === c && c === d;
      }
      return false;
    }
  
    get area() {
      if (this.isValid && this.countSides === 4) {
        const sideLength = this.sides[0];
        return sideLength * sideLength;
      }
      return undefined;
    }
  }
  
  // Example usage:
  const triangle = new Triangle([3, 4, 5]);
  console.log(`Is the triangle valid? ${triangle.isValid}`); // true
  console.log(`Perimeter of the triangle: ${triangle.perimeter}`); // 12
  
  const square = new Square([4, 4, 4, 4]);
  console.log(`Is the square valid? ${square.isValid}`); // true
  console.log(`Area of the square: ${square.area}`); // 16
  