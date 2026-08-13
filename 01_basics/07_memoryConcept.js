let myName = "Gudiya"
let myAnotherName = myName
myAnotherName = "Gudiya Govind Mishra"
console.log(myName)
console.log(myAnotherName)
// here the value is stored in stack memory so there is change only in the copy of value not in original memory.

let user01 = {
    emailID : "gudiya@gmail.com"
}

let user02 = user01
user02.emailID = "gudiyaSingh@gmail.com"
console.log(user01)
console.log(user02)
// here the data type is object which is non primitive so it is stored in heap memory and it refers to original value and changes when changed at one place. 