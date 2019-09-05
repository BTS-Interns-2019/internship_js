(function () {
  // Ejemplos
  console.log('hi');

  const input = document.getElementById('myInput');
  const div = document.getElementById('myDiv');
  const button = document.getElementById('myButton');

  function sendToDiv(ev) {
    console.log('sendToDiv', ev);
    div.innerText = ev.target.value;
  }

  input.addEventListener('input', sendToDiv);

  input2.addEventListener('input', sendToDiv);
  input2.addEventListener('keydown', (ev) => {
    ev.preventDefault();
    console.log('otro event');
    if(/^[a-z]$/.exec(ev.key)) {
      ev.target.value = ev.target.value + ev.key;
    } else if(ev.key === 'Backspace'){
      ev.target.value =
        ev.target.value.substr(0, ev.target.value.length-1);
    }
  });

  //input2.removeEventListener('input', sendToDiv);

  button.addEventListener('click', () => {
    alert(input.value);
    
    const evento = new CustomEvent('chingadazo');
    evento.newColor = 'purple';
    div.dispatchEvent(evento);
  });

  document.getElementById('div4').addEventListener('click', (ev) => {
    console.log('click en el div 4', ev.target, ev.currentTarget);
  });

  document.getElementById('div2').addEventListener('click', (ev) => {
    console.log('click en el div 2', ev.target, ev.currentTarget);
  });

  div.addEventListener('chingadazo', (ev) => {
    console.log('recibi un chingadazo', ev);
    div.style.background = ev.newColor;
  });

  // -------------------------------- Eventos Propios -----------------------------------------------------

  const newInput = document.getElementById('newInput');
  const newButton = document.getElementById('newButton');
  const asideDiv = document.getElementById('asideDiv');
  const list = document.getElementById('list');
  const aside = document.getElementById('asideDiv');
  const sendTable = document.getElementById('sendTable');
  const table = document.getElementById('newTable');
  const main = document.getElementById('newDiv');

  const name = document.getElementById('nameInput');
  const last = document.getElementById('lastNameInput');
  const age = document.getElementById('ageInput');

  newInput.addEventListener('keydown', (ev) => {
    ev.preventDefault();
    if(/^[a-z]$/.exec(ev.key)) {
      ev.target.value = ev.target.value + ev.key;
    } else if(ev.key === 'Backspace'){
      ev.target.value =
        ev.target.value.substr(0, ev.target.value.length-1);
    } else if(ev.key === ' ') {
      ev.target.value += ', #';
    } else {
      const evento = new CustomEvent('crash_display');
      evento.border = 'dashed red';
      evento.background = 'salmon';
      main.dispatchEvent(evento);
    }
  });

  newInput.addEventListener('keyup', (ev) => {
    const evento = new CustomEvent('crash_display');
    evento.border = '';
    evento.background = '';
    main.dispatchEvent(evento);
  });

  newInput.addEventListener('mousedown', () => {
    newInput.style.background = 'fuchsia';
  });

  newInput.addEventListener('mouseup', () => {
    newInput.style.background = 'white';
  });


  newButton.addEventListener('click', () => {
    const data = newInput.value.split(', #');
    let enviar = 'Sended Tags:\n';
    data.forEach((element) => {
      enviar += `${element}\n`;
    });
    newInput.value = '';
    asideDiv.innerText = enviar;
    const evento = new CustomEvent('successInsertion');
    evento.message = 'Tags correctly inserted';
    main.dispatchEvent(evento);
  });

  newButton.addEventListener('mouseover', () => {
    newButton.style.background = 'yellow';
  });

  newButton.addEventListener('mouseout', () => {
    newButton.style.background = '';
  });


  list.addEventListener('click', () => {
    alert('Personal Data List');
  });

  list.addEventListener('mouseover', () => {
    list.type = 'square';
    list.style.color = 'blue';
  });

  list.addEventListener('mouseout', () => {
    list.type = 'circle';
    list.style.color = '';
  });

  list.addEventListener('auxclick', () => {
    alert('Write in all of the inputs in the table, after clicks in the Send Data button that will appear when all the inputs have text.');
  });


  aside.addEventListener('click', () => {
    alert('Tags List');
  });

  aside.addEventListener('mouseover', () => {
    aside.style.background = 'yellow';
    aside.style.border = 'dotted green';
  });

  aside.addEventListener('mouseout', () => {
    aside.style.background = 'blanchedalmond';
    aside.style.border = 'solid black';
  });

  aside.addEventListener('auxclick', () => {
    alert('Write text in the superior input, after that clicks in the Picale button');
  });


  sendTable.addEventListener('click', () => {
    const data = [];
    data.push(name.value);
    data.push(last.value);
    data.push(age.value);
    let sendData = '';
    const actualData = list.children;
    for (let i = 0; i < actualData.length; i += 1) {
      sendData += `<li>${actualData[i].innerText}</li>`;
    }
    name.value = '';
    last.value = '';
    age.value = '';
    const evento = new CustomEvent('successInsertion');
    evento.message = 'Person correctly inserted';
    main.dispatchEvent(evento);
    list.innerHTML = `${sendData}<li>${data[0]} ${data[1]}, ${data[2]} years.</li>`;
  });

  sendTable.addEventListener('auxclick', () => {
    const r = confirm(`Do you want insert this data in the Data Person List?\n${name.value} ${last.value}, ${age.value}`);
    if (r === true) {
      const data = [];
      data.push(name.value);
      data.push(last.value);
      data.push(age.value);
      let sendData = '';
      const actualData = list.children;
      for (let i = 0; i < actualData.length; i += 1) {
        sendData += `<li>${actualData[i].innerText}</li>`;
      }
      name.value = '';
      last.value = '';
      age.value = '';
      const evento = new CustomEvent('successInsertion');
      evento.message = 'Person correctly inserted';
      main.dispatchEvent(evento);
      list.innerHTML = `${sendData}<li>${data[0]} ${data[1]}, ${data[2]} years.</li>`;
    } else {
      name.value = '';
      last.value = '';
      age.value = '';
    }
  });

  sendTable.addEventListener('mouseover', () => {
    sendTable.style.background = 'cyan';
  });

  sendTable.addEventListener('mouseout', () => {
    sendTable.style.background = '';
  });

  // -------------------------------------------- Mis AEL ------------------------------------------
  sendTable.addEventListener('show_hide', (ev) => {
    sendTable.hidden = ev.status;
  });

  table.addEventListener('click', () => {
    const evento = new CustomEvent('show_hide');
    evento.status = false;
    sendTable.dispatchEvent(evento);
  });

  table.addEventListener('auxclick', () => {
    const evento = new CustomEvent('show_hide');
    evento.status = true;
    sendTable.dispatchEvent(evento);
  });


  main.addEventListener('crash_display', (ev) => {
    main.style.border = ev.border;
    main.style.background = ev.background;
  });


  main.addEventListener('successInsertion', (ev) => {
    alert(ev.message);
  });


  div.addEventListener('noListen', (ev) => {
    div.innerHTML = `<h1>${ev.noListenMessage}</h1>`;
  });

  div.addEventListener('click', () => {
    const evento = new CustomEvent('noListen');
    evento.noListenMessage = 'Aqui nadie te pela.';
    div.dispatchEvent(evento);
  });

}());
