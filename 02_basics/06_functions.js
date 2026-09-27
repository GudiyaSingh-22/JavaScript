function calculateCartPrice(...num1){
    return num1
}

console.log(calculateCartPrice(100,200,300))

const user = {
    username: "Gudiya",
    price: 100
}
 function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
 }
//handleObject(user)
 handleObject({
    username: "Govind",
    price: 50
 })

 const myNewArray = [20,30,40,50]

 function returnSecondValue(getArray){
    return getArray[1]
 }
 //console.log(returnSecondValue(myNewArray));
 console.log(returnSecondValue([20,30,40,50]));
 
 