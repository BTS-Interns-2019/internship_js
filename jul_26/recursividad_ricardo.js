// obj = {
//     name: "chicorita",
//     children: [
//         {
//             name: "lv 2",
//             children: [
//                 {
//                     name: "lv 3",
//                     children: [
//                         {
//                             name: "lv4",
//                             children: [
//                                 {
//                                     name: "lv5",
//                                     children: [

//                                     ]
//                                 }
//                             ]
//                         }
//                     ]
//                 }
//             ]
//         },
//         {
//             name: "x lv2",
//             children: [
//                 {
//                     name: "xk l3",
//                     children: [

//                     ]
//                 }
//             ]
//         },
//         {
//             name: "y lv2",
//             children: [
//                 {
//                     name: "yb lv3",
//                     children: [

//                     ]
//                 }
//             ]
//         },
//         {
//             name: "z lv2",
//             children: [
//                 {
//                     name: "zv lv3",
//                     children: [

//                     ]
//                 }
//             ]
//         }
//     ]
// }


// function foo(i){
//     console.log("Nombre :" + obj.name);
//     if(obj.name != []){
//         for(i of obj){
//             foo(i);
//         }
//     }
// }

// foo()



function outside(x) {
    function inside(y) {
      return x + y;
    }
    return inside;
  }
  fn_inside = outside(3); // Think of it like: give me a function that adds 3 to whatever you give
                          // it
  result = fn_inside(5); // returns 8
  
  result1 = outside(3)(5); // returns 8