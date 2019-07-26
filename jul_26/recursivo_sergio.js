const data = {"name": "chicorita","children": [{"name": "lv 2","children": [{"name": "lv 3","children": [{"name": "lv4","children": [{"name": "lv5","children": []}]}]}]},{"name": "x lv2","children": [{"name": "xk l3","children": []}]},{"name": "y lv2","children": [{"name": "yb lv3","children": []}]},{"name": "z lv2","children": [{"name": "zv lv3","children": []}]}]};
let niveles = [];

function funcionQuieHizoLuisJaJaJaJa(data) {
    niveles.push(data["name"]);
    for ( key of data["children"]) {
            funcionQuieHizoLuisJaJaJaJa(key);
    }
    
    return niveles;
}

console.log(funcionQuieHizoLuisJaJaJaJa(data));

funcionQuieHizoLuisJaJaJaJa(data)