/*
en 5 elementos distintos
manejar 3 eventos que, en consecuencia modifiquen algo en el DOM

crear 4 custom events y escucharlos

*/ 
(function(){
    console.log("hi")
    const input = document.getElementById("myInput");
    const input2 = document.getElementById("myInput2");
    const div = document.getElementById('myDiv');
    const button = document.getElementById('myButton');
    const div2 = document.getElementById('div2');
    const div3 = document.getElementById('div3');
    const div4 = document.getElementById('div4');

    function sendToDiv(ev){
        div.innerText = ev.target.value;
    }
    input.addEventListener('input', sendToDiv)
    input2.addEventListener('input', sendToDiv)
    button.addEventListener('click',()=>{
        div.dispatchEvent(new CustomEvent('chingadazo'));
    })

    div.addEventListener('chingadazo',(ev)=>{
        console.log('recibi un chingadazo',ev)
        ev.target.style.background = 'purple';
    })

    function colorDiv(ev){
        div4.style.background = 'cyan';
    }

    function otroColor(ev){
        div3.style.background = 'red';
    }
    div2.addEventListener('click',colorDiv);
    div4.addEventListener('click',otroColor);

    div2.addEventListener('custom',(ev)=>{
        ev.target.style.background = 'gray';
    })
    div.addEventListener('click',(ev)=>{
        div2.dispatchEvent(new CustomEvent('custom'));
    })
    div.addEventListener('otroCustom',(ev)=>{
        ev.target.style.background = 'red';
    })
    div3.addEventListener('click',(ev)=>{
        div.dispatchEvent(new CustomEvent('otroCustom'))
    })
    div2.addEventListener('ootroCustom',(ev)=>{
        ev.target.style.background = 'green';
    })
    input2.addEventListener('input',(ev)=>{
        div2.dispatchEvent(new CustomEvent('ootroCustom'))
    })
   
})();