//const tinderUser = new object()
const tinderUser = {}

tinderUser.id = "1234abcd"
tinderUser.name = "simply_gud"
tinderUser.IsLoggedIn = false
//console.log(tinderUser)

const regularUser = {
    fullname:{
        userfullname :{
            firstname: "Gudiya",
            lastname:"Govind Mishra"
        }
    }
}
//console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c", 4:"d"}
const obj3 = {4:"e", 5:"f"}

const obj4 = {obj1,obj2,obj3}
//console.log(obj4);

//const obj5 = Object.assign({},obj1,obj2,obj3)
const obj5 = {...obj1,...obj2,...obj3}
//console.log(obj5);


const users = [
    {
        id1: "123ac",
        name : "abc"
    },
    {
        id1: "567",
        name : "def"
    },
    {
        id1: "189ac",
        name : "ghi"
    },
    {
        id1: "1112ac",
        name : "abc"
    },
    {
        id1: "1123ac",
        name : "jkl"
    }
]

//user[1].email
// console.log(tinderUser)
// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))
// console.log(Object.hasOwnProperty("isLoggedIn"));


const course = {
    course_name : "Js in hindi",
    course_price : "1400",
    courseReader : "Gudiya"
}
//console.log(course.courseReader);
const {courseReader : A} = course
console.log(A);

[
    {},
    {},
    {}

]


