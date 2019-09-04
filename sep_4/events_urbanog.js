(function () {
    console.log('hi')

    const input = document.getElementById('myInput');
    const input2 = document.getElementById('myInput2');
    const div = document.getElementById('myDiv');
    const div6 = document.getElementById('div6');
    const btn = document.getElementById('myButton');
    const img = document.getElementById('rotarte');
    // input.addEventListener('keypress', (ev) => {
    //     console.log(ev);
    //     div.innerText = ev.target.value;
    //     btn.addEventListener('click', () => {
    //         alert(input.value);
    //     });
    // })
    function sendToDiv(ev) {
        div.innerText = ev.target.value;
    }
    input.addEventListener('input', sendToDiv);
    input2.addEventListener('keydown', (ev) => {
        ev.preventDefault();
        console.log('otro evento', ev);
        //Detecta solo las teclas que contagan minusculas
        if (/^[a-z]$/.exec(ev.key)) {
            ev.target.value = ev.target.value + ev.key;
        }else if(ev.key === 'Backspace'){
            ev.target.value = ev.target.value.substr(0, ev.target.value.length-1);
        }
    });

    // input2.removeEventListener('input', sendToDiv)
    btn.addEventListener('click', () => {
                alert(input.value);
                const evento = new CustomEvent('chingadazo');
                evento.newColor= 'black'
                div.dispatchEvent(evento);
            });
          document.getElementById('div4').addEventListener('click', (ev) => {
              console.log('click en el div 4', ev.target, ev.currentTarget);
          });
          document.getElementById('div2').addEventListener('click', (ev) => {
              console.log('click en el div 2', ev.target, ev.currentTarget);
          });

          div.addEventListener('chingadazo', (ev)=> {
              console.log('recibí un chingazo', ev);
              ev.target.style.background = ev.newColor;
          })

          div6.addEventListener('mouseover', (ev) => {
              ev.target.style.background= 'brown';
              ev.target.style.width = '500px'
          })
          div6.addEventListener('mouseleave', (ev) => {
              ev.target.style.background= 'gray';
              
          })
          let counter = 50;
          div6.addEventListener('click', (ev) => {
            div6.innerHTML= '<h2 class="cant-you-see-me">:|</h2>';
            ev.target.style.width = '100px'
          });
})();