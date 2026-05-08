(() => {
    // Type Aliases or Custom Types
    // use `type` keyword to create custom type
    type Role = 'admin' | 'guess' | 'teacher' | 'student'

    // Complex Object Type Definition
    type User = {
        name: string;
        age: number;
        role: Role; // you can use as well the Role type in Object type
        permission: string[];
    }

    let userRole: Role = 'admin'

    const rshdgvn: User = {
        name: 'Gavin',
        age: 20,
        role: 'admin',
        permission: ['read', 'write']
    }

    function access(role: Role) {
        if (role === 'admin') {
            return "Access granted heres your flag: CVDR{MEOW}"
        }

        return "No flag for you"
    }

    console.log(access(rshdgvn.role))
})