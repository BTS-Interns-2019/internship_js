// Event handlers
(function () {
  // Thinking boy
  const tBoy = document.querySelector('#thinking-boy');
  const tInput = document.querySelector('#thinking-input');
  const tInnerBubble = document.querySelector('#inner-bubble');

  tInput.addEventListener('input', event => {
    tInnerBubble.textContent = event.target.value;
  });
  tInput.addEventListener('focus', event => {
    tBoy.textContent = '🤨';
  });
  tInput.addEventListener('change', event => {
    tInnerBubble.textContent = 'Such lewd thoughts';
    tBoy.textContent = '🤯';
  });

  // Balloon
  const bDiv = document.querySelector('.balloon-div');
  const balloon = document.querySelector('#balloon span');
  const customEvent1 = new Event('popped'); 
  let balloonSize = 52;

  bDiv.addEventListener('popped', event => {
    event.target.style.backgroundColor = '#ab2627';
  });

  balloon.addEventListener('dblclick', event => {
    balloon.textContent = '💥';
    bDiv.dispatchEvent(customEvent1);
  });

  balloon.addEventListener('click', event => {
    balloonSize += (balloonSize * 0.1);
    balloon.style.fontSize = balloonSize + 'px';
  });

  balloon.addEventListener('mouseleave', event => {
    balloonSize -= (balloonSize * 0.1);
    balloon.style.fontSize = balloonSize + 'px';
  });

  // Hacking girl
  const hGirl = document.querySelector('#hacking-girl span');
  const messageContainer = document.querySelector('.message-container');
  const hMessage = document.querySelector('.message');
  const gMessage = document.querySelector('.message');

  hGirl.addEventListener('mouseenter', event => {
    messageContainer.style.opacity = 1;
    hMessage.textContent = 'Hacking the NASA...';
  });

  hGirl.addEventListener('mouseleave', event => {
    hMessage.textContent = 'THE FBI IS AFTER ME';
  });

  hGirl.addEventListener('click', event => {
    messageContainer.style.opacity = 1;
    gMessage.textContent = 'Not now! I\'m busy';
  });

  // Elements
  const element = document.querySelector('#element span');
  const customEvent2 = new Event('avatar-state');

  element.addEventListener('click', event => {
    element.dispatchEvent(customEvent2);
  });

  element.addEventListener('avatar-state', event => {
    event.target.textContent = '👻';
  });

  window.addEventListener('keydown', event => {
    event.preventDefault(); 
    
    switch (event.key) {
      case 'ArrowUp':
        element.textContent = '💨';
        break;
      case 'ArrowRight':
        element.textContent = '🔥';
        break;
      case 'ArrowDown':
        element.textContent = '🗻';
        break;
      case 'ArrowLeft':
        element.textContent = '🌊';
        break;
      default:
        break;
    }
  });

  const body = document.querySelector('body');
  const modeMessage = document.querySelector('#mode');

  // Window
  window.addEventListener('offline', event => {
    body.style.backgroundColor = '#000';
    modeMessage.textContent = 'NIGHT MODE';
    modeMessage.style.color = '#fff';
  });

  window.addEventListener('online', event => {
    body.style.backgroundColor = '#fff';
    modeMessage.textContent = 'DAY MODE';
    modeMessage.style.color = '#000';
  });

  window.addEventListener('resize', event => {
    modeMessage.textContent = 'RESIZING MODE';
  });
})();