//cursor con brillo
document.addEventListener('mousemove', (event) => {
    createGlow(event.pageX, event.pageY);
});

function createGlow(x, y) {
    const glow = document.createElement('div');
    glow.classList.add('glow');
    glow.style.left = `${x}px`;
    glow.style.top = `${y}px`;
    document.body.appendChild(glow);

    setTimeout(() => {
        glow.remove();
    },1000);
}

//proyectos
window.addEventListener('scroll', function() {
  const thumbnails = document.querySelectorAll('.thumbnail');
  thumbnails.forEach(thumb => {
      const rect = thumb.getBoundingClientRect();
      if (rect.top >= 2 && rect.bottom <= window.innerHeight) {
          thumb.classList.add('in-view');
      }
  });
});

// Mostrar el mensaje fijo cuando se carga la página
window.addEventListener('load', function() {
  var fixedMessage = document.getElementById('fixed-message');
  fixedMessage.style.display = 'block';
});

// Mostrar la burbuja de chat cuando se hace clic en el robot
document.getElementById('robot').addEventListener('click', function() {
  var chatBubble = document.getElementById('chat-bubble');
  var fixedMessage = document.getElementById('fixed-message');
  if (chatBubble.style.display === 'none' || chatBubble.style.display === '') {
    chatBubble.style.display = 'block';
    fixedMessage.style.display = 'none';
  } else {
    chatBubble.style.display = 'none';
    fixedMessage.style.display = 'block';
  }
});

// Mostrar opciones de chat
function showOptions() {
  var chatContent = document.getElementById('chat-content');
  chatContent.innerHTML = `
    <p>¡Genial! Puedo ayudarte a contactar con Karen, ¿que necesitas?</p>
    <button class="chat-btn" onclick="showServices()">Contratar sus servicios</button>
    <button class="chat-btn" onclick="showSocialMedia()">Contactarla en redes sociales</button>
  `;
}

// Mostrar opciones de servicios
function showServices() {
  var chatContent = document.getElementById('chat-content');
  chatContent.innerHTML = `
    <p>Ofrezco los siguientes servicios:</p>
    <ul>
      <li>Diseño web</li>
      <li>Aplicaciones IA</li>
      <li>Desarrollo de Software</li>
      <li>Soporte técnico</li>
      <li>Analisis de datos</li>
    </ul>
    <p>Puedes contactárme a través de:</p>
    <ul>
      <li><a href="https://wa.me/56937110135" target="_blank"><i class="fab fa-whatsapp"></i> WhatsApp</a></li>
      <li><a href="mailto:karenbustamanteayan@gmail.com"><i class="fas fa-envelope"></i> Email</a></li>
    </ul>
    <button class="chat-btn" onclick="showOptions()">Volver</button>
  `;
}

// Mostrar opciones de redes sociales
function showSocialMedia() {
  var chatContent = document.getElementById('chat-content');
  chatContent.innerHTML = `
    <p>Contáctame en redes sociales:</p>
    <ul>
      <li><a href="https://www.facebook.com/k.bustamantearo" target="_blank"><i class="fab fa-facebook"></i> Facebook</a></li>
      <li><a href="https://github.com/Somax711" target="_blank"><i class="fab fa-fa-github"></i> Github</a></li>
      <li><a href="https://www.linkedin.com/in/karen-jasmin-bustamante-ayan-03401b240/" target="_blank"><i class="fab fa-linkedin"></i>Linkedin</a></li>
    </ul>
    <button class="chat-btn" onclick="showOptions()">Volver</button>
  `;
}

//carousel skills

window.addEventListener('scroll', checkVisibility);
window.addEventListener('load', checkVisibility);

//chatbot
  function openModal(id) {
      document.getElementById(id).style.display = 'flex';
    }

    function closeModal(id) {
      document.getElementById(id).style.display = 'none';
    }

    //chatbot1 dentro de modal
 function sendMessage() {
  const input = document.getElementById('user-input');
  const chatBox = document.getElementById('chat-box');
  const userText = input.value.trim();

  if (userText === '') return;

  const userMessage = document.createElement('div');
  userMessage.className = 'message user';
  userMessage.textContent = userText;
  chatBox.appendChild(userMessage);

  const botMessage = document.createElement('div');
  botMessage.className = 'message bot';

  // Lógica de respuesta simple
  if (userText.toLowerCase().includes('hola')) {
    botMessage.textContent = '¡Hola! ¿En qué puedo ayudarte?';
  } else if (userText.toLowerCase().includes('precio')) {
    botMessage.textContent = 'Nuestros precios varían según el servicio. ¿Qué necesitas?';
  } else if (userText.toLowerCase().includes('gracias')) {
    botMessage.textContent = '¡Con gusto!';
  } else {
    botMessage.textContent = 'Lo siento, aún no entiendo eso.';
  }

  chatBox.appendChild(botMessage);
  chatBox.scrollTop = chatBox.scrollHeight;
  input.value = '';
}
