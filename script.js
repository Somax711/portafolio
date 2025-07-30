// Cursor con brillo
document.addEventListener('mousemove', (event) => {
  const glow = document.createElement('div');
  glow.classList.add('glow');
  glow.style.left = `${event.pageX}px`;
  glow.style.top = `${event.pageY}px`;
  document.body.appendChild(glow);
  setTimeout(() => glow.remove(), 1000);
});

// Mostrar mensaje flotante al cargar la página
window.addEventListener('load', () => {
  const fixedMessage = document.getElementById('fixed-message');
  if (fixedMessage) fixedMessage.style.display = 'block';
});

// Variables globales para chat y input
const chatContent = document.getElementById('chat-content');
const input = document.getElementById('user-input');
const sendBtn = document.querySelector('#chat-bubble button[onclick="sendMessage()"]');

// Función para mostrar las opciones iniciales del chat
function showOptions() {
  chatContent.innerHTML = `
    <p>¡Hola! ¿Qué quieres hacer?</p>
    <button class="chat-btn" onclick="showContact()">Contactar</button>
    <button class="chat-btn" onclick="showProjects()">Tipos de proyecto</button>
  `;
  input.style.display = 'none';  // Ocultar input
  if (sendBtn) sendBtn.style.display = 'none';  // Ocultar botón enviar
}

// Mostrar opciones de contacto
function showContact() {
  chatContent.innerHTML = `
    <p>Contáctame por:</p>
    <ul>
      <li><a href="https://wa.me/56937110135" target="_blank">WhatsApp</a></li>
      <li><a href="mailto:karenbustamanteayan@gmail.com">Email</a></li>
      <li><a href="https://www.facebook.com/k.bustamantearo" target="_blank">Facebook</a></li>
      <li><a href="https://github.com/Somax711" target="_blank">GitHub</a></li>
      <li><a href="https://www.linkedin.com/in/karen-jasmin-bustamante-ayan-03401b240/" target="_blank">LinkedIn</a></li>
    </ul>
    <button class="chat-btn" onclick="showOptions()">Volver</button>
  `;
  input.style.display = 'none';
  if (sendBtn) sendBtn.style.display = 'none';
}

// Mostrar tipos de proyecto
function showProjects() {
  chatContent.innerHTML = `
    <h4>Ofrezco soluciones en:</h4>
    <ul>
      <li>Desarrollo Web</li>
      <li>Aplicaciones IA</li>
      <li>Desarrollo de Software</li>
      <li>Soporte técnico</li>
      <li>Análisis de datos</li>
    </ul>
    <button class="chat-btn" onclick="showOptions()">Volver</button>
  `;
  input.style.display = 'none';
  if (sendBtn) sendBtn.style.display = 'none';
}

// Mostrar u ocultar el chat al hacer clic en el robot
document.getElementById('robot').addEventListener('click', () => {
  const chatBubble = document.getElementById('chat-bubble');
  const fixedMessage = document.getElementById('fixed-message');
  if (chatBubble.style.display === 'none' || chatBubble.style.display === '') {
    chatBubble.style.display = 'flex';
    fixedMessage.style.display = 'none';
    showOptions();
  } else {
    chatBubble.style.display = 'none';
    fixedMessage.style.display = 'block';
  }
});


//hero
const typedText = document.getElementById('typed');
const words = ['Karen', 'Desarrolladora Web', 'Creativa', 'Apasionada por la tecnología'];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentWord = words[wordIndex];
  const displayed = currentWord.substring(0, charIndex);
  typedText.textContent = displayed;

  if (!isDeleting && charIndex < currentWord.length) {
    charIndex++;
    setTimeout(typeEffect, 100);
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
    setTimeout(typeEffect, 60);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) wordIndex = (wordIndex + 1) % words.length;
    setTimeout(typeEffect, 1000);
  }
}

document.addEventListener('DOMContentLoaded', typeEffect);



 //portafolio

 //portfolio
const cards = document.querySelectorAll('.card');
const buttons = document.querySelectorAll('.filter-buttons button');
const modal = document.getElementById('modal');
const closeBtn = document.getElementById('closeBtn');
const modalImg = document.getElementById('modalImg');
const modalTitle = document.getElementById('modalTitle');
const modalDesc = document.getElementById('modalDesc');
const modalLink = document.getElementById('modalLink');

// Evitar que el modal se muestre al cargar accidentalmente
modal.style.display = 'none';

// Animar tarjetas al hacer scroll
let hasScrolled = false;
window.addEventListener('scroll', () => {
  hasScrolled = true;
  const triggerBottom = window.innerHeight * 0.85;
  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    if (cardTop < triggerBottom) {
      card.classList.add('visible');
    }
  });
});

// Filtrar proyectos por categoría
buttons.forEach(button => {
  button.addEventListener('click', () => {
    buttons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    const category = button.getAttribute('data-category');
    cards.forEach(card => {
      if (category === 'all' || card.dataset.category === category) {
        card.classList.remove('hidden');
      } else {
        card.classList.add('hidden');
      }
    });
  });
});

// Mostrar modal SOLO en clic real del usuario
cards.forEach(card => {
  card.addEventListener('click', (e) => {
    if (!e.isTrusted) return; // Garantiza que sea clic real
    e.preventDefault();

    // Asignar datos al modal
    modalImg.src = card.dataset.img;
    modalTitle.textContent = card.dataset.title;
    modalDesc.textContent = card.dataset.desc;
    modalLink.href = card.dataset.link;

    modal.style.display = 'flex';
  });
});

// Cerrar modal
closeBtn.addEventListener('click', () => modal.style.display = 'none');
modal.addEventListener('click', e => { 
  if (e.target === modal) modal.style.display = 'none'; 
});
