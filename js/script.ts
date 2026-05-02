type PageId = 'home' | 'mission' | 'caravans' | 'moments' | 'team' | 'contact';

type Page = {
  title: string;
  content: string;
};

declare const Swiper:
  | undefined
  | (new (
      selector: string,
      options: {
        loop: boolean;
        autoplay: { delay: number; disableOnInteraction: boolean };
        navigation: { nextEl: string; prevEl: string };
        pagination: { el: string; clickable: boolean };
        spaceBetween: number;
        effect: string;
        speed: number;
      }
    ) => unknown);

const navItems: Array<{ id: PageId; label: string }> = [
  { id: 'home', label: 'Home' },
  { id: 'mission', label: 'Mission' },
  { id: 'caravans', label: 'Caravans' },
  { id: 'moments', label: 'Moments' },
  { id: 'team', label: 'Team' },
  { id: 'contact', label: 'Contact' }
];

const routeByFile: Record<string, PageId> = {
  '': 'home',
  'index.html': 'home',
  'mission.html': 'mission',
  'caravans.html': 'caravans',
  'moments.html': 'moments',
  'team.html': 'team',
  'contact.html': 'contact'
};

const routeToHash = (page: PageId, anchor = ''): string => `#/${page}${anchor ? `#${anchor}` : ''}`;

const getRoute = (): { page: PageId; anchor: string } => {
  const hash = window.location.hash.replace(/^#\/?/, '');
  if (!hash) return { page: 'home', anchor: '' };

  const [pageName, anchor = ''] = hash.split('#');
  const page = (navItems.some((item) => item.id === pageName) ? pageName : 'home') as PageId;
  return { page, anchor };
};

const navLink = (id: PageId, label: string, activePage: PageId): string => {
  const isActive = id === activePage;
  const className = isActive
    ? 'nav-link text-deep-blue transition'
    : 'nav-link text-gray-700 hover:text-deep-blue transition';
  return `<a href="${routeToHash(id)}" class="${className}">${label}</a>`;
};

const mobileNavLink = (id: PageId, label: string, activePage: PageId): string => {
  const isActive = id === activePage;
  const className = isActive ? 'text-deep-blue py-1' : 'text-gray-700 py-1 hover:text-deep-blue';
  return `<a href="${routeToHash(id)}" class="${className}">${label}</a>`;
};

const renderNav = (activePage: PageId): string => `
  <nav class="sticky top-0 z-50 bg-white/85 backdrop-blur-md shadow-sm border-b border-blue-100">
    <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
      <div class="flex justify-between items-center h-20">
        <a href="${routeToHash('home')}" class="flex items-center space-x-2">
          <div class="brand-logo-wrap"><img src="assets/images/khidma%20(3).png" alt="Khidma Care logo" class="brand-logo"></div>
          <span class="text-2xl font-bold tracking-tight text-deep-blue">Khidma<span class="font-light">Care</span></span>
        </a>
        <div class="hidden md:flex items-center space-x-8">${navItems.map((item) => navLink(item.id, item.label, activePage)).join('')}</div>
        <div class="md:hidden">
          <button id="mobile-menu-btn" class="text-deep-blue text-2xl focus:outline-none" type="button" aria-label="Open navigation menu" title="Open menu"><i class="fas fa-bars"></i></button>
        </div>
      </div>
      <div id="mobile-menu" class="md:hidden hidden pb-5 flex flex-col space-y-3 border-t border-gray-100 pt-4">${navItems.map((item) => mobileNavLink(item.id, item.label, activePage)).join('')}</div>
    </div>
  </nav>`;

const footer = `
  <footer class="bg-deep-blue-dark text-gray-300 pt-12 pb-6">
    <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
      <div class="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between text-xs text-gray-500"><p>Â© 2026 Khidma Care - Humanitarian Initiative</p><p>By Anis Mselmi, with empathy ðŸ’™</p></div>
    </div>
  </footer>`;

const pages: Record<PageId, Page> = {
  home: {
    title: 'Khidma Care | Home',
    content: `
  <main>
    <section id="home" class="hero-wave text-white section-wrap">
      <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24 md:py-32 relative z-10">
        <div class="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div class="reveal">
            <div class="inline-flex items-center gap-2 bg-white/25 backdrop-blur-sm rounded-full px-4 py-1.5 text-sm font-medium mb-6">
              <i class="fas fa-heartbeat text-rose-200"></i>
              <span>Humanitarian Medical Initiative</span>
            </div>
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">Bringing Healthcare <span class="text-blue-100">to Every Doorstep</span></h1>
            <p class="text-lg text-white/90 mt-7 max-w-xl leading-relaxed">Khidma Care, a social and cultural project of Ecole Polytechnique de Sousse, delivers free medical caravans to underserved and rural communities, bringing together doctors, nurses, and volunteers to provide essential healthcare with respect, dignity, and genuine compassion.</p>
            <a href="https://www.instagram.com/khidma_care.psc26/" target="_blank" rel="noopener" aria-label="Khidma Care on Instagram" title="Khidma Care on Instagram" class="hero-insta-link mt-5">
              <i class="fab fa-instagram"></i>
            </a>
            <div class="section-actions section-actions-center mt-5">
              <a href="${routeToHash('caravans')}" class="bg-white text-deep-blue font-semibold px-7 py-3 rounded-full shadow-xl hover:bg-blue-50 transition flex items-center gap-2"><i class="fas fa-truck-medical"></i> See Caravans</a>
              <a href="${routeToHash('contact', 'volunteer')}" class="btn-outline px-7 py-3 flex items-center gap-2"><i class="fas fa-user-plus"></i> Join as Volunteer</a>
            </div>
          </div>
          <div class="relative flex justify-center md:justify-end reveal">
            <div class="soft-card showcase-card bg-white/95 rounded-3xl p-3 md:p-3.5 border-white/60 max-w-md text-left pdf-showcase">
              <div class="pdf-showcase-header">
                <p class="font-semibold text-xl text-slate-800">Project Snapshot</p>
                <span class="pdf-badge"><i class="fas fa-image"></i> Featured image</span>
              </div>
              <p class="text-sm text-slate-600 mt-1.5">A quick visual snapshot of the Khidma Care initiative.</p>
              <div class="pdf-frame mt-3 showcase-frame">
                <img src="assets/images/f.jpeg" alt="Khidma Care project snapshot" loading="lazy" decoding="async">
              </div>
              <div class="showcase-footer mt-2">
                <span class="showcase-note">Care reaching communities with dignity.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="wave-divider relative z-10"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" preserveAspectRatio="none"><path fill="#f5fbff" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L0,120Z"></path></svg></div>
    </section>

    <section class="pt-14 pb-24 md:pt-16 md:pb-24 partner-section-bg text-white section-wrap">
      <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div class="text-center max-w-2xl mx-auto mb-10 reveal">
          <h2 class="text-3xl md:text-4xl font-extrabold tracking-tight text-deep-blue">Our Partners</h2>
        </div>
        <div class="partner-spotlight reveal">
          <div class="partner-logo-shell"><img src="assets/images/Logo-Polytec-Eurace-blanc.png" alt="Polytec Eurace logo" class="partner-logo" loading="lazy" decoding="async"></div>
          <div class="partner-logo-shell"><img src="assets/images/447343727_1795719257585804_8023134739586835701_n.jpg" alt="Partner logo" class="partner-logo" loading="lazy" decoding="async"></div>
          <div class="partner-logo-shell"><img src="assets/images/11.jpg" alt="Partner logo 11" class="partner-logo" loading="lazy" decoding="async"></div>
          <div class="partner-logo-shell"><img src="assets/images/22.png" alt="Partner logo 22" class="partner-logo" loading="lazy" decoding="async"></div>
          <div class="partner-logo-shell"><img src="assets/images/33.jpg" alt="Partner logo 33" class="partner-logo" loading="lazy" decoding="async"></div>
          <div class="partner-logo-shell"><img src="assets/images/44.jpg" alt="Partner logo 44" class="partner-logo" loading="lazy" decoding="async"></div>
        </div>
      </div>
    </section>

    <section class="pt-14 pb-24 md:pt-16 md:pb-24 bg-white section-wrap">
      <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div class="text-center mb-10 reveal">
          <span class="text-deep-blue font-semibold uppercase tracking-wide">In Action</span>
          <h2 class="text-3xl md:text-5xl font-extrabold text-slate-800 mt-2 tracking-tight">Witness the Impact</h2>
          <div class="w-20 h-1 bg-deep-blue mx-auto mt-4 rounded-full"></div>
        </div>
        <div class="video-loop-container rounded-3xl shadow-2xl overflow-hidden aspect-video max-w-4xl mx-auto border border-blue-100 reveal">
          <video muted loop preload="none" controls class="w-full h-full object-cover" aria-label="Khidma Care field impact video" data-lazy-video poster="assets/images/a.png">
            <source data-src="assets/videos/submission.mp4" type="video/mp4">
            Your browser does not support the video tag.
          </video>
          <div class="video-overlay-play absolute inset-0 bg-deep-blue/25 flex items-center justify-center pointer-events-none">
            <div class="bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg"><i class="fas fa-play-circle text-deep-blue text-4xl"></i></div>
          </div>
        </div>
      </div>
    </section>
  </main>`
  },
  mission: {
    title: 'Khidma Care | Mission',
    content: `
  <main>
    <section id="mission" class="pt-10 pb-28 md:pt-12 md:pb-44 section-soft section-wrap">
      <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div class="text-center max-w-3xl mx-auto mb-12 reveal">
          <span class="text-deep-blue font-semibold tracking-wide uppercase text-sm">Our Mission</span>
          <h1 class="text-3xl md:text-5xl font-extrabold mt-2 text-slate-800 tracking-tight">Healthcare Access for All</h1>
        </div>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="soft-card p-8 text-center reveal"><div class="icon-chip mx-auto mb-5"><i class="fas fa-ambulance text-2xl"></i></div><h2 class="text-xl font-bold">Medical Caravans</h2><p class="text-slate-600 mt-3 leading-relaxed">Free consultations, checkups, and medicine distribution in rural areas.</p></div>
          <div class="soft-card p-8 text-center reveal"><div class="icon-chip mx-auto mb-5"><i class="fas fa-chalkboard-user text-2xl"></i></div><h2 class="text-xl font-bold">Health Awareness</h2><p class="text-slate-600 mt-3 leading-relaxed">Educational sessions on hygiene, nutrition, and prevention.</p></div>
          <div class="soft-card p-8 text-center reveal"><div class="icon-chip mx-auto mb-5"><i class="fas fa-hand-holding-medical text-2xl"></i></div><h2 class="text-xl font-bold">Volunteer Spirit</h2><p class="text-slate-600 mt-3 leading-relaxed">Uniting medical professionals and citizens for solidarity.</p></div>
        </div>
      </div>
    </section>
  </main>`
  },
  caravans: {
    title: 'Khidma Care | Caravans',
    content: `
  <main>
    <section id="caravans" class="pt-6 pb-24 md:pt-8 md:pb-24 scroll-mt-24 md:scroll-mt-28 bg-white section-wrap">
      <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div class="max-w-3xl mx-auto">
          <div class="soft-card upcoming-caravan-card p-4 md:p-5 reveal text-center">
            <div class="overflow-hidden rounded-2xl border border-blue-100 shadow-lg bg-slate-50">
              <img src="assets/images/school.jpg" alt="Upcoming caravan school location" class="w-full h-52 md:h-64 object-cover" loading="lazy" decoding="async">
            </div>
            <h2 class="text-2xl md:text-3xl font-extrabold mt-4 text-slate-800">26 avril 2026</h2>
            <p class="text-slate-600 mt-2 max-w-xl mx-auto">مدرسة غرة جوان بالقلعة الكبرى</p>
            <p class="mt-2 upcoming-date-text font-semibold"><i class="fas fa-calendar-check mr-2"></i>26 avril 2026</p>
            <div class="section-actions section-actions-center mt-4">
              <a href="${routeToHash('contact', 'volunteer')}" class="btn-primary px-6 py-3">Join the upcoming mission</a>
            </div>
          </div>
        </div>
        <div class="text-center mt-6 reveal"><span class="text-deep-blue font-semibold uppercase text-sm">On the Road</span><h1 class="text-3xl md:text-5xl font-extrabold text-slate-800 mt-2 tracking-tight">Upcoming Caravans</h1><div class="w-20 h-1 bg-deep-blue mx-auto mt-4 rounded-full"></div></div>
      </div>
    </section>
  </main>`
  },
  moments: {
    title: 'Khidma Care | Moments',
    content: `
  <main>
    <section id="moments" class="pt-10 pb-24 md:pt-12 md:pb-24 section-soft section-wrap">
      <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div class="text-center mb-9 reveal"><span class="text-deep-blue font-semibold uppercase tracking-wide">Gallery</span><h1 class="text-3xl md:text-5xl font-extrabold text-slate-800 mt-2 tracking-tight">Best Moments of Humanity</h1><div class="w-20 h-1 bg-deep-blue mx-auto mt-4 rounded-full"></div><p class="text-slate-600 mt-3">Capturing the spirit of our medical caravans across Tunisia</p></div>
        <div class="swiper moments-swiper rounded-3xl overflow-hidden shadow-xl border border-blue-100 reveal">
          <div class="swiper-wrapper">
            <div class="swiper-slide relative"><img src="assets/images/a.jpeg" class="w-full h-80 md:h-96 object-cover object-center moment-focal-image moment-focal-image-top" alt="Khidma Care moment A" loading="lazy" decoding="async"><div class="absolute bottom-0 left-0 bg-gradient-to-t from-black/70 to-transparent text-white p-5 w-full"><p class="font-bold">Moment A from our field activities</p></div></div>
            <div class="swiper-slide relative"><img src="assets/images/b.jpeg" class="w-full h-80 md:h-96 object-cover object-center" alt="Khidma Care moment B" loading="lazy" decoding="async"><div class="absolute bottom-0 left-0 bg-gradient-to-t from-black/70 to-transparent text-white p-5 w-full"><p class="font-bold">Moment B from our field activities</p></div></div>
            <div class="swiper-slide relative"><img src="assets/images/c.jpeg" class="w-full h-80 md:h-96 object-cover object-center" alt="Khidma Care moment C" loading="lazy" decoding="async"><div class="absolute bottom-0 left-0 bg-gradient-to-t from-black/70 to-transparent text-white p-5 w-full"><p class="font-bold">Moment C from our field activities</p></div></div>
            <div class="swiper-slide relative"><img src="assets/images/d.jpeg" class="w-full h-80 md:h-96 object-cover object-center moment-focal-image-top-d" alt="Khidma Care moment D" loading="lazy" decoding="async"><div class="absolute bottom-0 left-0 bg-gradient-to-t from-black/70 to-transparent text-white p-5 w-full"><p class="font-bold">Moment D from our field activities</p></div></div>
            <div class="swiper-slide relative"><img src="assets/images/e.jpeg" class="w-full h-80 md:h-96 object-cover object-center" alt="Khidma Care moment E" loading="lazy" decoding="async"><div class="absolute bottom-0 left-0 bg-gradient-to-t from-black/70 to-transparent text-white p-5 w-full"><p class="font-bold">Moment E from our field activities</p></div></div>
          </div>
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
          <div class="swiper-pagination"></div>
        </div>
      </div>
    </section>
  </main>`
  },
  team: {
    title: 'Khidma Care | Team',
    content: `
  <main>
    <section id="team" class="pt-10 pb-24 md:pt-12 md:pb-24 section-soft section-wrap">
      <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div class="text-center mb-14 reveal"><span class="text-deep-blue font-semibold uppercase tracking-wide">Our Core Team</span><h1 class="text-3xl md:text-5xl font-extrabold text-slate-800 mt-2 tracking-tight">People Behind Khidma Care</h1><div class="w-20 h-1 bg-deep-blue mx-auto mt-4 rounded-full"></div></div>
        <div class="grid sm:grid-cols-2 lg:grid-cols-[repeat(16,minmax(0,1fr))] gap-8">
          <div class="team-card reveal lg:col-span-4 lg:col-start-1"><div class="team-photo-frame"><img src="assets/images/Copie%20de%20team%20khidma.png" alt="Dr. Samia" loading="lazy" decoding="async"></div></div>
          <div class="team-card reveal lg:col-span-4 lg:col-start-5"><div class="team-photo-frame"><img src="assets/images/Copie%20de%20team%20khidma%20(1).png" alt="Youssef" loading="lazy" decoding="async"></div></div>
          <div class="team-card reveal lg:col-span-4 lg:col-start-9"><div class="team-photo-frame"><img src="assets/images/Copie%20de%20team%20khidma%20(2).png" alt="Nour" loading="lazy" decoding="async"></div></div>
          <div class="team-card reveal lg:col-span-4 lg:col-start-13"><div class="team-photo-frame"><img src="assets/images/Copie%20de%20team%20khidma%20(3).png" alt="Ahmed" loading="lazy" decoding="async"></div></div>
        </div>
        <div class="grid sm:grid-cols-2 lg:grid-cols-[repeat(16,minmax(0,1fr))] gap-8 mt-8">
          <div class="team-card reveal lg:col-span-4 lg:col-start-3"><div class="team-photo-frame"><img src="assets/images/Copie%20de%20team%20khidma%20(6).png" alt="Team member 5" loading="lazy" decoding="async"></div></div>
          <div class="team-card reveal lg:col-span-4 lg:col-start-7"><div class="team-photo-frame"><img src="assets/images/Copie%20de%20team%20khidma%20(4).png" alt="Team member 6" loading="lazy" decoding="async"></div></div>
          <div class="team-card reveal lg:col-span-4 lg:col-start-11"><div class="team-photo-frame"><img src="assets/images/Copie%20de%20team%20khidma%20(5).png" alt="Team member 7" loading="lazy" decoding="async"></div></div>
        </div>
      </div>
    </section>
  </main>`
  },
  contact: {
    title: 'Khidma Care | Contact',
    content: `
  <main>
    <section id="find-us" class="pt-10 pb-24 md:pt-12 md:pb-24 section-soft section-wrap">
      <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div class="text-center mb-10 reveal">
          <span class="text-deep-blue font-semibold uppercase tracking-wide">Find Us & Contact</span>
          <h1 class="text-3xl md:text-5xl font-extrabold text-slate-800 mt-2 tracking-tight">One Place to Reach Khidma Care</h1>
          <div class="w-20 h-1 bg-deep-blue mx-auto mt-4 rounded-full"></div>
        </div>
        <div class="grid md:grid-cols-2 gap-12 mb-12">
          <div class="reveal">
            <h2 class="text-3xl md:text-4xl font-extrabold text-slate-800 tracking-tight">Reach Out</h2>
            <div class="w-16 h-0.5 bg-deep-blue mt-3 mb-5"></div>
            <p class="text-slate-600 mb-6 leading-relaxed">Want to volunteer, sponsor, or partner? We're here.</p>
            <div class="space-y-4">
              <div class="flex gap-3"><i class="fas fa-envelope text-deep-blue text-xl mt-0.5"></i><span>anismselmi490@gmail.com</span></div>
              <div class="flex gap-3"><i class="fas fa-phone-alt text-deep-blue text-xl mt-0.5"></i><span>+216 25 141 636</span></div>
              <div class="flex gap-3"><i class="fas fa-map-marker-alt text-deep-blue text-xl mt-0.5"></i><span>Sousse, Tunisia (Polytechnique)</span></div>
            </div>
            <div class="mt-5 flex flex-wrap gap-4">
              <a href="https://www.facebook.com/nannous.mselmi?locale=fr_FR" target="_blank" rel="noopener noreferrer" class="text-deep-blue" aria-label="Facebook profile" title="Facebook"><i class="fab fa-facebook-f text-2xl"></i></a>
              <a href="https://www.linkedin.com/in/anis-mselmi-441b39326/" target="_blank" rel="noopener noreferrer" class="text-deep-blue" aria-label="LinkedIn profile" title="LinkedIn"><i class="fab fa-linkedin-in text-2xl"></i></a>
              <a href="https://github.com/anis-mselmi" target="_blank" rel="noopener noreferrer" class="text-deep-blue" aria-label="GitHub profile" title="GitHub"><i class="fab fa-github text-2xl"></i></a>
            </div>
          </div>
          <div id="volunteer" class="soft-card p-5 md:p-6 reveal max-w-md md:ml-auto w-full">
            <h2 class="text-xl md:text-2xl font-bold flex gap-2"><i class="fas fa-hands-helping text-deep-blue"></i> Volunteer / Join</h2>
            <form class="space-y-3 mt-3" action="https://formsubmit.co/anismselmi490@gmail.com" method="POST">
              <input type="hidden" name="_subject" value="New Khidma Care contact form submission">
              <input type="hidden" name="_captcha" value="false">
              <input type="hidden" name="_template" value="table">
              <input type="text" name="name" placeholder="Full name" autocomplete="name" required class="w-full border border-blue-100 rounded-xl px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-200">
              <input type="email" name="email" placeholder="Email" autocomplete="email" required class="w-full border border-blue-100 rounded-xl px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-200">
              <select name="role" required class="w-full border border-blue-100 rounded-xl px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-200" aria-label="Volunteer role" title="Select volunteer role"><option value="Medical volunteer">Medical volunteer</option><option value="Support volunteer">Support volunteer</option><option value="Sponsor/Partner">Sponsor/Partner</option></select>
              <textarea rows="2" name="message" placeholder="Your message" required class="w-full border border-blue-100 rounded-xl px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-200"></textarea>
              <button type="submit" class="w-full btn-primary py-2.5 rounded-xl">Send message</button>
            </form>
          </div>
        </div>
        <div class="grid md:grid-cols-2 gap-10 items-stretch">
          <div class="soft-card p-6 reveal">
            <div class="flex items-start gap-4">
              <div class="icon-chip w-12 h-12 p-0 flex-shrink-0"><i class="fas fa-map-marker-alt text-deep-blue text-xl"></i></div>
              <div>
                <h2 class="font-bold text-xl text-slate-800">Ecole Polytechnique de Sousse</h2>
                <p class="text-slate-600 mt-1">Cite Olympique, 4051 Sousse, Tunisia</p>
                <p class="text-slate-500 text-sm mt-2"><i class="fas fa-phone-alt mr-2"></i> +216 25 141 636</p>
                <p class="text-slate-500 text-sm"><i class="fas fa-envelope mr-2"></i> anismselmi490@gmail.com</p>
                <div class="mt-3"><a href="https://www.google.com/maps/place/Polytechnique+Sousse/@35.826273,10.5869989,706m/data=!3m2!1e3!4b1!4m6!3m5!1s0x12fd8b3a0237010f:0x4418fc1f1a3cb73f!8m2!3d35.826273!4d10.5895738!16s%2Fg%2F11fl499ct7?entry=ttu&g_ep=EgoyMDI2MDMxOC4xIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" class="font-semibold text-deep-blue hover:underline">Open in Google Maps</a></div>
              </div>
            </div>
          </div>
          <div class="rounded-3xl overflow-hidden shadow-lg border border-blue-100 h-80 md:h-auto min-h-[280px] reveal">
            <iframe class="w-full h-full map-frame" frameborder="0" src="https://www.google.com/maps?q=35.826273,10.5895738&z=16&output=embed" allowfullscreen title="Map showing Polytechnique Sousse location" loading="lazy"></iframe>
          </div>
        </div>
      </div>
    </section>
  </main>`
  }
};

let behaviorAbortController: AbortController | null = null;

const renderApp = (): void => {
  const root = document.getElementById('app');
  if (!root) return;

  const { page, anchor } = getRoute();
  document.title = pages[page].title;
  root.innerHTML = `${renderNav(page)}${pages[page].content}${footer}`;

  initializeBehavior();

  requestAnimationFrame(() => {
    if (anchor) {
      document.getElementById(anchor)?.scrollIntoView();
      return;
    }
    window.scrollTo({ top: 0 });
  });
};

const initializeBehavior = (): void => {
  behaviorAbortController?.abort();
  behaviorAbortController = new AbortController();
  const { signal } = behaviorAbortController;

  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  if (menuBtn && mobileMenu) {
    const closeMobileMenu = (): void => {
      mobileMenu.classList.add('hidden');
      menuBtn.setAttribute('aria-expanded', 'false');
    };

    menuBtn.setAttribute('aria-controls', 'mobile-menu');
    menuBtn.setAttribute('aria-expanded', 'false');

    menuBtn.addEventListener('click', () => {
      const isHidden = mobileMenu.classList.toggle('hidden');
      menuBtn.setAttribute('aria-expanded', String(!isHidden));
    });

    document.addEventListener('click', (event: MouseEvent) => {
      if (mobileMenu.classList.contains('hidden')) return;
      const clickedInsideMenu = mobileMenu.contains(event.target as Node);
      const clickedMenuButton = menuBtn.contains(event.target as Node);
      if (!clickedInsideMenu && !clickedMenuButton) {
        closeMobileMenu();
      }
    }, { signal });

    document.addEventListener('keydown', (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeMobileMenu();
      }
    }, { signal });

    window.addEventListener('resize', () => {
      if (window.innerWidth >= 768) {
        closeMobileMenu();
      }
    }, { signal });

    mobileMenu.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMobileMenu));
  }

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

  const teamSection = document.getElementById('team');
  if (teamSection) {
    const teamCards = Array.from(teamSection.querySelectorAll<HTMLElement>('.team-card.reveal'));

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

  const lazyVideos = document.querySelectorAll<HTMLVideoElement>('video[data-lazy-video]');
  if (lazyVideos.length) {
    const hydrateVideo = (video: HTMLVideoElement): void => {
      if (video.dataset.loaded === 'true') return;

      const sources = video.querySelectorAll<HTMLSourceElement>('source[data-src]');
      sources.forEach((source) => {
        source.src = source.dataset.src as string;
        source.removeAttribute('data-src');
      });

      video.load();
      video.dataset.loaded = 'true';
    };

    if ('IntersectionObserver' in window) {
      const videoObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          hydrateVideo(entry.target as HTMLVideoElement);
          observer.unobserve(entry.target);
        });
      }, { rootMargin: '200px 0px' });

      lazyVideos.forEach((video) => videoObserver.observe(video));
    } else {
      lazyVideos.forEach(hydrateVideo);
    }
  }
};

window.addEventListener('hashchange', renderApp);
document.addEventListener('DOMContentLoaded', () => {
  const fileRoute = routeByFile[window.location.pathname.split('/').pop() ?? ''];
  if (fileRoute && fileRoute !== 'home' && !window.location.hash) {
    window.location.hash = routeToHash(fileRoute);
    return;
  }

  renderApp();
});
