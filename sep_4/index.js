/*
en 5 elementos distintos
manejar 3 eventos que, en consecuencia modifiquen algo en el DOM

crear 4 custom events y escucharlos
 */

(function(){
    //load dom
    console.log('Hola')

/* Change color function */
    function colores(event, color) {

        event.currentTarget.style.background = color;
        event.stopPropagation();
      };

/* Variables */
  
    const input = document.getElementById('myInput');

    const button = document.getElementById('myButton');

    const div2 = document.getElementById('div2');
    const div3 = document.getElementById('div3');
    const div4 = document.getElementById('div4');

/* Recolor divs */
    div2.addEventListener('click', (event) => {
        colores(event, 'lightslategrey');
    });
    div3.addEventListener('click', (event) =>{
      colores(event, 'grey');

    });
    div4.addEventListener('click', (event) =>{
      colores(event, 'lightgrey');
    });

    input.addEventListener('keypress', (event) => {
        div4.innerText = event.target.value;
    });
/* CustomEvents */
    button.addEventListener('click', () => {

        document.dispatchEvent( new CustomEvent('explodes') );
    });

    document.addEventListener('explodes', (event) => {

        event.target.body.background = './nuclear.jpg'; 
    });
    
  })();
  