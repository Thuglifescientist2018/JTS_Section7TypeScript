let somefunc = ():void => {
console.log("something")

}
somefunc()

let somefunc2 = ():never => {
    throw new Array(2);
}