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
