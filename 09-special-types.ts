// Special Type - null
let a: null;

a: [] = [] //works

a = null


let b: null | string

b = null
b = "Hi"
// b = 10

// Special Type - undefined
let c: undefined;
let uno: string;

c = uno // works with undefined but still have error because its use even

// c = null
// c = "Hi"

let d: undefined | string

d = undefined
d = "Hi"
d = [] // not works
// d = null
// d = 10
