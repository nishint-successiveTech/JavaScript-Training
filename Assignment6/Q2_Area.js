// 2. Create a class Shape with properties width and height and methods getArea(). Create two classes Rectangle and Triangle that inherit from the Shape class and implement the getArea() method for their respective shapes.

class Shape{
    constructor(width,height){
        this.width=width
        this.height=height
    }
    getArea(){
        throw new Error("getArea() must be implemented by subclass");
    }
}
class Rectangle extends Shape{
    getArea(){
        let area=this.width*this.height;
        console.log("Area of Rectangle is:",area);
    }
}
class Triangle extends Shape{
    getArea(){
        let area=(1/2)*this.width*this.height;
        console.log("Area of Triangle is:",area);
    }
}

const r=new Rectangle(10,20);
r.getArea();

const t=new Triangle(20,10)
t.getArea()
