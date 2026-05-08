(() => {

    // Function Return Value Types
    function add(a: number, b: number): number { // you can omit the function type since typescript can infers it
        const sum =  a + b

        return sum.toString() // type error only number can be returned
    }

    add(6, 7)
    // add("5", 10)

    // Special Type `void` - return nothing
    // Function doesn't return a meaningful value, but it does finish
    function log(message: string | number): void {
        console.log(message)

    }

    log(67)

    // Another Special Type `never`
    // Function never finishes normally (throws error, infinite loop)
    function logAndThrow(errorMessage: string): never {
        console.log(errorMessage)
        return "Try" // function error
        throw new Error(errorMessage)
    }

    logAndThrow("This is an error")

    // Function as Types
    // Useful for callback functions
    // () => {} is not same as () => void
    // () => {} - arrow function
    // () => void - function type
    function performJob(canbeany: (m: string) => void) {  // you can also use cb: Function but () => void is the best practice
        canbeany('Job Done!')
    }

    function notBestPractice(cb: Function) {
        cb('This is not best practice')
    }


    let logMsg = (msg: string): void => {
        console.log(msg)
    }


    logMsg('Hello from callback function')

    performJob(logMsg)

    // Useful for objects and methods
    type User = {
        name: string;
        age: number;
        greet: () => string;

    }

    const user: User = {
        name: "rshdgvn",
        age: 20,
        greet() {
            console.log(`Hello, ${this.name}`)
            return this.name
        }
    }

    user.greet()
})