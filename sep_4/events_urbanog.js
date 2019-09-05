(function () {
  console.log('hi');

  const input = document.getElementById('myInput');
  const input2 = document.getElementById('myInput2');
  const div = document.getElementById('myDiv');
  const div6 = document.getElementById('div6');
  const btn = document.getElementById('myButton');
  const btn2 = document.getElementById('button2');
  const img = document.getElementById('rotate');
  const p = document.getElementById('text');
  const list = document.getElementById('myList');
  const section = document.getElementById('mySection');
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
    // Detecta solo las teclas que contagan minusculas
    if (/^[a-z]$/.exec(ev.key)) {
      ev.target.value = ev.target.value + ev.key;
    } else if (ev.key === 'Backspace') {
      ev.target.value = ev.target.value.substr(0, ev.target.value.length - 1);
    }
  });

  // input2.removeEventListener('input', sendToDiv)
  btn.addEventListener('click', () => {
    alert(input.value);
    const evento = new CustomEvent('chingadazo');
    evento.newColor = 'black';
    div.dispatchEvent(evento);
  });
  document.getElementById('div4').addEventListener('click', (ev) => {
    console.log('click en el div 4', ev.target, ev.currentTarget);
  });
  document.getElementById('div2').addEventListener('click', (ev) => {
    console.log('click en el div 2', ev.target, ev.currentTarget);
  });

  div.addEventListener('chingadazo', (ev) => {
    console.log('recibí un chingazo', ev);
    ev.target.style.background = ev.newColor;
  });
  // ------//////////////---------//
  div6.addEventListener('mouseover', (ev) => {
    ev.target.style.background = 'brown';
    ev.target.style.width = '500px';
  });
  div6.addEventListener('mouseleave', (ev) => {
    ev.target.style.background = 'gray';
  });
  const counter = 50;
  div6.addEventListener('click', (ev) => {
    div6.innerHTML = '<h2 class="cant-you-see-me">:|</h2>';
    ev.target.style.width = '100px';
  });

  img.addEventListener('mousedown', (ev) => {
    ev.target.style.border = 'solid black 2px';
  });

  img.addEventListener('mouseover', (ev) => {
    ev.target.style.boxShadow = '1px 2px 10px black';
  });
  img.addEventListener('mouseleave', (ev) => {
    ev.target.style.transform = 'rotate(90deg)';
  });

  p.addEventListener('mouseover', (ev) => {
    ev.target.style.letterSpacing = '14px';
  });
  p.addEventListener('mousedown', (ev) => {
    ev.target.contentEditable = 'true';
  });
  p.addEventListener('mouseleave', (ev) => {
    ev.target.style.textDecoration = 'underline';
    ev.target.style.letterSpacing = '0px';
  });

  list.addEventListener('mousedown', (ev) => {
    ev.target.innerHTML = `
        <li>item</li>
        <li>item</li>
        `;
  });
  list.addEventListener('mouseover', (evt) => {
    evt.target.style.textTransform = 'lowercase';
  });
  list.addEventListener('mouseleave', (evt) => {
    evt.target.style.listStyle = 'square';
  });
  list.addEventListener('mousedown', (evt) => {
    evt.target.style.textShadow = '1px 5px 10px black';
  });
  section.addEventListener('mousedown', (evt) => {
    evt.target.style.borderRadius = '10px';
  });
  section.addEventListener('mouseleave', (evt) => {
    evt.target.style.marginLeft = '100px';
  });
  section.addEventListener('mouseover', (evt) => {
    evt.target.style.width = '100px';
    evt.target.style.display = 'inline-block';
  });
  btn2.addEventListener('click', () => {
    console.log('Khe');
    const event = new CustomEvent('float');
    event.floatDirection = 'left';
    div6.dispatchEvent(event);
  });

  div6.addEventListener('float', (ev) => {
    ev.target.style.float = ev.floatDirection;
  });

  window.addEventListener('keydown', (evt) => {
    if (evt.key === 'q') {
      const event2 = new CustomEvent('biggerTxt');
      event2.size = '24px';
      p.dispatchEvent(event2);
    } else if (evt.key === 't') {
      const event3 = new CustomEvent('likeGlass');
      event3.transparency = '.5';
      div6.dispatchEvent(event3);
    } else if (evt.key === 'D') {
      const delEvt = new CustomEvent('deleteThis');
      delEvt.msg = '<h1 style="text-align: center">Your Body element is now clean</h1>';
      document.body.dispatchEvent(delEvt);
    }
  });

  p.addEventListener('biggerTxt', (ev) => {
    ev.target.style.fontSize = ev.size;
  });
  div6.addEventListener('likeGlass', (ev) => {
    ev.target.style.opacity = ev.transparency;
  });

  document.body.addEventListener('deleteThis', (ev) => {
    ev.target.innerHTML = ev.msg;
  });
}());
