// console.log("Hello World!")

let userName: string = "Gavin";
let userAge: string | number = 20;

// ...

userAge = "20"

console.log(`Username - ${userName}`)
console.log(`Age - ${userAge}`)

function add(a: number, b: number): number {
    return a + b
}

add(10, 12)
// add('10')
add(10, 10)
// add(10, '6')