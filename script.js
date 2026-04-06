/* ===== COSMIC PORTFOLIO ANIMATIONS ===== */

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

/* ===== SCROLL REVEAL ANIMATION ===== */
const fadeElements = document.querySelectorAll('.fade-up');

const fadeOnScroll = () => {
  fadeElements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    
    if (elementTop < windowHeight - 100) {
      element.classList.add('active');
    }
  });
};

window.addEventListener('scroll', fadeOnScroll);
window.addEventListener('load', fadeOnScroll);

/* ===== TYPING EFFECT ===== */
const typingText = document.querySelector('.typing-text');
if (typingText) {
  const text = typingText.getAttribute('data-text') || 'Software Engineer';
  const phrases = ['Software Engineer', 'Full-Stack Developer', 'Creative Coder', 'Problem Solver'];
  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  
  function type() {
    const currentPhrase = phrases[phraseIndex];
    
    if (isDeleting) {
      typingText.textContent = currentPhrase.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typingText.textContent = currentPhrase.substring(0, charIndex + 1);
      charIndex++;
    }
    
    let typeSpeed = isDeleting ? 50 : 100;
    
    if (!isDeleting && charIndex === currentPhrase.length) {
      typeSpeed = 2000;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      typeSpeed = 500;
    }
    
    setTimeout(type, typeSpeed);
  }
  
  type();
}

/* ===== SKILLS PROGRESS ANIMATION ===== */
const skillItems = document.querySelectorAll('.skill-item');

const animateSkills = () => {
  skillItems.forEach(item => {
    const itemTop = item.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    
    if (itemTop < windowHeight - 50) {
      const level = item.getAttribute('data-level');
      const fill = item.querySelector('.skill-bar-fill');
      
      if (fill && fill.style.width === '0%') {
        setTimeout(() => {
          fill.style.width = level + '%';
        }, 200);
      }
    }
  });
};

window.addEventListener('scroll', animateSkills);
window.addEventListener('load', animateSkills);

/* ===== CONTACT FORM ===== */
const contactForm = document.getElementById('contactForm');

if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = {
      name: document.getElementById('name').value.trim(),
      email: document.getElementById('email').value.trim(),
      message: document.getElementById('message').value.trim()
    };
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all fields');
      return;
    }
    
    // Show success message
    const submitBtn = contactForm.querySelector('.submit-btn');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = 'Message Sent ';
    submitBtn.style.background = '#10b981';
    
    setTimeout(() => {
      submitBtn.innerHTML = originalText;
      submitBtn.style.background = '';
      contactForm.reset();
    }, 3000);
  });
}

/* ===== PARALLAX GLOW EFFECT ===== */
window.addEventListener('mousemove', (e) => {
  const mouseX = e.clientX / window.innerWidth;
  const mouseY = e.clientY / window.innerHeight;
  
  const glows = document.querySelectorAll('.cosmic-glow');
  glows.forEach((glow, index) => {
    const speed = (index + 1) * 20;
    const x = (window.innerWidth / 2 - e.clientX) / speed;
    const y = (window.innerHeight / 2 - e.clientY) / speed;
    
    glow.style.transform = `translate(${x}px, ${y}px)`;
  });
});

/* ===== NAVIGATION HIGHLIGHT ===== */
const sections = ['hero', 'about', 'projects', 'skills', 'contact'];
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  
  sections.forEach(section => {
    const element = document.getElementById(section);
    if (element) {
      const sectionTop = element.offsetTop;
      const sectionHeight = element.clientHeight;
      
      if (pageYOffset >= sectionTop - 200) {
        current = section;
      }
    }
  });
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

/* ===== CONSOLE GREETING ===== */
console.log('%c Welcome to Rahul GC\'s Cosmic Portfolio', 'color: #7c3aed; font-size: 20px; font-weight: bold;');
console.log('%cLet\'s build something amazing together!', 'color: #a78bfa; font-size: 14px;');

/* ===== WINDOW RESIZE HANDLER ===== */
window.addEventListener('resize', () => {
  // No canvas to resize
});

/* ===== PROJECT STATUS ANIMATIONS ===== */
document.querySelectorAll('.proj-status').forEach(status => {
  setInterval(() => {
    if(status.textContent.includes('ONLINE')) {
      status.style.opacity = '0.5';
      setTimeout(() => {
        status.style.opacity = '1';
      }, 500);
    }
  }, 2000);
});