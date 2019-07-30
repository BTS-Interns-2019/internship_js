var foo = function bar(x){
    if(x==20){
        return "hi";
    }
    console.log(x)
    return foo(++x);
}
//
/*var x = {
    name: "chicorita",
    children:[
        {
            name: "chicorita",
            children:[
                
            ]
        }
    ],
    {
        name: "chicorita",
        children:[
            {
                name: "chicorita",
                children:[
                    
                ]
            },{
                name: "chicorita",
                children:[
                    
                ]
            }
        ]
    }
}//*/
function adelanteatras(i){
    console.log("Begin " + i);
    if(i<0)
        return;
        adelanteatras(i-1);
    console.log("end: " + i);
}
