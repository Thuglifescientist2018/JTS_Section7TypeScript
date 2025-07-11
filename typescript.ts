// 223. TypeScript 3
//boolean
let isCool: boolean = true;

// number
let age : number = 56;

//string

let eyeColor: string = 'brown';
let favoriteQuote: string = `I'm not old I am only the ${age}`

//Array
let pets: string[] = ['cat', 'dog', 'pig']
let pets2: Array<string> = ['lion', 'dragon', 'lizard']

// Object
let wizard: object =  {
    a: 'john'
}

wizard = Object; // only re-assignable to an object but not anything else

// null and undefined
let meh: undefined = undefined; // first 'undefined' is typescript type and = undefined is javascript's actual undefined and same for below
let noo: null = null; 

// 224. TypeScript 4
// Tuple
let basket: [string, number];
basket = ['basket', 5] // type order matters to the corresponding source.

// Enum
enum Size { Small = 1, Medium = 2, Large = 3}
let sizeName: string = Size[3] // if we want to access the Key then it should be a string type in typescript then the provide number to access that Key string for a given number
let sizeName2: number = Size.Large // If we want to access the value of the key then access using dot(.) and we should get it's number in this case

// 225. TypeScript 5
// Any - Be Careful !!!
let whatever: any = "something like this!!!";
whatever = Size.Small;
whatever = basket

//void
let sing = (): void => { // void because its not returning anything
    console.log("lalaalalalalalalalalalalalalala");
    // return 'lala' // if we return it will give an error
}

// Never
let error = (): never => {
    throw Error('oops'); /* Unreachable code detected.ts(7027)
    Type '"Hello"' is not assignable to type 'never'.ts(2322)
    It happens when both throw error and return 'hello' is done, if there was no throw Error() then it would only give 'hello' can't be assigned to 'never' error, but not returning and leaving only the error would give no error */
    // return 'Hello'
}
let sing2 = (): never => { // void because its not returning anything
    // console.log("lalaalalalalalalalalalalalalala");
    // console.log is indeed doing its work and is considered to have an endpoint that eventually ends so never, never really happened so it will give an error while void would not care about endpoint code inside, just that something in it should not be returned/ and also n():never must throw an error
    throw new Error("a must throw error")
}

//227. TypeScript 6
//interface
type RobotArmy =  {
    count: number,
    type: string,
    magic: string
}
let fightRobotArmy = (robots: RobotArmy) => {
    console.log("FIGHT!")
}
let fightRobotArmy2 = (robots: {count: number, type: string, magic: string}) => {
    console.log("Fight")
}

// Self Practice
// URL: https://medium.com/@martin_hotell/interface-vs-type-alias-in-typescript-2-7-2a8f1777af4c
interface PointInterface {
    x: number,
    y: number
}
type PointType  = {
    x: number,
    y: number
}
const getRectangleAreaInterface = (args: PointInterface) => args.x * args.y;

const getRectangleAreaAliased = (args: PointType) => args.x * args.y;

getRectangleAreaInterface({x: 12,y:1 })
getRectangleAreaAliased({x:23, y:6}) // on both interface and type: if we dont completely give all valid arguments the error is going to be the same kind.
/* // TS Error: 
// Interface:
Argument of type '{ x: number; }' is not assignable to parameter of type 'PointInterface'. Property 'y' is missing in type '{ x: number; }'.
// Type alias:
Argument of type '{ x: number; }' is not assignable to parameter of type 'PointType'. Property 'y' is missing in type '{ x: number; }'. */

// We can extend an interface with type alias:
interface ThreeDimensions extends PointType {
    z: number
}
// Or use type alias for implementing a Class constraint
// class Rectangle implements PointType {
//     x = 2;
//     y = 4;
// }

// Or use interface extended by a type for implementing a Class constraint
class RectanglePrism implements ThreeDimensions {
    x = 2
    y = 3
    z = 4
}

// We can also combine both type alias and interface for implementing a Class constraint
interface Shape {
    area(): number
}
// type Perimeter = {
//     perimiter(): number
// }

// class Rectangle implements PointType, Shape, Perimeter {
//     x = 2
//     y = 3
//     area() {
//         return this.x * this.y
//     }
//     perimiter() {
//         return 2 * (this.x + this.y)
//     }
// }

/*You can use interface or any other TypeScript valid type(which has shape of a Dictionary/JS Object, so non primitive types etc…) for type alias extension via intersection operator & */

class Point {
    x!: number
    y!: number
}
interface Shape {
    area(): number
}
type Perimeter = {
    perimeter(): number
}

// type RectangleShape = Shape & Perimeter & Point

// class Rectangle implements RectangleShape {
//    x = 2
//    y = 3
//    area() {
//     return this.x * this.y;
//    }
//    perimeter() {
//     return 2 * (this.x + this.y)
//    }
// }
/* We can also leverage mapped types for various transforms of both interface and type alias.

Let’s make Shape and Perimeter optional via Partial mapped type: */
type RectangleShape = Partial<Shape & Perimeter> & Point

class PartialRectangle implements RectangleShape {
    x = 2
    y = 3
}

const rectangle: RectangleShape = {
    x: 12,
    y: 133,
    area() {
        return 123
    },
    perimeter() {
        return 123
    }
}

