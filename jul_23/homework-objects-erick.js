const blankNotebook = {
    color: "blue",
    sheets: 50,
    style: "grid",
    size: "small"
}

const definedNotebook = {
    signature: "Finances",
    size: "Large",
    sheets: 500,
    style: "Badass!"
}

console.log("<---------Object.assign(targetObj, srcObj)------------>\n")

function objAssign(targetObj, srcObj){
  for(attrib in srcObj){
    targetObj[attrib] = srcObj[attrib]
  }
  return targetObj
}
console.log(objAssign(blankNotebook, definedNotebook));

console.log(Object.assign(blankNotebook, definedNotebook));

// console.log("<------------------------------------>")
// console.log("<---------Object.defineProperties(obj, properties)------------>\n")

// const property = {"power": {value: Infinity, writable: true, enumerable: false, configurable: true}};
// function defineProperties(obj, props){
//   for(attrib of objProps){
  
//   } 
//   return obj
// }
// console.log(defineProperties(blankNotebook, property))

// console.log(Object.defineProperties(blankNotebook, {"power": {value: Infinity , writable: true, enumerable: true, configurable: true }}))

console.log("<------------------------------------>\n")
console.log("<---------Object.values(obj)------------>\n")

function values(obj){
  let attribVal = []
  for(attrib in obj){
    attribVal.push(obj[attrib])
  } 
   return attribVal   
}
console.log(values(blankNotebook))

console.log(Object.values(blankNotebook))

console.log("<------------------------------------>\n")
console.log("<---------Object.entries------------>\n")

function entries(obj){
  let attribs = []
  for(attrib in obj){
    let arrIn = [attrib, obj[attrib]]
    attribs.push(arrIn)
  } 
   return attribs   
}
console.log(entries(blankNotebook))

console.log(Object.entries(blankNotebook))

console.log("<------------------------------------>\n")
console.log("<---------Object.is(obj)------------>\n")

const is = (obj, obj2) => obj === obj2 ? true : false;
console.log(is(blankNotebook, blankNotebook))
console.log(is(blankNotebook, definedNotebook))

console.log(Object.is(blankNotebook, blankNotebook))
console.log(Object.is(blankNotebook, definedNotebook))

console.log("<------------------------------------>\n")
console.log("<---------Object.keys(obj)------------>\n")

function keys(obj){
  let attribs = []
  for(attrib in obj){
    attribs.push(attrib)
  }
    return attribs
}
console.log(keys(blankNotebook))
console.log(Object.keys(blankNotebook))

console.log("<------------------------------------>\n")
console.log("<---------Object.fromEntries()------------>\n")
console.log("!!!!!!!!!!!!!!!!!!Does not work on VisualStudioCode!!!!!!!!!!!")
let entry = [
  ["location", "far away"],
  ["dificulty", 100],
  ["heigth", 5678]
];

// function fromEntries(mapObj){
//   const mapus = {}
//   for(let p = 0; p <= mapObj; p++){
//       let property = mapObj[p]
//     for(v = 1; v <= elem.length; v++){
//       mapus = mapObj[1]
//       console.log(mapus)
//     }
//   }
// }
// console.log(fromEntries(entry))



// const mapObj = Object.fromEntries(entry)
// console.log(mapObj)





