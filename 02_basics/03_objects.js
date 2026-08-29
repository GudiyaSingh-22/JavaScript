const mySym = Symbol("Key1")
const jsUser = {
    name : "Gudiya",
    "full name" : "Gudiya Singh",
    [mySym] : "myKey1",
    age : 18,
    location : "Jaunpur",
    email : "gudiya@google.com",
    loggedIn : true,
    lastLoginDays : ["Monday","Saturday"]
}

console.log(jsUser.email)
console.log(jsUser["email"])
console.log(jsUser["full name"])
console.log(jsUser.mySym)
console.log(jsUser[mySym])

jsUser.email = "gudiya@microsoft.com"
//console.log(jsUser.email)

//Object.freeze(jsUser)
jsUser.email = "gudiya@chatgpt.com"
//console.log(jsUser)

jsUser.greeting = function(){
    console.log("Hello JS User")
}
jsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this["full name"]}`);
}
console.log(jsUser.greeting())
console.log(jsUser.greetingTwo())
