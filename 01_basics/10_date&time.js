// let myDate = new Date()
// console.log(myDate)
// console.log(myDate.toString())
// console.log(myDate.getTime())
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())
// let date = new Date(-1000);
// console.log(date)// one second before the epoch

// console.log(typeof myDate.getTime())


let newDate = new Date(2003,6,22)
console.log(newDate.toDateString())
console.log(newDate.toString())
let myCreatedDate = new Date("01-06-2023")
console.log(myCreatedDate.toLocaleString())


let instDate = new Date()
console.log(instDate)
console.log(instDate.getDay())
console.log(instDate.getMonth())
console.log(instDate.getSeconds())

instDate.toLocaleString('default' , {
    weekday: "long",
    month : "numeric"
})
console.log(instDate.toLocaleDateString())