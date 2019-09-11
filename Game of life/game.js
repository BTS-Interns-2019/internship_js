var map = document.getElementsByTagName("td");
var start = document.getElementById("start");
var stop = document.getElementById("stop");
var interval;

for (let i=0; i<200000;i++){
    map[i].addEventListener("click",(ev)=>{
        const current = ""+ev.target.id;
        const sel = document.getElementById(current);
        sel.style.backgroundColor="yellow";
        console.log(ev.target.id);
    })
    //findNeighbors(map[i].id);
}

start.addEventListener("click",()=>{
    interval=setInterval(()=>{
        for(let i=0; i<200000;i++){
            findNeighbors(map[i].id);
        }
    },parseInt(document.getElementById("int").value));
})

stop.addEventListener("click",()=>{
    clearInterval(interval);
})

function findNeighbors(position){
    let pos = parseInt(position.substring(4,position.length));
    console.log(pos);
    let neighbors = [
        "cell"+(pos - 501),
        "cell"+(pos - 500),
        "cell"+(pos - 499),
        "cell"+(pos - 1),
        "cell"+(pos + 1),
        "cell"+(pos + 499),
        "cell"+(pos + 500),
        "cell"+(pos + 501)
    ];
    let validOnes=neighbors.filter((cv)=>{
        console.log(cv);
        return document.getElementById(cv);
    });
    console.log(validOnes);
    let livingOnes = validOnes.filter((cv)=>{
        return livingNeighbor(cv);
    });
    console.log(livingOnes);
    if(livingOnes.length<2){
        //console.log("Muere");
        die(position);
    }else if(livingOnes.length<4 && livingOnes.length>1){
        //console.log("Sobrevive");
    }else{
        //console.log("Muere y reproduce");
        move(position,neighbors);
    }
}

function livingNeighbor(position){
    let current = document.getElementById(position);
    let color = window.getComputedStyle(current,null).getPropertyValue('background-color');
    console.log(color);
    if(color!=="rgb(0, 0, 0)"){
        return position;
    }
}

function die(position){
    const sel = document.getElementById(position);
    sel.style.backgroundColor="rgb(0, 0, 0)";
}

function move(position, neighbors){
    for(let i=0;i<neighbors.length;i++){
        let neighborhood=[];
        let pos = parseInt(position.substring(4,position.length));
        let nep = parseInt(neighbors[i].substring(4,position.length));
        if(pos>nep){
            if((pos-1)===nep){
                //vecino esta a su izquierda
                neighborhood.push("left");
            }else if((pos-500)===nep){
                //vecino esta arriba
                neighborhood.push("top");
            }else if((pos-499)===nep){
                //vecino esta en la parte superior derecha
                neighborhood.push("topright");
            }else{
                //vecino esta en la parte superior izquierda
                neighborhood.push("topleft");
            }
        }else if(pos<nep){
            if((pos+1)===nep){
                //vecino esta a su derecha
                neighborhood.push("right");
            }else if((pos+500)===nep){
                //vecino esta abajo
                neighborhood.push("bottom");
            }else if((pos+499)===nep){
                //vecino esta en la parte inferior izquierda
                neighborhood.push("bottomleft");
            }else{
                //vecino esta en la parte inferior derecha}
                neighborhood.push("bottomright");
            }
        }
        //Validar posicion de desplazamiento
        if(neighbors==4){
            let cross = neighborhood.map((cv)=>{
                if(cv==="top"){
                    return true;
                }else if(cv==="bottom"){
                    return true;
                }else if(cv==="right"){
                    return true;
                }else if(cv==="left"){
                    return true;
                }else{
                    return false;
                }
            })
        }
        if(cross[0]&&cross[1]&&cross[2]&&cross[3]){
            const sel = document.getElementById(position);
            const ne1 = document.getElementById("cell"+(pos-499));
            const ne2 = document.getElementById("cell"+(pos-501));
            const ne3 = document.getElementById("cell"+(pos+499));
            const ne4 = document.getElementById("cell"+(pos+501));
            sel.style.backgroundColor="rgb(0, 0, 0)";
            ne1.style.backgroundColor="yellow";
            ne2.style.backgroundColor="yellow";
            ne3.style.backgroundColor="yellow";
            ne4.style.backgroundColor="yellow";            
        }
    }
}