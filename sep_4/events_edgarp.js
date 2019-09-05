(function () {
    console.log ("Hello");

    

    const input = document.getElementById('myInput');
    const input2 = document.getElementById('myInput2');
    const div = document.getElementById('myDiv');
    const button = document.getElementById('myButton');
    /*
    input.addEventListener('keypress', (ev) => {
        console.log(ev);
        div.innerText = ev.target.value;
    }); */

    function sendToDiv(ev) {
        console.log('sendToDiv', ev);
        div.innerText = ev.target.value;
    }

    input.addEventListener('input', sendToDiv);

    input2.addEventListener('input', sendToDiv);

    input2.addEventListener('input', sendToDiv)
    input2.addEventListener('keydown', (ev) => {
        ev.preventDefault();
        console.log('otro evento', ev);
        if (/^[a-z]$/.exec(ev.key)) {
            ev.target.value = ev.target.value + ev.key;
        } else if (ev.key === 'Backspace') {
            ev.target.value = ev.target.value.substr(0, ev.target.value.length-1);
        }
    })

    //input2.removeEventListener ('input', sendToDiv);

    button.addEventListener('click', ()=> {
        alert(input.value);

        const evento = new CustomEvent('golpe');
        evento.newColor = 'purple';
        div.dispatchEvent(evento);
    })

    document.getElementById('div4').addEventListener('click', (ev) => {
        ev.stopPropagation ();
        console.log('click en el div 4', ev.target, ev.currentTarget);
    });

    document.getElementById('div2').addEventListener('click', (ev) => {
        console.log('click en el div 2', ev.target, ev.currentTarget);
    });    

    div.addEventListener('golpe', (ev) => {
        console.log('golpe recibido', ev);
        div.style.background = ev.newColor;
    })

    //homework
        const event = document.getElementById ('event');
        event.addEventListener('click', function () {
            alert('has dado click correctamente'); 
            event.innerText = 'cambiamos de color';
            event.style.background = 'grey';
        }) 
        
        event.addEventListener('mouseover', (ev) => {
        ev.target.style.background = 'brown';
        ev.target.style.width = '200px';
         });

        event.addEventListener('mouseleave', (ev) => {
          ev.target.style.background = 'blue';
        });
        
        const div5 = document.getElementById ('div5');
        div5.addEventListener('dblclick', function () {
            alert('has dado click correctamente'); 
            div5.innerText = 'este cuadro es azul';
            div5.style.background = 'blue';
        })  

        div5.addEventListener('mouseover', (ev) => {
        ev.target.style.background = 'brown';
        ev.target.style.width = '200px';
         });

        div5.addEventListener('mouseleave', (ev) => {
          ev.target.style.background = 'blue';
        });

        div5.addEventListener('click', (ev) => {
        div5.innerHTML = '<h3>que tristeza</h3>';
        ev.target.style.width = '100px';
        });

        const input3 = document.getElementById('input3');
        const ar = document.getElementById('ar');
        
        function sendToar(ev) {
            console.log('sendToar', ev);
            ar.innerText = ev.target.value;
            div5.innerText = ev.target.value;
        }
        input3.addEventListener('input', sendToar);

        const field = document.getElementById('field');
        const down = document.getElementById('down');
        const press = document.getElementById('press');
        const up = document.getElementById('up');

        field.addEventListener('keydown', function(e) {
            down.innerText = e.keyCode;
        }, false)
    
        field.addEventListener('keypress', function(e) {
            press.innerText = e.keyCode;
        }, false)

        field.addEventListener('keyup', function(e) {
            up.innerText = e.keyCode;
        }, false)

        down.addEventListener('mouseover', (ev) => {
        ev.target.style.background = 'brown';
        ev.target.style.width = '200px';
         });

        down.addEventListener('mouseleave', (ev) => {
          ev.target.style.background = 'blue';
        });

        up.addEventListener('mouseover', (ev) => {
        ev.target.style.background = 'brown';
        ev.target.style.width = '200px';
         });

        up.addEventListener('mouseleave', (ev) => {
          ev.target.style.background = 'blue';
        });

        press.addEventListener('mouseover', (ev) => {
        ev.target.style.background = 'brown';
        ev.target.style.width = '200px';
         });

        press.addEventListener('mouseleave', (ev) => {
          ev.target.style.background = 'blue';
        }); 


        window.addEventListener('keypress', (eve) => {
        if (eve.key === 'f') {
         const event1 = new CustomEvent('bigText');
        event1.size = '24px';
        input3.dispatchEvent(event1);
         } else if (eve.key === 'v') {
         const event2 = new CustomEvent('transparent');
        event2.transparency = '.2';
        div5.dispatchEvent(event2);
         } else if (eve.key === 'a') {
             const event3 = new CustomEvent('message');
             alert ('se me acabaron las ideas').dispatch(event3);
         }
         else if (eve.key === 'H') {
        const delEvent = new CustomEvent('deleteThis');
        delEvent.msg = '<h1 style="text-align: center">Everithing is clean</h1>';
        document.body.dispatchEvent(delEvent);
             }
         });

            input3.addEventListener('bigText', (eve) => {
            eve.target.style.fontSize = eve.size;
            });
            div5.addEventListener('transparent', (eve) => {
            eve.target.style.opacity = eve.transparency;
             });

             event3.addEventListener('message');

             document.body.addEventListener('deleteThis', (eve) => {
              eve.target.innerHTML = eve.msg;
        });
       
})();