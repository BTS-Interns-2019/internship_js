var map = document.getElementsByTagName("td");
var start = document.getElementById("start");
var stop = document.getElementById("stop");

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
    setInterval(()=>{
        for(let i=0; i<200000;i++){
            findNeighbors(map[i].id);
        }
    },parseInt(document.getElementById("int").value));
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
        console.log("Muere");
    }else if(livingOnes.length<4 && livingOnes.length>1){
        console.log("Sobrevive");
    }else{
        console.log("Muere y reproduce");
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