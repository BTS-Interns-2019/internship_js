(function(){
    console.log('hi');

    const input = document.getElementById('myinput');
    const input2 = document.getElementById('myinput2');
    const div = document.getElementById('divnombre');
    const button = document.getElementById('mybutton');
    const btnhora = document.getElementById('btnhora');
    const btncolor = document.getElementById('btncolor');
    const btntamaño = document.getElementById('btntamaño');
    const changes = document.getElementById('changes');
    const alort = document.getElementById('alert');



    function sendToDiv(ev){ //funcion para enviar el texto de un input a un div
        console.log(ev)
        div.innerText = ev.target.value;
        console.log(ev.target, ev.currentTarget)
    }
    

    
    input.addEventListener('input',sendToDiv); //llamas la funcion que creamos 'sendToDiv' para los inputs
    input2.addEventListener('input',sendToDiv);

    input.addEventListener('dblclick',()=>{
        div.innerText = 'correo@gmail.com';
    })

    input2.addEventListener('wheel',()=>{
        div.innerText = 'No copie morro';
    })


    // button.addEventListener('click',() => {
    //     // alert(input.value);
    //     // div.dispatchEvent(new CustomEvent('chingadazo'));
    //     const evento = new CustomEvent('chingadazo');
    //     evento.newColor='blue';
    //     div.dispatchEvent(evento);

    // });



    div.addEventListener('cambio',(ev)=>{
    console.log('el objeto cambió de color' + e);
    ev.target.style.background='teal';
})




let cambio4 = 1 , cambio3 = 1, cambio2 = 1 ;
document.getElementById('div4').addEventListener('click',(ev)=>{
    cambio4++; 
    if(cambio4 > 3){
        div4.innerText = "ajalas";
        cambio4 = 0;
    }   
});

document.getElementById('div3').addEventListener('click',(ev)=>{
    cambio3++; 
    if(cambio3 > 3){
        div4.innerText = "bistec";
        cambio3 = 0;
    }   
});

document.getElementById('div2').addEventListener('click',(ev)=>{
    cambio2++; 
    if(cambio2 > 3){
        div4.style.height = '200px';
        changes.style.width = '200px';
    }   
});


document.getElementById('div4').addEventListener('click',(ev)=>{
    ev.stopPropagation();
    div4.style.background = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
    console.log('click en el div 4', ev.target, ev.currentTarget);
});

document.getElementById('div2').addEventListener('click',(ev)=>{
    ev.stopPropagation();
    div2.style.background = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
    console.log('click en el div 2', ev.target, ev.currentTarget);
});

document.getElementById('div3').addEventListener('click',(ev)=>{
    ev.stopPropagation();
    div3.style.background = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
    console.log('click en el div 3', ev.target, ev.currentTarget);
});





// 
btnhora.addEventListener('click',()=>{
    changes.innerText = Date(Date.now());
})


btncolor.addEventListener('click',()=>{
    changes.style.background='red';
})

btntamaño.addEventListener('click',()=>{
    changes.style.height = '100px';
    changes.style.width = '100px';
})

let alerta =0;
alort.addEventListener('click',()=>{
    alerta++;
    alort.innerText = 'Te dije que no lo presiones'
})

alort.addEventListener('mouseover',()=>{
if(alerta > 1){
alert('no lo presiones')
}
})

document.getElementById('over').addEventListener('mouseover', ()=>{
    over.style.background='teal';

})
document.getElementById('over').addEventListener('mouseout', ()=>{
    over.style.background='#bff';
})

document.getElementById('over').addEventListener('wheel', ()=>{
    over.innerText = 'OUT'
})




// document.getElementById('over').addEventListener('click',(e) => {
//     // alert(input.value);
//     // div.dispatchEvent(new CustomEvent('chingadazo'));
//     const evento = new CustomEvent('cambio');
//     div.dispatchEvent(evento);
// console.log('hola'+ e)
// });


})();