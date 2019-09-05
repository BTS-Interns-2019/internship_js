(function(){
    console.log("hi");

    const myObjetito = {};

    const input = document.getElementById('myInput');
    const input2 = document.getElementById('myInput2');
    const div = document.getElementById('myDiv');
    const but = document.getElementById('myButton');

    input.addEventListener('input', sendToDiv);
    input2.addEventListener('input', sendToDiv);
    function sendToDiv(ev){
        console.log('sendToDiv', ev);
        div.innerText = ev.target.value;
    }

    but.addEventListener('click',()=>{
        alert(input.value);
        div.dispatchEvent(new CustomEvent('chingadazo'));
    });

    document.getElementById('div4').addEventListener('click', (ev)=>{
        ev.stopPropagation();
        console.log('click en el div 4', ev.target, ev.currentTarget);
    });

    document.getElementById('div2').addEventListener('click', (ev)=>{
        console.log('click en el div 2', ev.target, ev.currentTarget);
    });

    div.addEventListener('chingadazo', (ev)=>
    {
        console.log('Recibí un chingadazo', ev);
        div.style.background ='purple';
    });

    /*My modifications*/
    const buton = document.getElementById('but2');
    const btn_Confirm = _('btn_Confirm');
    const nosta = _("nosta");
    const disco = _('disco');
    const audio = _('audio');
    const songp = _('songp');
    const img = _('img');

    audio.addEventListener('play', (event) => {
        songp.textContent = "Disfruta la cancion";
        document.dispatchEvent(new CustomEvent('disco'));
        disco.dispatchEvent(new CustomEvent('moverse'));
    });
    audio.addEventListener('pause', (event) => {
        songp.textContent = "Pausa a la cancion";
        disco.dispatchEvent(new CustomEvent('peque'));
    });
    audio.addEventListener('volumechange', (event) => {
        songp.textContent = "Volumen";
    });

    document.addEventListener('disco', ()=>{
        disco.style.background= "red";
    });

    disco.addEventListener('peque',()=>{
        disco.style.width="200px";
        disco.style.height="200px";
    });
    disco.addEventListener('moverse',()=>{
        disco.style.width="400px";
        disco.style.height="400px";
    });

    area.addEventListener('select', (event)=>{
        const selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
        _('p').textContent = `Seleccionaste: ${selection}`;
    });

    document.addEventListener('keydown',()=>{
        disco.style.background= "fuchsia";
        img.dispatchEvent(new CustomEvent('mueve1'));
    });
    
    document.addEventListener('mueve1',()=>{
        img.setAttribute("src","b2.jpg");
    });
    document.addEventListener('mueve2',()=>{
        img.setAttribute("src","b1.jpg");
    });
    document.addEventListener('keypress', ()=>{
        disco.style.background= "red";
        img.dispatchEvent(new CustomEvent('mueve2'));
    });
    document.addEventListener('keyup', ()=>{
        disco.style.background= "chartreuse";
    });

    _('area').addEventListener('cut',()=>{
        _('p').innerText="cortaste texto";
    });
    _('area').addEventListener('copy',()=>{
        _('p').innerText="copiaste texto";
    });
    _('area').addEventListener('paste',()=>{
        _('p').innerText="pegaste texto";
    });

    _('slc_Num').addEventListener('change',(sl)=>{
        alert("Cambiaste el valor");
    });
    _('slc_Num').addEventListener('focus',(sl)=>{
        _('slc_Num').style.background = 'red';
    });
    _('slc_Num').addEventListener('blur',(sl)=>{
        _('slc_Num').style.background = 'white';
    });

    window.addEventListener('click', (event) => {
        console.log('click en la pagina');
    });

    window.addEventListener('load', (event) => {
        alert('Cargando pagina');
    });

    window.addEventListener("resize", function(){
        _("num").innerHTML = Math.random();
    });
    
    buton.addEventListener('click', ()=>{
        div.style.width = "5%";
    });
    
    buton.addEventListener('mouseleave',()=>{
        nosta.style.display = "none";
    });
    
    buton.addEventListener('mouseover', ()=>{
        nosta.style.display = "block";
    });
    
})();

function _(element){
    return document.getElementById(element);
}