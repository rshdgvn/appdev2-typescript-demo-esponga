let hobbies = ["Eating", "Watching"]

// hobbies.push(10)

// let userList: (string | number)[];
let userList: Array<string | number>;

userList = ["Rasheed", "Rasheed31", 123456]

// console.log(userList)

let user: {
    name: string;
    age: number;
    hobbies: Array<string>,
    role: {
        description: string,
        id: number
    }
} = {
    name: "Rasheed",
    age: 31,
    hobbies: ["Eating", "Sleeping"],
    role: {
        description: 'user',
        id: 2
    }
}

// Must not null or undefined
let val: {} = "Rasheed Gavin"

// Flexible Object - Record Type
let data: Record<string, number | string>

data = {
    1: 1,
    name: 'Rasheed'
    student: true
}