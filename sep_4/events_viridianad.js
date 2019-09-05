(function() {
  console.log('hi');

  const input = document.getElementById('myInput');
  const input2 = document.getElementById('myInput2');
  const div = document.getElementById('myDiv');
  const button = document.getElementById('myButton');
  const myText = document.getElementById('myText');
  const link = document.getElementById('link');
  const myList = document.getElementById('myList');

  function sentToDiv(ev) {
    console.log('sendToDiv', ev);
    div.innerText = ev.target.value;
  }
  input.addEventListener('input', sentToDiv);
  input2.addEventListener('input', sentToDiv);
  input2.addEventListener('input', () => {
    input2.addEventListener('keydown', ev => {
      ev.preventDefault();
      console.log('otro evento', ev);
      if (/^[a-z]$/.exec(ev.key)) {
        ev.target.value = ev.target.value + ev.key;
      } else if (ev.key === 'Backspace') {
        ev.target.value = ev.target.value.substr(0, ev.target.value.length - 1);
      }
    });
    button.addEventListener('click', () => {
      alert(input.value);

      const evento = new CustomEvent('chingadazo');
      evento.newColor = 'purple';
      div.dispatchEvent(evento);
    });
    document.getElementById('div4').addEventListener('click', ev => {
      ev.stopPropagation();
      console.log('click en el div 4', ev.target, ev.currentTarget);
    });
    document.getElementById('div2').addEventListener('click', ev => {
      console.log('click en el div 2', ev.target, ev.currentTarget);
    });
    div.addEventListener('chingadazo', ev => {
      console.log('Recibi un chingadazo', ev);
      div.style.background = ev.newColor;
    });

    //text
    myText.addEventListener('mouseover', e => {
      myText.style.border = '1px solid blue';
    });

    myText.addEventListener('mouseenter', e => {
      myText.style.border = '5px dotted orange';
    });

    myText.addEventListener('mouseleave', e => {
      myList.style.border = '1px solid #333';
    });
    //a
    function mylink() {
      console.log('pesionaste el link');
    }
    document.getElementById('link').onclick = mylink;
  });
  //list

  myList.addEventListener('mouseleave', e => {
    myList.style.border = '1px solid #333';
  });
  myList.addEventListener('click', function() {
    myList.style.background = 'lightblue';
  });
  
})();
