function toggleMenu() {
  const navMenu = document.getElementById('nav-menu');
  const menuToggle = document.querySelector('.menu-toggle');

  if (!navMenu || !menuToggle) return;
  navMenu.classList.toggle('active');
  menuToggle.classList.toggle('active');
}

window.toggleMenu = toggleMenu;

document.addEventListener('DOMContentLoaded', () => {
  const navMenu = document.getElementById('nav-menu');
  const menuToggle = document.querySelector('.menu-toggle');
  if (!menuToggle || !navMenu) return;

  menuToggle.addEventListener('click', (event) => {
    event.preventDefault();
    toggleMenu();
  });

  navMenu.querySelectorAll('a[data-nav-link="true"]').forEach((link) => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 768 && navMenu.classList.contains('active')) {
        toggleMenu();
      }
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const pageServiceContent = document.querySelector('.page-service .content');
  if (!pageServiceContent) return;

  const images = pageServiceContent.querySelectorAll('img');
  if (images.length === 0) return;
  const imageList = Array.from(images);
  let currentImageIndex = -1;

  const lightbox = document.createElement('div');
  lightbox.className = 'image-lightbox';
  lightbox.setAttribute('aria-hidden', 'true');

  const closeButton = document.createElement('button');
  closeButton.className = 'image-lightbox-close';
  closeButton.type = 'button';
  closeButton.setAttribute('aria-label', 'Close image');
  closeButton.textContent = '×';

  const previousButton = document.createElement('button');
  previousButton.className = 'image-lightbox-nav image-lightbox-prev';
  previousButton.type = 'button';
  previousButton.setAttribute('aria-label', 'Previous image');
  previousButton.textContent = '‹';

  const nextButton = document.createElement('button');
  nextButton.className = 'image-lightbox-nav image-lightbox-next';
  nextButton.type = 'button';
  nextButton.setAttribute('aria-label', 'Next image');
  nextButton.textContent = '›';

  const lightboxImage = document.createElement('img');
  lightboxImage.alt = '';

  lightbox.append(closeButton, previousButton, lightboxImage, nextButton);
  document.body.appendChild(lightbox);

  function syncLightboxButtons() {
    const multipleImages = imageList.length > 1;
    previousButton.hidden = !multipleImages;
    nextButton.hidden = !multipleImages;
  }

  function showImageAtIndex(index) {
    const image = imageList[index];
    if (!image) return;
    currentImageIndex = index;
    lightboxImage.src = image.currentSrc || image.src;
    lightboxImage.alt = image.alt || '';
  }

  function closeLightbox() {
    lightbox.classList.remove('is-open');
    lightbox.setAttribute('aria-hidden', 'true');
    lightboxImage.removeAttribute('src');
    lightboxImage.alt = '';
    currentImageIndex = -1;
  }

  function openLightbox(index) {
    showImageAtIndex(index);
    syncLightboxButtons();
    lightbox.classList.add('is-open');
    lightbox.setAttribute('aria-hidden', 'false');
  }

  function showNextImage() {
    if (imageList.length < 2 || currentImageIndex < 0) return;
    showImageAtIndex((currentImageIndex + 1) % imageList.length);
  }

  function showPreviousImage() {
    if (imageList.length < 2 || currentImageIndex < 0) return;
    showImageAtIndex((currentImageIndex - 1 + imageList.length) % imageList.length);
  }

  imageList.forEach((image, index) => {
    image.addEventListener('click', () => openLightbox(index));
  });

  closeButton.addEventListener('click', closeLightbox);
  nextButton.addEventListener('click', (event) => {
    event.stopPropagation();
    showNextImage();
  });
  previousButton.addEventListener('click', (event) => {
    event.stopPropagation();
    showPreviousImage();
  });

  lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) {
      closeLightbox();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && lightbox.classList.contains('is-open')) {
      closeLightbox();
    }

    if (!lightbox.classList.contains('is-open')) return;

    if (event.key === 'ArrowRight') {
      showNextImage();
    }

    if (event.key === 'ArrowLeft') {
      showPreviousImage();
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const heroVideo = document.querySelector('.hero-video');
  if (!heroVideo) return;

  heroVideo.muted = true;
  heroVideo.defaultMuted = true;
  heroVideo.playsInline = true;
  heroVideo.playbackRate = 0.75;
  heroVideo.setAttribute('muted', '');
  heroVideo.setAttribute('playsinline', '');

  function attemptPlay() {
    heroVideo.playbackRate = 0.75;
    const playPromise = heroVideo.play();
    if (playPromise && typeof playPromise.catch === 'function') {
      playPromise.catch(() => {
        // If autoplay is blocked, keep the poster frame visible.
      });
    }
  }

  if (heroVideo.readyState >= 2) {
    attemptPlay();
  } else {
    heroVideo.addEventListener('canplay', attemptPlay, { once: true });
  }

  document.addEventListener('visibilitychange', () => {
    if (!document.hidden) {
      attemptPlay();
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const heroSection = document.querySelector('.hero');
  const heroVideo = document.querySelector('.hero-video');
  if (!heroSection || !heroVideo) return;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const maxOffset = 220;
  let ticking = false;

  function updateParallax() {
    const rect = heroSection.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    const progress = Math.min(1, Math.max(0, (viewportHeight - rect.top) / (viewportHeight + rect.height)));
    const offset = (progress - 0.5) * maxOffset;

    heroVideo.style.transform = `translate3d(0, ${offset}px, 0) scale(1.18)`;
    ticking = false;
  }

  function requestParallaxUpdate() {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(updateParallax);
  }

  updateParallax();
  window.addEventListener('scroll', requestParallaxUpdate, { passive: true });
  window.addEventListener('resize', requestParallaxUpdate);
});

window.addEventListener('resize', () => {
  const navMenu = document.getElementById('nav-menu');
  const menuToggle = document.querySelector('.menu-toggle');

  if (!navMenu || !menuToggle) return;
  if (window.innerWidth > 768) {
    navMenu.classList.remove('active');
    menuToggle.classList.remove('active');
  }
});
