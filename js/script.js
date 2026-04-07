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

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
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
if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  revealElements.forEach((element) => revealObserver.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add('in-view'));
}

// Team page: reveal all cards with a dynamic stagger when section enters view
const teamSection = document.getElementById('team');
if (teamSection) {
  const teamCards = Array.from(teamSection.querySelectorAll('.team-card.reveal'));

  teamCards.forEach((card, index) => {
    card.style.transitionDelay = `${index * 45}ms`;
  });

  if ('IntersectionObserver' in window) {
    const teamObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        teamCards.forEach((card) => card.classList.add('in-view'));
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.08 });

    teamObserver.observe(teamSection);
  } else {
    teamCards.forEach((card) => card.classList.add('in-view'));
  }
}

// Lazy-load heavy video sources only when the media enters the viewport
const lazyVideos = document.querySelectorAll('video[data-lazy-video]');
if (lazyVideos.length) {
  const hydrateVideo = (video) => {
    if (video.dataset.loaded === 'true') return;

    const sources = video.querySelectorAll('source[data-src]');
    sources.forEach((source) => {
      source.src = source.dataset.src;
      source.removeAttribute('data-src');
    });

    video.load();
    video.dataset.loaded = 'true';
  };

  if ('IntersectionObserver' in window) {
    const videoObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        hydrateVideo(entry.target);
        observer.unobserve(entry.target);
      });
    }, { rootMargin: '200px 0px' });

    lazyVideos.forEach((video) => videoObserver.observe(video));
  } else {
    lazyVideos.forEach(hydrateVideo);
  }
}
