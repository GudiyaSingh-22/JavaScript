const user = {
    username : "Gudiya",
    price : 999,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`)
        console.log(this)
    }

} 
// user.welcomeMessage()
// user.username = "Govind"
// user.welcomeMessage()
// console.log(this)

// function chai(){
//     let username = "Gudiya"
//     console.log(this.username);
// }
// chai()

// function chaii(){
//     console.log(this);
    
// }
//chaii()

//const butter = function (){
   // let username = "Gudiya"
    //console.log(this.username);   
//}

// const butter = () => {
//     let username = "Gudiya"
//     console.log(this);
    
// }
//butter()

//Arrow Function

// const addTWo = (num1 , num2) =>{
// return num1 + num2
// }
// console.log(addTWo(3,5))

const addTWo = (num1 , num2) => num1 + num2
const name = (user1 , user2) => ({username: "Gudiya"})
console.log(name());
console.log(addTWo(3,5))