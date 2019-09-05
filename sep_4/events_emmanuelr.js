(function() {
    const input = document.getElementById('input');
    const input2 = document.getElementById('input2');
    const output = document.getElementById('output');
    const boton = document.getElementById('boton');
    input.addEventListener('keydown', (evt) => {
        if(evt.key <= '9' && evt.key >= '0') output.innerText += evt.key;
        event.preventDefault();
    });
    input.addEventListener('focus', (evt) => {
        evt.currentTarget.classList.add('sombras');
    });
    input.addEventListener('blur', (evt) => {
        evt.currentTarget.classList.remove('sombras');
    });
    input.addEventListener('dblclick', (evt) => {
        evt.currentTarget.setAttribute('hidden', 'true');
    });
    input.addEventListener('mouseover', (evt) => {
        evt.currentTarget.classList.add('crecer');
    });
    input2.addEventListener('keydown', (evt) => {
        if(evt.key <= 'z' && evt.key >= 'a') output.innerText += evt.key;
        event.preventDefault();
    });
    input2.addEventListener('focus', (evt) => {
        evt.currentTarget.classList.add('bordes');
    });
    input2.addEventListener('blur', (evt) => {
        evt.currentTarget.classList.remove('bordes');
    });
    input2.addEventListener('dblclick', (evt) => {
        evt.currentTarget.setAttribute('hidden', 'true');
    });
    input2.addEventListener('mouseover', (evt) => {
        evt.currentTarget.classList.add('crecer');
    });
    boton.addEventListener('mouseover', (evt) => {
        evt.target.classList.add('letrota');
    });
    boton.addEventListener('mouseout', (evt) => {
        evt.target.classList.remove('letrota');
    });
    boton.addEventListener('mousedown', (evt) => {
        evt.preventDefault;
        if (evt.buttons === 2) window.open("https://66.media.tumblr.com/2324c370352d8fa32ebda1a8a6d60227/tumblr_pjfa6ojuaO1s5yfc8_1280.jpg", "_blank")
    });
    boton.addEventListener('dblclick', (evt) => {
        evt.preventDefault;
        evt.target.setAttribute('hidden','true')
    });
    let i=0;
    boton.addEventListener('mousemove', (evt) => {
        i += 3;
        evt.target.setAttribute('style',`box-shadow: ${i}px ${i}px 5px black;`);
    });

    // --------------------- Custom Events ------------------------\\
    const div1 = document.getElementById('div1');
    const div2 = document.getElementById('div2');
    div1.addEventListener('mouseover', () => {
        div1.innerText = `Ya vete`;
        const yaVete = new CustomEvent('yavete');
        yaVete.patron = 'Toribio';
        div2.dispatchEvent(yaVete);
    });
    div1.addEventListener('mouseout', () => {
        div1.innerText = `No te vayas pues`;
        div2.dispatchEvent(new CustomEvent('notevayaspues'));
    });
    div1.addEventListener('click', () => {
        div1.innerText = `Que te vayas`;
        div2.dispatchEvent(new CustomEvent('quetevayas'));
    });
    div1.addEventListener('dblclick', () => {
        div1.innerText = `Con una fregada, que te vayas`;
        div2.dispatchEvent(new CustomEvent('yasefueesteman'));
    });
    div2.addEventListener('yavete', (ev) => {
        div2.innerText = `Nome querio ir ${ev.patron}`;
    });
    div2.addEventListener('notevayaspues', (ev) => {
        div2.innerText = `Ah weno`;
    });
    div2.addEventListener('quetevayas', (ev) => {
        div2.innerText = `Ya voy`;
    });
    div2.addEventListener('yasefueesteman', (ev) => {
        div2.innerText = `Ya se fue`;
    });
})();