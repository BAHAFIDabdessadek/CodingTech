
// // Exercice 1 



// interface IShape {

//     area(): number;

// }

// interface ICircle extends IShape {

//     radius: number;
// }

// interface IRectangle extends IShape {

//     width: number;
//     height: number;
// }



// class CircleImpl implements ICircle {
//     radius: number;
//     constructor(radius: number) {
//         this.radius = radius;
//     }
//     area(): number {
//         return (this.radius * this.radius) * (3.14);
//     }
// }

// class RectangleImpl implements IRectangle {
//     width: number;
//     height: number;
//     constructor(width: number, height: number) {
//         this.width = width;
//         this.height = height;
//     }
//     area(): number {
//         return this.width * this.height;
//     }
// }

// function calculateArea(shape: IShape): number {

//     return shape.area()
// }

// let circle: CircleImpl = new CircleImpl(4);
// console.log(circle.area());

// let rectangle: RectangleImpl = new RectangleImpl(4, 8);
// console.log(rectangle.area());

// // Exercice 2

// class Stack<T> {

//     private stack: T[] = [];

//     // we push  values into stack
//     public push(x: T) {

//         this.stack.push(x);

//     }

//     // removed the last element we added
//     public pop(): T | undefined{
//         return this.stack.pop();
//     }

//     // Returns the top element of the stack without removing it
//     public peek():T| undefined{
//         return this.stack[this.stack.length - 1];
//     }
//     // check the stack is empty or not 
//     isEmpty():boolean{
//         return this.stack.length === 0;
//     }
// }

// // example 1 for numbers 
// let number1= new Stack<number>();
//  number1.push(3);
//  number1.push(70);
// // number1.push(9);

// // if(!number1.isEmpty()){
// //     console.log(number1.pop());
// // }else{
// //     console.log("table is empty");
// // }

// console.log(number1.peek());

// // console.log(number1.isEmpty());
// // console.log(number1.pop());
// // console.log(number1);

// // example 2 for charcters

// // let character1 = new Stack<string>();

// // character1.push("aymen");
// // character1.push("brahim");
// // character1.push("Amine");

// // console.log(character1.peek());
// // console.log(character1.pop());
// // console.log(character1)
// // console.log(character1.isEmpty());

// // // Exercice 3

// abstract class Animal{

//     constructor(nom:string){
        
//         AnimalCounter.count++;
//     }
//     public abstract makeSound():string;
//     move():string{
//         return "moove!";
//     }

// }

// class Dog extends Animal{

//     public makeSound() {
//         return "aboyer";
//     }

// }

// class Cat extends Animal{

//     public makeSound() {
//         return "miauler";
//     }
    
// }

// class AnimalCounter {
//      static count:number = 0;

//      static increment():void{
//        this.count++;
//      }
//      static getCount():number{
//         return this.count;
//      }
// }

// let anime1 = new Cat("mimi");
// let anime2 = new Cat("lyly");
// let anime3 = new Cat("kiki");

// let anime4 = new Dog("kanykorso");
// let anime5 = new Dog("sloguy");

// console.log(anime1.makeSound());
// console.log(anime1.move());

// console.log(anime4.makeSound());
// console.log(anime4.move());

// console.log(AnimalCounter.getCount())

// // Exercice 4

// console.log("-- Exerice 4 --")
// type x<T> = T extends string ? true : false;

// type IsArray<T> = T extends Array<any> ? true : false;

// type Test1 = IsArray<number[]>; // true

// function checkIfArray<T>(value: T):IsArray<T>{
//     return Array.isArray(value) as IsArray<T>;
// }


// const arrayTest1 = checkIfArray([1,4,5]);

// const arrayTest2 = checkIfArray(2);






// interface IPerson{

//     name:string;
//     age:number;
//     address:string;

// }

// // That mean can create any constructor we want and use it without creating contructor in our class or interface 

// type PartialPerson = Partial<IPerson>;

// // that mean we can read and we can not write 
// type ReadOnlyPerson = Readonly<IPerson>;


// class Car {
//     make:string;
//     model:string;
//     year:number;

// }

// type CarPropertues = keyof Car;

// const key1: CarPropertues = "make"; // Valid
// const key2: CarPropertues = "model"; // Valid
// const key3: CarPropertues = "email"; // Valid
// const key4:CarPropertues = "year";
