/*function outside (x){
    var gatito = "gatito";
    function inside (y){
        var deep = "ocean";
        console.log (gatito,deep);
        return inside;
    }
   // return inside;
}

var foo = function bar (x){
    if (x == 10){
        return "hola";
    }
    console.log (x)
    return foo(++x);
}
/*
foo (1);
*/
let foo = { name: "chicorita",
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
                                     children: []
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
                    name: "xk lv3",
                    children: []
                }
            ]
        },
        {
            name: "y lv2",
            children: [
                {
                    name: "yb lv3",
                    children: []
                }
            ]
        },
        {
            name: "z lv2",
            children: [
                {
                    name: "zv lv3",
                    children: []
                }
            ]
        }
    ]
};

recorre (foo);
function recorre (foo){
    console.log (foo.name);
    if (isArray = foo.children){
        for (inp of foo.children){
            recorre (inp);
        }
    }
        
}

function recurr (arr){
    if(Array.isArray(arr)){
        for (let i = 0; 1 < arr.length; i++){
            console.log(arr[i].name)
        }
        for (let i = 0; i < arr.length; i++){
            recur(arr[i].children)
        }
    }
}

/*
function foo(i){
    console.log('begin' + i);
    if (i < 0)
    return;
    foo ( i - 1);
    console.log('end:' + i);
}

foo (3);


function hi(){
    var x=5;
    return functio (p){
         x+=p;
    }
}*/