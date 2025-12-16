// Veggiebotics Main JavaScript

document.addEventListener('DOMContentLoaded', function() {
  initNavigation();
  initSectionObserver();
  initMobileMenu();
  initWaitlistForm();
});

// Navigation scroll effect
function initNavigation() {
  const nav = document.getElementById('main-nav');
  if (!nav) return;

  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 50) {
      nav.classList.add('bg-neutral-900/95', 'backdrop-blur-md', 'border-b', 'border-neutral-800');
    } else {
      nav.classList.remove('bg-neutral-900/95', 'backdrop-blur-md', 'border-b', 'border-neutral-800');
    }

    lastScroll = currentScroll;
  });

  // Active link highlighting
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      if (window.pageYOffset >= sectionTop) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}

// Section fade-in observer
function initSectionObserver() {
  const sections = document.querySelectorAll('section');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  sections.forEach(section => {
    observer.observe(section);
  });
}

// Mobile menu toggle
function initMobileMenu() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const closeBtn = document.getElementById('mobile-menu-close');
  
  if (!menuBtn || !mobileMenu) return;

  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.add('open');
    document.body.style.overflow = 'hidden';
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      document.body.style.overflow = '';
    });
  }

  // Close on link click
  const mobileLinks = mobileMenu.querySelectorAll('a');
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

// Waitlist form handling
function initWaitlistForm() {
  const forms = document.querySelectorAll('.waitlist-form');
  
  forms.forEach(form => {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const emailInput = form.querySelector('input[type="email"]');
      const submitBtn = form.querySelector('button[type="submit"]');
      const email = emailInput.value;

      if (!email) return;

      // Update button state
      const originalText = submitBtn.innerHTML;
      submitBtn.innerHTML = '<span class="inline-block animate-spin mr-2">⟳</span> Joining...';
      submitBtn.disabled = true;

      // Simulate API call (replace with actual endpoint)
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Success state
      submitBtn.innerHTML = '✓ You\'re on the list';
      submitBtn.classList.remove('btn-primary');
      submitBtn.classList.add('bg-green-600');
      emailInput.value = '';
      emailInput.disabled = true;

      // Reset after delay
      setTimeout(() => {
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        submitBtn.classList.add('btn-primary');
        submitBtn.classList.remove('bg-green-600');
        emailInput.disabled = false;
      }, 3000);
    });
  });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href === '#') return;
    
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});
