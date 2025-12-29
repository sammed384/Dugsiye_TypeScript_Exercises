// ### 1. 🔁 Echo Function with Generics

function echo <T>(input : T): T{
    return input;
}

const myName= echo<string>("sam")
myName.toUpperCase();
const myNum= echo<number>(3)
myNum.toFixed(2);
const names= echo<string[]>(["Sam","Med"])
names.push("Ali");
const user1 = echo<{username: string, age: number}>({ username: "sam", age: 30})
user1.username.toUpperCase();
user1.age.toFixed(1)

// ### 2. 📦 Generic Interface

interface ApiResult<T>{
    status: string,
    data: T
}

const userApi: ApiResult<string>={
    status: "completed",
    data : "done",
}

const stringApi: ApiResult<{ id: number; name: string }>={
    status: "completed",
    data : {id: 2222, name: "Houmed" }
}

// ### 3. 🎯 First Element Function

function first<T>(items: T[]):T{
    return items[0]
}

const firstNum = first<number>([100,2000,3000])
const firstName = first<string>(["Sam","Med","Ali"])
const user2 = first([{username: "sam", age: 30}])