obj = {
    name: "chicorita",
    children: [
        {
            name: "lv 2",
            children: [
                {
                    name: "lv 3",
                    children: [
                        {
                            name: "lv4",
                            children: [
                                {
                                    name: "lv5",
                                    children: [

                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            name: "x lv2",
            children: [
                {
                    name: "xk l3",
                    children: [

                    ]
                }
            ]
        },
        {
            name: "y lv2",
            children: [
                {
                    name: "yb lv3",
                    children: [

                    ]
                }
            ]
        },
        {
            name: "z lv2",
            children: [
                {
                    name: "zv lv3",
                    children: [

                    ]
                }
            ]
        }
    ]
}


// function foo(i){
//     console.log("Nombre :" + obj.name);
//     if(obj.name != []){
//         for(i of obj){
//             foo(i);
//         }
//     }
// }

// foo()

function outside(obj){

  console.log(obj.name);
  if(Array.isArray(obj.children)){

  obj.children.forEach(foo => {outside(foo)});

  }
}


outside(obj);