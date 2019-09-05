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
    const img = document.getElementById("img");
    const custom1 = document.getElementById("custom1");
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
    /* First 3 events */
    text.addEventListener('mousedown',()=>{
        text.style.fontWeight="bold";
    })
    text.addEventListener('mouseup',()=>{
        text.style.fontStyle="italic";
        text.style.fontWeight="normal";
    })
    text.addEventListener('dblclick',()=>{
        text.style.textDecoration="line-through";
    })
    /* Second 3 events */
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
    /* Third 3 events */
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
    /* Fouth 3 events */
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
    /* Fifth 3 events */
    img.addEventListener("mouseover",()=>{
        img.style.opacity = "0.2";
    })
    img.addEventListener("mouseleave",()=>{
        img.style.opacity = "1";
        img.style.borderRadius="50%";
    })
    img.addEventListener("mousedown",()=>{
        img.style.filter="blur(4px)";
    })
    /* Custom events */
    text.addEventListener('engrandeceme',()=>{
        text.style.fontSize="5em";
    })
    lista.addEventListener('subrayar-lista',()=>{
        lista.classList.add('underlined')
    })
    inpt.addEventListener('nueva-fuente',(ev)=>{
        inpt.style.fontFamily=ev.newFont;
    })
    screen.addEventListener('sombra',(color)=>{
        alert("SOMBRA!!!");
        screen.style.boxShadow="10px 10px "+color.newColor;
    })
    /* Custom handlers */
    custom1.addEventListener("click",()=>{
        const evento = new CustomEvent('engrandeceme');
        text.dispatchEvent(evento);
    })
    lista.addEventListener('dblclick',()=>{
        const evento = new CustomEvent('subrayar-lista');
        lista.dispatchEvent(evento);
    })
    inpt.addEventListener("dblclick",()=>{
        const evento = new CustomEvent('nueva-fuente');
        evento.newFont="sans";
        inpt.dispatchEvent(evento);
    })
    screen.addEventListener("dblclick",()=>{
        const evento = new CustomEvent('sombra');
        evento.newColor="gray";
        screen.dispatchEvent(evento);
    })
})();