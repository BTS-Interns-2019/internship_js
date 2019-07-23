// 3 ejercicios try catch que incluyan switch, while, function, for, return, typeof

//ex. 3
class Bug {
    constructor(bite, name,){
        this.bite = bite,
        this.name = name
    }
}

let spider = new Bug(true, "Spider")
let butterfly = new Bug(false, "Butterfly")
let worm = new Bug(false, "Wormy")


// function dangerAlert(str){
//     let danger = str+"!!"
//     for(let i = 0; i <= str.length; i++){
//      danger += " Its dangerous!!!"
//     }
//     return danger
// }


// function buggies(bug){
//     if(bug.bite !== true){
//         return "Yay!"
//     }
//     else { 
//         throw bug.name
//     }
// }

// try{
//     let bug = spider
//     buggies(bug)
// }
// catch(itdoes){   
//     console.log(dangerAlert(itdoes))
// }


//ex.2
// const basketCase = ["apple","pinneapple", "banana", "lemon", "orange", "peach", "pear"]

// function imHungry(input, food){
//     while(input === true){
//         for(let i = 0; i <= food.length-1; i++){
//             console.log("eat " + food[i]) 
//         }
//     }
// }
// console.log(imHungry(true, basketCase))

//ex. 3


switch(2){
    case 1:
        console.log("Cerrado")
    break;
    case 2:
        console.log("Abierto")
    break;
    case 3:
        console.log("Cerrad")
    break;
    default:
        console.log("Cerrado")
    break;
}
