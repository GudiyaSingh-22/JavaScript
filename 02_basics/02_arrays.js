 const marvel_heroes = ["thor" , "Ironman" , "spiderman"]
 const dc_heroes = ["superman" , "flash" , "batman"]


 //console.log(marvel_heroes.push(dc_heroes))
  //console.log(marvel_heroes)
 

//marvel_heroes.push(dc_heroes)
 //console.log(marvel_heroes)

 //marvel_heroes.concat(dc_heroes)
 //console.log(marvel_heroes);
// console.log(marvel_heroes.concat(dc_heroes))


//const all_newHeroes = [...marvel_heroes , ...dc_heroes]
//console.log(all_newHeroes)


//const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
//const real_another_array = another_array.flat(Infinity)
//console.log(real_another_array)


console.log(Array.isArray("Govind"))
console.log(Array.from("Gudiya"))


console.log(Array.from({name:"Gudiya"}))//it returns empty array as it is not specifically defined to whom convert into array either key avlue or pair

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3))


//{ important edge case for push....it returns the length of the array instead of pushing the array
    //const arr = []
//console.log(arr.push(10))}
