// ### 1. 🔧 Define and Use an Interface

interface User {
    username: string,
    password: string
}

function login(user: User): void {
    console.log(`User ${user.username} logged in`);
}

login({
    username: "med",
    password: "987654321"
});



// 2. ❓ Use Optional Properties

interface User {
    username: string,
    password: string,
    email?: string
}
function login1(user: User): void {
    console.log(`User ${user.username} logged in`);
}

// Without email
login1({
    username: "med",
    password: "987654321"
});

// With email
login1({
    username: "ali",
    password: "123",
    email: "sammed@gmail.com"
});

// 3. 🔐 Readonly in Action

interface User {
    readonly id: number,
    username: string,
    password: string,
    email?: string
}

const user: User = {
    id: 1,
    username: "sam",
    password: "12345678"
};

user.id = 2;