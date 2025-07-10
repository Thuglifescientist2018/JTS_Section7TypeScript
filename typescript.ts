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