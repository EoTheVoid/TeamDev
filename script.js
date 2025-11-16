// Scroll Reveal Animation
function revealOnScroll() {
  const elements = document.querySelectorAll('.scroll-reveal');
  
  elements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 150;
    
    if (elementTop < window.innerHeight - elementVisible) {
      element.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// Smooth scroll to section
function scrollToSection(id) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

// Typewriter effect for code blocks
function typeWriter(elementId, text, speed, callback) {
  let i = 0;
  const element = document.getElementById(elementId);
  
  function type() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    } else if (callback) {
      setTimeout(callback, 300);
    }
  }
  
  type();
}

// Animate code block 1 (Red - Team Dev with bouncing letters)
function animateCodeBlock1() {
  const command = 'git clone team-dev/resources';
  const resultElement = document.getElementById('result1');
  const cursorElement = document.getElementById('cursor1');
  
  typeWriter('command1', command, 80, () => {
    cursorElement.style.display = 'none';
    
    const teamDevText = 'Team Dev';
    teamDevText.split('').forEach((letter, index) => {
      setTimeout(() => {
        const span = document.createElement('span');
        span.textContent = letter;
        span.style.color = '#ef4444';
        span.style.textShadow = '0 0 20px rgba(239, 68, 68, 0.8), 0 0 40px rgba(239, 68, 68, 0.4)';
        span.style.animation = 'bounce-letter 0.8s ease forwards';
        span.style.animationDelay = (index * 0.1) + 's';
        resultElement.appendChild(span);
      }, index * 150);
    });
  });
}

// Animate code block 2 (Blue - Team Dev with floating letters)
function animateCodeBlock2() {
  const command = 'sudo access --team-dev';
  const resultElement = document.getElementById('result2');
  const cursorElement = document.getElementById('cursor2');
  
  typeWriter('command2', command, 80, () => {
    cursorElement.style.display = 'none';
    
    const teamDevText = 'Team Dev';
    teamDevText.split('').forEach((letter, index) => {
      setTimeout(() => {
        const span = document.createElement('span');
        span.textContent = letter;
        span.style.color = '#3b82f6';
        span.style.textShadow = '0 0 20px rgba(59, 130, 246, 0.8), 0 0 40px rgba(59, 130, 246, 0.4)';
        span.style.animation = 'float-letter 3s ease-in-out infinite';
        span.style.animationDelay = (index * 0.2) + 's';
        resultElement.appendChild(span);
      }, index * 150);
    });
  });
}

// Add bounce animation for letters
const style = document.createElement('style');
style.textContent = `
  @keyframes bounce-letter {
    0% { opacity: 0; transform: translateY(30px); }
    50% { transform: translateY(-10px); }
    70% { transform: translateY(0px); }
    85% { transform: translateY(-5px); }
    100% { opacity: 1; transform: translateY(0); }
  }
  
  @keyframes float-letter {
    0%, 100% { transform: translateY(0) scale(1); }
    25% { transform: translateY(-20px) scale(1.1); }
    50% { transform: translateY(0) scale(1.05); }
    75% { transform: translateY(-10px) scale(1); }
  }
`;
document.head.appendChild(style);

// Trigger code animations when visible
const codeBlock1 = document.querySelector('.code-block.red-theme');
const codeBlock2 = document.querySelector('.code-block.blue-theme');
let code1Animated = false;
let code2Animated = false;

function checkCodeBlocks() {
  if (!code1Animated && isElementInViewport(codeBlock1)) {
    animateCodeBlock1();
    code1Animated = true;
  }
  
  if (!code2Animated && isElementInViewport(codeBlock2)) {
    animateCodeBlock2();
    code2Animated = true;
  }
}

function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

window.addEventListener('scroll', checkCodeBlocks);
window.addEventListener('load', checkCodeBlocks);

// Animate warning title letter by letter
function animateWarningTitle() {
  const warningTitle = document.getElementById('warningTitle');
  const text = 'Aviso de Confidencialidade';
  
  text.split('').forEach((letter, index) => {
    setTimeout(() => {
      const span = document.createElement('span');
      span.textContent = letter === ' ' ? '\u00A0' : letter;
      span.style.display = 'inline-block';
      span.style.opacity = '0';
      span.style.animation = 'fade-in-up 0.3s ease forwards';
      span.style.animationDelay = (index * 0.03) + 's';
      warningTitle.appendChild(span);
    }, 0);
  });
}

// Animate modal title letter by letter
function animateModalTitle() {
  const modalTitle = document.getElementById('modalTitle');
  const text = 'Team Dev';
  
  modalTitle.innerHTML = '';
  text.split('').forEach((letter, index) => {
    const span = document.createElement('span');
    span.textContent = letter === ' ' ? '\u00A0' : letter;
    span.style.opacity = '0';
    span.style.animation = 'fade-in-up 0.3s ease forwards';
    span.style.animationDelay = (0.2 + index * 0.05) + 's';
    modalTitle.appendChild(span);
  });
}

// WhatsApp Modal Functions
function toggleWhatsApp() {
  const modal = document.getElementById('whatsappModal');
  modal.classList.add('active');
  animateModalTitle();
}

function closeWhatsApp(event) {
  if (event) {
    event.stopPropagation();
  }
  const modal = document.getElementById('whatsappModal');
  modal.classList.remove('active');
}

function joinWhatsAppGroup() {
  window.open('https://chat.whatsapp.com/CYvrFLdusxWKj8SvFLHQ9c?mode=wwt', '_blank');
}

// Initialize animations
window.addEventListener('load', () => {
  animateWarningTitle();
  revealOnScroll();
  checkCodeBlocks();
});
