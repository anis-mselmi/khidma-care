// Mobile menu toggle
const menuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
if (menuBtn && mobileMenu) {
  const closeMobileMenu = () => {
    mobileMenu.classList.add('hidden');
    menuBtn.setAttribute('aria-expanded', 'false');
  };

  menuBtn.setAttribute('aria-controls', 'mobile-menu');
  menuBtn.setAttribute('aria-expanded', 'false');

  menuBtn.addEventListener('click', () => {
    const isHidden = mobileMenu.classList.toggle('hidden');
    menuBtn.setAttribute('aria-expanded', String(!isHidden));
  });

  document.addEventListener('click', (event) => {
    if (mobileMenu.classList.contains('hidden')) return;
    const clickedInsideMenu = mobileMenu.contains(event.target);
    const clickedMenuButton = menuBtn.contains(event.target);
    if (!clickedInsideMenu && !clickedMenuButton) {
      closeMobileMenu();
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) {
      closeMobileMenu();
    }
  });

  mobileMenu.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMobileMenu));
}

// Initialize Swiper Carousel only on pages that include it
if (document.querySelector('.moments-swiper') && typeof Swiper !== 'undefined') {
  new Swiper('.moments-swiper', {
    loop: true,
    autoplay: { delay: 4000, disableOnInteraction: false },
    navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
    pagination: { el: '.swiper-pagination', clickable: true },
    spaceBetween: 0,
    effect: 'slide',
    speed: 800
  });
}

// Scroll reveal animation
const revealElements = document.querySelectorAll('.reveal:not(.team-card)');
const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealElements.forEach((element) => revealObserver.observe(element));

// Team page: reveal all cards with a dynamic stagger when section enters view
const teamSection = document.getElementById('team');
if (teamSection) {
  const teamCards = Array.from(teamSection.querySelectorAll('.team-card.reveal'));

  teamCards.forEach((card, index) => {
    card.style.transitionDelay = `${index * 45}ms`;
  });

  const teamObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      teamCards.forEach((card) => card.classList.add('in-view'));
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.08 });

  teamObserver.observe(teamSection);
}
