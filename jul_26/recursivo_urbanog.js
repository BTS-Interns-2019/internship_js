var x = {
    "name": "chicorita",
    "children": [{
        "name": "lv 2",
        "children": [{
            "name": "lv 3",
            "children": [{
                "name": "lv4",
                "children": [{
                    "name": "lv5",
                    "children": []
                }]
            }]
        }]
    },
        {
            "name": "x lv2",
            "children": [{"name": "xk l3", "children": []}]
        },
        {
            "name": "y lv2",
            "children": [{
                "name": "yb lv3",
                "children": []
            }]
        },
        {
            "name": "z lv2",
            "children": [{
                "name": "zv lv3",
                "children": []
            }]
        }]
}


console.log(archer(x))

function archer(obj) {
    let i = 0;

    console.log(obj.name)
    for (k of obj.children) {
        // console.log(obj.children.name);
        archer(k)
    }
}
