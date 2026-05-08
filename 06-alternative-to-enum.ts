(() => {
    // Literal Types (Alternative to Enum)
    let userRole: 'admin' | 'guess' | 'teacher' | 'student' = 'admin'

    userRole = 'guess'
    // anotherUserRole = 'superadmin'

    function access(role: 'admin' | 'guess' | 'teacher' | 'student') {
        if (role === 'admin') {
            return 'Full access'
        } else if (role === 'guess') {
            return "Unauth"
        } else if (role == "test") {
            return "type error"
        }
    }
})