(function() {
    
    const primerElemento = document.getElementById('primero');
    const segundoElemento = document.getElementById('segundo');
    const tercerElemento = document.getElementById('tercero');
    const button = document.getElementById('myButton');
    const div = document.getElementById('myDiv');
    const input = document.getElementById('myInput');
    const input2 = document.getElementById('myInput2');

    // tres de li
    function changeLi(ev) {
        console.log('cambio primer elemento', ev)
        primerElemento.innerHTML = "Nuevo texto"
    }
    primerElemento.addEventListener('click', changeLi)
   
    function changeLiDos(ev) {
        console.log('cambio segundo elemento', ev)
    segundoElemento.innerHTML = "Nuevo texto dos"
    }
    segundoElemento.addEventListener('click', changeLiDos)

    function changeLiDos(ev) {
        console.log('cambio tercer elemento', ev)
    tercerElemento.innerHTML = "He cambiado"
    }
    tercerElemento.addEventListener('mouseover', changeLiDos)

    // tres de div
    function sendToDiv(ev) {
        console.log('div info', ev)
        div.innerText = ev.target.value;
    }

    input.addEventListener('input', sendToDiv)

    input2.addEventListener('input', sendToDiv)
    input2.addEventListener('input', () => {
        console.log('otro event')
    })
    input2.addEventListener('input', sendToDiv);

    // tres de table
    function stopEvent(ev) {
        c2 = document.getElementById("c2");
        c2.innerHTML = "hola";
        ev.stopPropagation();
        alert("La propagación del evento se ha parado.");
      }
        table = document.getElementById("tbl1");
        table.addEventListener("click", stopEvent, false);

    function changeTable(ev) {
        console.log('cambio tabla', ev)
    table.innerHTML = "He cambiado en table"
    }
    table.addEventListener('mouseover', changeTable)

    function changeTable2(ev) {
        console.log('cambio tabla', ev)
    table.innerHTML = 'He cambiado de nuevo en table'
    }
    table.addEventListener('mouseout', changeTable2)

    // tres de a
    function enElLink() {
      alert('Hola desde el link');
    }
    document.getElementById("my-link").onclick = enElLink;

    function changeLink(ev) {
        console.log('cambio link', ev)
    document.getElementById("my-link").innerHTML = 'http://google.com'
    }
    document.getElementById("my-link").addEventListener('mouseover', changeLink)

    function changeLinkAgain(ev) {
        console.log('cambio link', ev)
    document.getElementById("my-link").innerHTML = 'My link again'
    }
    document.getElementById("my-link").addEventListener('mouseout', changeLinkAgain)

    // tres de button
    function validar(e) {
        tecla = (document.all) ? e.keyCode : e.which;
        if (tecla==13) alert ('Has pulsado enter');
      }
      button.addEventListener('keypress', validar)

    function changeButton(ev) {
        console.log('cambio button', ev)
    button.innerHTML = 'Send'
    }
    button.addEventListener('mouseover', changeButton)

    function changeButton2(ev) {
        console.log('cambio button', ev)
    button.innerHTML = 'Not send'
    }
    button.addEventListener('mouseout', changeButton2)

    // custom events
    div.addEventListener('mouseover', () => {
        const evento = new CustomEvent('cambio dos');
        evento.newColor = 'fuchsia';
        div.dispatchEvent(evento);
    })

    div.addEventListener('cambio dos', (ev) => {
        console.log('cambié de color', ev);
        div.style.background = ev.newColor;
    })

    div.addEventListener('mouseout', () => {
        const evento = new CustomEvent('cambio aqua');
        evento.newColor = 'aqua';
        div.dispatchEvent(evento);
    })

    div.addEventListener('cambio aqua', (ev) => {
        console.log('cambié de color', ev);
        div.style.background = ev.newColor;
    })

    button.addEventListener('click', () => {
        const evento = new CustomEvent('cambio blue');
        evento.newColor = 'blue';
        div.dispatchEvent(evento);
    })

     div.addEventListener('cambio blue', (ev) => {
        console.log('cambié nuevamente', ev);
        div.style.background = ev.newColor;
    })

    div.addEventListener('click', () => {
        const evento = new CustomEvent('cambio red');
        evento.newColor = 'red';
        div.dispatchEvent(evento);
    })

     div.addEventListener('cambio red', (ev) => {
        console.log('cambié nuevamente', ev);
        div.style.background = ev.newColor;
    })
    
})();