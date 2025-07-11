// The Basics URL: https://www.typescriptlang.org/docs/handbook/2/basic-types.html
//static type checking 
const message = "hello!";
// message() //This expression is not callable. Type 'String' has no call signatures.

// Non-exception Failures
const user = {
    name: "Daniel",
    age: 26,
  };
//   user.location; // returns undefined in javascript but typescript throws "Property 'location' does not exist on type '{ name: string; age: number; }'.ts(2339)"

//While sometimes that implies a trade-off in what you can express, the intent is to catch legitimate bugs in our programs. And TypeScript catches a lot of legitimate bugs.

//For example: typos,
export const announcement = "Hello World!";
 
// How quickly can you spot the typos?
announcement.toLocaleLowerCase();
// We probably meant to write this...
announcement.toLocaleLowerCase();
//uncalled functions,
function flipCoin() {
    // return Math.random < 0.5;
    // Meant to be Math.random()
    //correct one
    return Math.random()
  }
// or basic logic errors.
const value = Math.random() < 0.5 ? "a" : "b";
if (value !== "a") {
  // ...
} else if (value === "b") {
// This comparison appears to be unintentional because the types '"a"' and '"b"' have no overlap.
  // Oops, unreachable
}
// I need to ask more questions about this as its not clear yet to me