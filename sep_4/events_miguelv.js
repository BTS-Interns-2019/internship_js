(function(){
    console.log('hi');
    
    const input = document.getElementById('myInput');
    const input2 = document.getElementById('myInput2');
    const div = document.getElementById("myDiv");
    const button = document.getElementById("myButton");
    const text = document.getElementById("text");
    const lista = document.getElementById("lista");
    const screen = document.getElementById("screen");
    const inpt = document.getElementById("inpt");
    function sendToDiv(ev){
        console.log('sendToDiv',ev);
        div.innerText=ev.target.value;
    }
    input.addEventListener("input",sendToDiv)
    input2.addEventListener('input',sendToDiv)
    input2.addEventListener('keydown',(ev)=>{
        ev.preventDefault(); //Desactiva eventos de insertar contenido al div
        console.log('otro evento',ev)
        if(/^[a-z]$/.exec(ev.key)){
            ev.target.value = ev.target.value + ev.key
        }else if(ev.key === 'Backspace'){
            ev.target.value=ev.target.value.substr(0,ev.target.value.length-1);
        }
    })
    button.addEventListener('click',()=>{
        alert(input.value);

        const evento = new CustomEvent('chingadazo');
        evento.newColor = "purple";
        div.dispatchEvent(evento);
    })
    document.getElementById('div4').addEventListener('click',(ev)=>{
        ev.stopPropagation();
        console.log('click en el div 4', ev.target, ev.currentTarget);
    })
    document.getElementById('div2').addEventListener('click',(ev)=>{
        console.log('click en el div 2', ev.target, ev.currentTarget);
    })
    div.addEventListener('chingadazo',(ev)=>{
        console.log("Recibi un chingadazo", ev);
        div.style.background=ev.newColor;
    })
    text.addEventListener('mousedown',()=>{
        text.style.fontWeight="bold";
    })
    text.addEventListener('mouseup',()=>{
        text.style.fontStyle="italic";
    })
    text.addEventListener('dblclick',()=>{
        text.style.textDecoration="line-through";
    })
    lista.addEventListener('click',()=>{
        lista.style.border="1px solid blue";
    })
    lista.addEventListener('mouseover', ()=>{
        lista.classList.remove('blockitem');
        lista.classList.add('inlineitem');
    })
    lista.addEventListener('mouseout', ()=>{
        lista.classList.remove('inlineitem');
        lista.classList.add('blockitem');
    })
    screen.addEventListener("mousemove",(ev)=>{
        screen.classList.remove('hidden');
        screen.innerText=ev.screenX+","+ev.screenY;
    })
    screen.addEventListener("mouseleave",()=>{
        screen.classList.add('hidden');
    })
    screen.addEventListener("click",(ev)=>{
        inpt.value=ev.screenX+","+ev.screenY;
    })
    inpt.addEventListener("focus",()=>{
        inpt.style.background="white";
        inpt.style.color="black";
    })
    inpt.addEventListener("blur",()=>{
        inpt.style.background= "black";
        inpt.style.color= "lightgreen";
    })
    inpt.addEventListener("paste",()=>{
        inpt.style.background="yellow";
    })
})();