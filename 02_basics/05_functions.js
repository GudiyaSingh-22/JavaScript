function sayMyName(){
    console.log("G")
    console.log("U")
    console.log("D")
    console.log("I")
    console.log("Y")
    console.log("A")
}
//sayMyName()

//function addTwoNumbers(no1 , no2){
   //console.log(no1 + no2);
    
//}
addTwoNumbers(3,5)
addTwoNumbers(3,"4")
addTwoNumbers(3,"a")
addTwoNumbers(3, null)

function addTwoNumbers(no1 , no2){
    //let result = no1 + no2
    //return result
    return no1 + no2
}
const result = addTwoNumbers(3,5)
//console.log("Result:" , result)

function loginUserMessage(username = "Gudiya"){
    if (username === undefined) {
        console.log("Please enter a valid username");
        return;
    }
    return `${username} just logged in`;
}
//console.log(loginUserMessage("Gudiya"));
console.log(loginUserMessage());

