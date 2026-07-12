/* ============================================================
   AI for Kids - Main JavaScript
   Interactive functionality for the AI learning platform
   ============================================================ */

// ============================================================
// Configuration & Constants
// ============================================================
const CONFIG = {
  animations: {
    enabled: !window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    duration: 300
  },
  breakpoints: {
    mobile: 768,
    tablet: 1024
  },
  storage: {
    progressKey: 'ai-kids-progress',
    preferencesKey: 'ai-kids-preferences'
  }
};

// ============================================================
// Utility Functions
// ============================================================
const Utils = {
  // Debounce function for performance
  debounce(fn, delay) {
    let timeoutId;
    return (...args) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => fn.apply(this, args), delay);
    };
  },

  // Throttle function for scroll events
  throttle(fn, limit) {
    let inThrottle;
    return (...args) => {
      if (!inThrottle) {
        fn.apply(this, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  },

  // Check if element is in viewport
  isInViewport(element, threshold = 0.1) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) * (1 - threshold) &&
      rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) * threshold
    );
  },

  // Smooth scroll to element
  scrollToElement(element, offset = 0) {
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - offset;
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  },

  // Generate unique ID
  generateId(prefix = 'ai-kids') {
    return `${prefix}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  },

  // Format time
  formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  },

  // Local storage helpers
  storage: {
    get(key, defaultValue = null) {
      try {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : defaultValue;
      } catch {
        return defaultValue;
      }
    },
    set(key, value) {
      try {
        localStorage.setItem(key, JSON.stringify(value));
        return true;
      } catch {
        return false;
      }
    },
    remove(key) {
      try {
        localStorage.removeItem(key);
        return true;
      } catch {
        return false;
      }
    }
  }
};

// ============================================================
// Animation Observer (Intersection Observer for scroll animations)
// ============================================================
class AnimationObserver {
  constructor() {
    this.observer = null;
    this.init();
  }

  init() {
    if (!CONFIG.animations.enabled) return;

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          this.observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    this.observeElements();
  }

  observeElements() {
    const animatedElements = document.querySelectorAll([
      '.lesson-card',
      '.game-card',
      '.feature',
      '.stat',
      '.about-text',
      .about-title,
      '.cta-content > *'
    ].join(', '));

    animatedElements.forEach((el, index) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
      this.observer.observe(el);
    });
  }

  // Add animate-in class styles dynamically
  static addStyles() {
    const style = document.createElement('style');
    style.textContent = `
      .animate-in {
        opacity: 1 !important;
        transform: translateY(0) !important;
      }
    `;
    document.head.appendChild(style);
  }
}

// ============================================================
// Header Navigation
// ============================================================
class HeaderNav {
  constructor() {
    this.header = document.querySelector('.header');
    this.navToggle = document.querySelector('.nav-toggle');
    this.mobileMenu = document.querySelector('.mobile-menu');
    this.navLinks = document.querySelectorAll('.nav-link, .mobile-menu .nav-link');
    this.lastScrollY = 0;
    this.isMobileMenuOpen = false;
    
    this.init();
  }

  init() {
    if (!this.header) return;
    
    this.bindEvents();
    this.handleScroll();
    this.setActiveLink();
  }

  bindEvents() {
    // Mobile menu toggle
    if (this.navToggle && this.mobileMenu) {
      this.navToggle.addEventListener('click', () => this.toggleMobileMenu());
    }

    // Close mobile menu on link click
    this.navLinks.forEach(link => {
      link.addEventListener('click', () => this.closeMobileMenu());
    });

    // Close mobile menu on escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isMobileMenuOpen) {
        this.closeMobileMenu();
      }
    });

    // Header scroll effect
    window.addEventListener('scroll', Utils.throttle(() => this.handleScroll(), 16), { passive: true });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => this.handleAnchorClick(e, anchor));
    });
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    this.navToggle.setAttribute('aria-expanded', this.isMobileMenuOpen);
    this.mobileMenu.classList.toggle('open', this.isMobileMenuOpen);
    document.body.style.overflow = this.isMobileMenuOpen ? 'hidden' : '';
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
    this.navToggle.setAttribute('aria-expanded', 'false');
    this.mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
  }

  handleScroll() {
    const currentScrollY = window.scrollY;
    
    // Add scrolled class
    if (currentScrollY > 50) {
      this.header.classList.add('scrolled');
    } else {
      this.header.classList.remove('scrolled');
    }

    // Hide/show header on scroll (optional)
    // if (currentScrollY > this.lastScrollY && currentScrollY > 100) {
    //   this.header.style.transform = 'translateY(-100%)';
    // } else {
    //   this.header.style.transform = 'translateY(0)';
    // }
    
    this.lastScrollY = currentScrollY;
  }

  setActiveLink() {
    const currentPath = window.location.hash || '#home';
    this.navLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href === currentPath) {
        link.classList.add('active');
        link.setAttribute('aria-current', 'page');
      } else {
        link.classList.remove('active');
        link.removeAttribute('aria-current');
      }
    });
  }

  handleAnchorClick(e, anchor) {
    const href = anchor.getAttribute('href');
    if (href === '#') return;
    
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      Utils.scrollToElement(target, 72); // Header height
      history.pushState(null, null, href);
      this.setActiveLink();
    }
  }
}

// ============================================================
// Hero Section Animations
// ============================================================
class HeroAnimations {
  constructor() {
    this.robot = document.querySelector('.robot-main');
    this.sparkles = document.querySelectorAll('.sparkle');
    this.floatItems = document.querySelectorAll('.float-item');
    this.shapes = document.querySelectorAll('.shape');
    
    this.init();
  }

  init() {
    if (!CONFIG.animations.enabled) return;
    this.startAnimations();
  }

  startAnimations() {
    // Robot animations are handled by CSS
    // Add interactive hover effects
    if (this.robot) {
      this.robot.addEventListener('mouseenter', () => this.onRobotHover());
      this.robot.addEventListener('mouseleave', () => this.onRobotLeave());
    }

    // Add click interaction to robot
    if (this.robot) {
      this.robot.addEventListener('click', () => this.onRobotClick());
    }
  }

  onRobotHover() {
    this.robot.style.animationPlayState = 'paused';
    this.sparkles.forEach(sparkle => {
      sparkle.style.animationPlayState = 'paused';
    });
  }

  onRobotLeave() {
    this.robot.style.animationPlayState = 'running';
    this.sparkles.forEach(sparkle => {
      sparkle.style.animationPlayState = 'running';
    });
  }

  onRobotClick() {
    // Add a fun click animation
    this.robot.style.transform = 'scale(0.95)';
    this.createClickSparkles();
    
    setTimeout(() => {
      this.robot.style.transform = '';
    }, 150);
  }

  createClickSparkles() {
    const rect = this.robot.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const emojis = ['✨', '⭐', '💫', '⚡', '🌟'];
    
    for (let i = 0; i < 8; i++) {
      const sparkle = document.createElement('span');
      sparkle.textContent = emojis[Math.floor(Math.random() * emojis.length)];
      sparkle.style.cssText = `
        position: fixed;
        left: ${centerX}px;
        top: ${centerY}px;
        font-size: 1.5rem;
        pointer-events: none;
        z-index: 9999;
        transform: translate(-50%, -50%);
        animation: click-sparkle 0.8s ease-out forwards;
      `;
      
      const angle = (i / 8) * Math.PI * 2;
      const distance = 80 + Math.random() * 40;
      const tx = Math.cos(angle) * distance;
      const ty = Math.sin(angle) * distance;
      
      sparkle.style.setProperty('--tx', `${tx}px`);
      sparkle.style.setProperty('--ty', `${ty}px`);
      
      document.body.appendChild(sparkle);
      
      setTimeout(() => sparkle.remove(), 800);
    }
    
    // Add click sparkle animation if not exists
    if (!document.querySelector('#click-sparkle-style')) {
      const style = document.createElement('style');
      style.id = 'click-sparkle-style';
      style.textContent = `
        @keyframes click-sparkle {
          0% { opacity: 1; transform: translate(-50%, -50%) scale(1) rotate(0deg); }
          100% { opacity: 0; transform: translate(calc(-50% + var(--tx)), calc(-50% + var(--ty))) scale(0) rotate(360deg); }
        }
      `;
      document.head.appendChild(style);
    }
  }
}

// ============================================================
// Lesson Cards Interaction
// ============================================================
class LessonCards {
  constructor() {
    this.cards = document.querySelectorAll('.lesson-card');
    this.progress = Utils.storage.get(CONFIG.storage.progressKey, {});
    
    this.init();
  }

  init() {
    this.cards.forEach(card => this.bindCardEvents(card));
    this.updateProgressUI();
  }

  bindCardEvents(card) {
    const btn = card.querySelector('.btn-lesson');
    if (btn) {
      btn.addEventListener('click', (e) => this.handleLessonStart(e, card, btn));
    }

    // Add keyboard support
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        const btn = card.querySelector('.btn-lesson');
        if (btn) btn.click();
      }
    });

    // Make card focusable
    card.setAttribute('tabindex', '0');
  }

  handleLessonStart(event, card, button) {
    event.preventDefault();
    event.stopPropagation();

    const lessonId = card.dataset.lessonId || this.generateLessonId(card);
    const lessonTitle = card.querySelector('.lesson-title')?.textContent || 'Unknown Lesson';
    
    // Show loading state
    button.classList.add('loading');
    button.disabled = true;
    button.innerHTML = '<span class="spinner"></span> Loading...';

    // Simulate loading (replace with actual lesson loading)
    setTimeout(() => {
      this.startLesson(lessonId, lessonTitle);
      button.classList.remove('loading');
      button.disabled = false;
      button.innerHTML = 'Start Lesson';
    }, 800);
  }

  generateLessonId(card) {
    const title = card.querySelector('.lesson-title')?.textContent || 'lesson';
    return title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
  }

  startLesson(lessonId, lessonTitle) {
    // Save progress
    this.progress[lessonId] = {
      title: lessonTitle,
      startedAt: Date.now(),
      completed: false,
      progress: 0
    };
    Utils.storage.set(CONFIG.storage.progressKey, this.progress);

    // Show lesson modal or redirect
    this.showLessonModal(lessonId, lessonTitle);
  }

  showLessonModal(lessonId, lessonTitle) {
    // Create modal
    const modal = document.createElement('div');
    modal.className = 'lesson-modal';
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    modal.setAttribute('aria-labelledby', 'lesson-modal-title');
    modal.innerHTML = `
      <div class="lesson-modal-overlay"></div>
      <div class="lesson-modal-content">
        <header class="lesson-modal-header">
          <h2 id="lesson-modal-title">${this.escapeHtml(lessonTitle)}</h2>
          <button class="lesson-modal-close" aria-label="Close lesson">&times;</button>
        </header>
        <div class="lesson-modal-body">
          <div class="lesson-placeholder">
            <div class="lesson-placeholder-icon">🚀</div>
            <h3>Lesson Coming Soon!</h3>
            <p>We're building amazing interactive lessons for you. Check back soon!</p>
            <div class="lesson-progress-preview">
              <div class="progress-bar">
                <div class="progress-fill" style="width: 0%"></div>
              </div>
              <span class="progress-text">0% Complete</span>
            </div>
          </div>
        </div>
        <footer class="lesson-modal-footer">
          <button class="btn btn-outline lesson-modal-close-btn">Close</button>
          <button class="btn btn-primary" disabled>Continue Lesson</button>
        </footer>
      </div>
    `;

    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';

    // Animate in
    requestAnimationFrame(() => {
      modal.classList.add('open');
    });

    // Focus management
    const closeBtn = modal.querySelector('.lesson-modal-close');
    closeBtn.focus();

    // Close handlers
    const closeModal = () => {
      modal.classList.remove('open');
      setTimeout(() => {
        modal.remove();
        document.body.style.overflow = '';
      }, 300);
    };

    modal.querySelector('.lesson-modal-overlay').addEventListener('click', closeModal);
    modal.querySelector('.lesson-modal-close').addEventListener('click', closeModal);
    modal.querySelector('.lesson-modal-close-btn').addEventListener('click', closeModal);

    // Escape key
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        closeModal();
        document.removeEventListener('keydown', handleEscape);
      }
    };
    document.addEventListener('keydown', handleEscape);

    // Animate progress bar
    setTimeout(() => {
      const progressFill = modal.querySelector('.progress-fill');
      const progressText = modal.querySelector('.progress-text');
      if (progressFill && progressText) {
        let progress = 0;
        const interval = setInterval(() => {
          progress += Math.random() * 10 + 5;
          if (progress >= 100) {
            progress = 100;
            clearInterval(interval);
            modal.querySelector('.btn-primary').disabled = false;
          }
          progressFill.style.width = `${progress}%`;
          progressText.textContent = `${Math.round(progress)}% Complete`;
        }, 200);
      }
    }, 500);
  }

  updateProgressUI() {
    this.cards.forEach(card => {
      const lessonId = card.dataset.lessonId || this.generateLessonId(card);
      const lessonProgress = this.progress[lessonId];
      
      if (lessonProgress) {
        const btn = card.querySelector('.btn-lesson');
        if (btn) {
          if (lessonProgress.completed) {
            btn.textContent = 'Completed ✓';
            btn.classList.add('completed');
            btn.disabled = true;
          } else if (lessonProgress.progress > 0) {
            btn.textContent = `Continue (${Math.round(lessonProgress.progress)}%)`;
            btn.classList.add('in-progress');
          }
        }
      }
    });
  }

  escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }
}

// ============================================================
// Game Cards Interaction
// ============================================================
class GameCards {
  constructor() {
    this.cards = document.querySelectorAll('.game-card');
    console.log('GameCards: Found', this.cards.length, 'game cards');
    this.init();
  }

  init() {
    this.cards.forEach(card => this.bindCardEvents(card));
  }

  bindCardEvents(card) {
    const btn = card.querySelector('.btn-game');
    console.log('GameCards: Binding events for card', card, 'button found:', !!btn);
    if (btn) {
      btn.addEventListener('click', (e) => this.handleGameStart(e, card, btn));
      console.log('GameCards: Click listener added to button');
    } else {
      console.warn('GameCards: No .btn-game found in card', card);
    }

    // Keyboard support
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        const btn = card.querySelector('.btn-game');
        if (btn) btn.click();
      }
    });

    card.setAttribute('tabindex', '0');
  }

  handleGameStart(event, card, button) {
    event.preventDefault();
    event.stopPropagation();

    const gameTitle = card.querySelector('.game-title')?.textContent || 'Game';
    
    button.classList.add('loading');
    button.disabled = true;
    button.innerHTML = '<span class="spinner"></span> Loading...';

    setTimeout(() => {
      this.showGameModal(gameTitle);
      button.classList.remove('loading');
      button.disabled = false;
      button.innerHTML = 'Play Now';
    }, 600);
  }

  showGameModal(gameTitle) {
    const modal = document.createElement('div');
    modal.className = 'game-modal';
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    modal.setAttribute('aria-labelledby', 'game-modal-title');
    modal.innerHTML = `
      <div class="game-modal-overlay"></div>
      <div class="game-modal-content">
        <header class="game-modal-header">
          <h2 id="game-modal-title">${this.escapeHtml(gameTitle)}</h2>
          <button class="game-modal-close" aria-label="Close game">&times;</button>
        </header>
        <div class="game-modal-body">
          <div class="game-placeholder">
            <div class="game-placeholder-icon">🎮</div>
            <h3>Game Loading...</h3>
            <p>Fun interactive games are being built! Check back soon to play.</p>
            <div class="game-preview-area">
              <div class="game-preview-screen">
                <div class="preview-animation"></div>
              </div>
            </div>
          </div>
        </div>
        <footer class="game-modal-footer">
          <button class="btn btn-outline game-modal-close-btn">Close</button>
          <button class="btn btn-primary" disabled>Start Game</button>
        </footer>
      </div>
    `;

    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';

    requestAnimationFrame(() => modal.classList.add('open'));

    const closeBtn = modal.querySelector('.game-modal-close');
    closeBtn.focus();

    const closeModal = () => {
      modal.classList.remove('open');
      setTimeout(() => {
        modal.remove();
        document.body.style.overflow = '';
      }, 300);
    };

    modal.querySelector('.game-modal-overlay').addEventListener('click', closeModal);
    modal.querySelector('.game-modal-close').addEventListener('click', closeModal);
    modal.querySelector('.game-modal-close-btn').addEventListener('click', closeModal);

    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        closeModal();
        document.removeEventListener('keydown', handleEscape);
      }
    };
    document.addEventListener('keydown', handleEscape);
  }

  escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }
}

// ============================================================
// Back to Top Button
// ============================================================
class BackToTop {
  constructor() {
    this.button = document.querySelector('.back-to-top');
    this.scrollThreshold = 300;
    
    this.init();
  }

  init() {
    if (!this.button) return;
    
    window.addEventListener('scroll', Utils.throttle(() => this.handleScroll(), 100), { passive: true });
    this.button.addEventListener('click', () => this.scrollToTop());
  }

  handleScroll() {
    if (window.scrollY > this.scrollThreshold) {
      this.button.classList.add('visible');
    } else {
      this.button.classList.remove('visible');
    }
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    
    // Focus management for accessibility
    const header = document.querySelector('.header');
    if (header) {
      header.focus({ preventScroll: true });
    }
  }
}

// ============================================================
// Floating Elements Interaction
// ============================================================
class FloatingElements {
  constructor() {
    this.elements = document.querySelectorAll('.float-item, .sparkle');
    this.init();
  }

  init() {
    if (!CONFIG.animations.enabled) return;
    
    this.elements.forEach(el => {
      el.addEventListener('mouseenter', () => this.onHover(el));
      el.addEventListener('mouseleave', () => this.onLeave(el));
    });
  }

  onHover(element) {
    element.style.animationPlayState = 'paused';
    element.style.transform = 'scale(1.3) rotate(15deg)';
    element.style.zIndex = '1000';
  }

  onLeave(element) {
    element.style.animationPlayState = 'running';
    element.style.transform = '';
    element.style.zIndex = '';
  }
}

// ============================================================
// Stats Counter Animation
// ============================================================
class StatsCounter {
  constructor() {
    this.stats = document.querySelectorAll('.stat-number');
    this.animated = new Set();
    this.init();
  }

  init() {
    if (!CONFIG.animations.enabled) return;
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !this.animated.has(entry.target)) {
          this.animateCounter(entry.target);
          this.animated.add(entry.target);
        }
      });
    }, { threshold: 0.5 });

    this.stats.forEach(stat => observer.observe(stat));
  }

  animateCounter(element) {
    const targetText = element.textContent;
    const target = parseInt(targetText.replace(/[^0-9]/g, ''), 10);
    const suffix = targetText.replace(/[0-9]/g, '');
    const duration = 2000;
    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const current = Math.floor(target * easeOutQuart);
      
      element.textContent = current + suffix;
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        element.textContent = targetText;
      }
    };

    requestAnimationFrame(animate);
  }
}

// ============================================================
// Theme Toggle (Optional - for future dark mode)
// ============================================================
class ThemeManager {
  constructor() {
    this.prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    this.init();
  }

  init() {
    // Listen for system theme changes
    this.prefersDark.addEventListener('change', (e) => {
      if (!Utils.storage.get(CONFIG.storage.preferencesKey, {}).theme) {
        document.documentElement.style.colorScheme = e.matches ? 'dark' : 'light';
      }
    });
  }

  setTheme(theme) {
    const preferences = Utils.storage.get(CONFIG.storage.preferencesKey, {});
    preferences.theme = theme;
    Utils.storage.set(CONFIG.storage.preferencesKey, preferences);
    
    document.documentElement.style.colorScheme = theme;
  }

  getTheme() {
    const preferences = Utils.storage.get(CONFIG.storage.preferencesKey, {});
    return preferences.theme || (this.prefersDark.matches ? 'dark' : 'light');
  }
}

// ============================================================
// Keyboard Navigation Enhancements
// ============================================================
class KeyboardNavigation {
  constructor() {
    this.init();
  }

  init() {
    // Trap focus in modals
    document.addEventListener('keydown', (e) => this.handleTabKey(e));
    
    // Skip link focus
    const skipLink = document.querySelector('.skip-link');
    if (skipLink) {
      skipLink.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(skipLink.getAttribute('href'));
        if (target) {
          target.focus({ preventScroll: true });
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    }
  }

  handleTabKey(e) {
    if (e.key !== 'Tab') return;

    const modal = document.querySelector('[role="dialog"][aria-modal="true"]');
    if (!modal) return;

    const focusableElements = modal.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    if (e.shiftKey && document.activeElement === firstElement) {
      e.preventDefault();
      lastElement.focus();
    } else if (!e.shiftKey && document.activeElement === lastElement) {
      e.preventDefault();
      firstElement.focus();
    }
  }
}

// ============================================================
// Performance Monitoring
// ============================================================
class PerformanceMonitor {
  constructor() {
    this.metrics = {};
    this.init();
  }

  init() {
    // Measure page load
    window.addEventListener('load', () => {
      setTimeout(() => this.collectMetrics(), 0);
    });

    // Monitor long tasks
    if ('PerformanceObserver' in window) {
      try {
        const observer = new PerformanceObserver((list) => {
          list.getEntries().forEach(entry => {
            if (entry.duration > 50) {
              console.warn(`Long task detected: ${entry.duration.toFixed(2)}ms`, entry);
            }
          });
        });
        observer.observe({ entryTypes: ['longtask'] });
      } catch (e) {
        // Long task observer not supported
      }
    }
  }

  collectMetrics() {
    if (!window.performance) return;

    const navigation = performance.getEntriesByType('navigation')[0];
    if (navigation) {
      this.metrics = {
        dns: navigation.domainLookupEnd - navigation.domainLookupStart,
        tcp: navigation.connectEnd - navigation.connectStart,
        ttfb: navigation.responseStart - navigation.requestStart,
        download: navigation.responseEnd - navigation.responseStart,
        domParse: navigation.domInteractive - navigation.responseEnd,
        domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
        loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
        total: navigation.loadEventEnd - navigation.fetchStart
      };

      // Log in development
      if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        console.group('🚀 Page Performance Metrics');
        console.table(this.metrics);
        console.groupEnd();
      }
    }
  }
}

// ============================================================
// Easter Eggs & Fun Interactions
// ============================================================
class EasterEggs {
  constructor() {
    this.konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    this.konamiIndex = 0;
    this.clickCount = 0;
    this.lastClickTime = 0;
    
    this.init();
  }

  init() {
    // Konami code
    document.addEventListener('keydown', (e) => this.handleKonami(e));
    
    // Robot click easter egg
    const robot = document.querySelector('.robot-main');
    if (robot) {
      robot.addEventListener('click', () => this.handleRobotClick());
    }

    // Logo click easter egg
    const logo = document.querySelector('.nav-logo');
    if (logo) {
      logo.addEventListener('click', (e) => {
        if (e.detail >= 3) {
          this.triggerLogoEasterEgg();
        }
      });
    }
  }

  handleKonami(e) {
    if (e.key === this.konamiCode[this.konamiIndex]) {
      this.konamiIndex++;
      if (this.konamiIndex === this.konamiCode.length) {
        this.triggerKonamiEasterEgg();
        this.konamiIndex = 0;
      }
    } else {
      this.konamiIndex = 0;
    }
  }

  handleRobotClick() {
    const now = Date.now();
    if (now - this.lastClickTime < 500) {
      this.clickCount++;
    } else {
      this.clickCount = 1;
    }
    this.lastClickTime = now;

    if (this.clickCount >= 5) {
      this.triggerRobotParty();
      this.clickCount = 0;
    }
  }

  triggerKonamiEasterEgg() {
    this.showCelebration('🎉 Konami Code Activated! You found the secret! 🎉');
    this.createConfetti(50);
    document.body.style.animation = 'rainbow-bg 2s linear';
    setTimeout(() => {
      document.body.style.animation = '';
    }, 2000);
  }

  triggerRobotParty() {
    const robot = document.querySelector('.robot-main');
    if (robot) {
      robot.style.animation = 'robot-party 1s ease-in-out';
      setTimeout(() => {
        robot.style.animation = '';
      }, 1000);
    }
    this.showCelebration('🤖 Robot Party Mode Activated! 🎉');
    this.createConfetti(30);
  }

  triggerLogoEasterEgg() {
    this.showCelebration('✨ You found the logo secret! ✨');
    this.createConfetti(20);
  }

  showCelebration(message) {
    const toast = document.createElement('div');
    toast.className = 'celebration-toast';
    toast.textContent = message;
    toast.style.cssText = `
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: linear-gradient(135deg, #6366f1, #ec4899);
      color: white;
      padding: 1.5rem 2.5rem;
      border-radius: 2rem;
      font-size: 1.25rem;
      font-weight: bold;
      box-shadow: 0 20px 40px rgba(99, 102, 241, 0.4);
      z-index: 10000;
      animation: celebration-pop 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
      text-align: center;
    `;
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
      toast.style.animation = 'celebration-pop 0.3s ease-in reverse';
      setTimeout(() => toast.remove(), 300);
    }, 2500);

    // Add animation style if not exists
    if (!document.querySelector('#celebration-style')) {
      const style = document.createElement('style');
      style.id = 'celebration-style';
      style.textContent = `
        @keyframes celebration-pop {
          0% { opacity: 0; transform: translate(-50%, -50%) scale(0.5); }
          100% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
        }
        @keyframes robot-party {
          0%, 100% { transform: rotate(0deg) scale(1); }
          25% { transform: rotate(-10deg) scale(1.1); }
          50% { transform: rotate(10deg) scale(1.1); }
          75% { transform: rotate(-5deg) scale(1.05); }
        }
        @keyframes rainbow-bg {
          0% { filter: hue-rotate(0deg); }
          100% { filter: hue-rotate(360deg); }
        }
      `;
      document.head.appendChild(style);
    }
  }

  createConfetti(count) {
    const colors = ['#6366f1', '#ec4899', '#fbbf24', '#34d399', '#60a5fa', '#f87171'];
    
    for (let i = 0; i < count; i++) {
      const confetti = document.createElement('div');
      confetti.style.cssText = `
        position: fixed;
        width: 10px;
        height: 10px;
        background: ${colors[Math.floor(Math.random() * colors.length)]};
        left: ${Math.random() * 100}vw;
        top: -10px;
        border-radius: ${Math.random() > 0.5 ? '50%' : '2px'};
        pointer-events: none;
        z-index: 9999;
        animation: confetti-fall ${2 + Math.random() * 2}s ease-in forwards;
        transform: rotate(${Math.random() * 360}deg);
      `;
      
      document.body.appendChild(confetti);
      
      setTimeout(() => confetti.remove(), 4000);
    }

    // Add confetti animation style
    if (!document.querySelector('#confetti-style')) {
      const style = document.createElement('style');
      style.id = 'confetti-style';
      style.textContent = `
        @keyframes confetti-fall {
          0% { transform: translateY(0) rotate(0deg); opacity: 1; }
          100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
        }
      `;
      document.head.appendChild(style);
    }
  }
}

// ============================================================
// Initialize Everything
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOMContentLoaded: Starting initialization...');
  console.log('Document readyState:', document.readyState);
  console.log('Scripts loaded:', document.scripts.length);
  
  // Check if game cards exist
  const gameCardsElements = document.querySelectorAll('.game-card');
  console.log('Game cards in DOM:', gameCardsElements.length);
  
  // Initialize all components
  const headerNav = new HeaderNav();
  const heroAnimations = new HeroAnimations();
  const lessonCards = new LessonCards();
  const gameCards = new GameCards();
  const backToTop = new BackToTop();
  const floatingElements = new FloatingElements();
  const statsCounter = new StatsCounter();
  const themeManager = new ThemeManager();
  const keyboardNav = new KeyboardNavigation();
  const performanceMonitor = new PerformanceMonitor();
  const easterEggs = new EasterEggs();
  
  console.log('DOMContentLoaded: All components initialized');
  
  // Initialize animation observer after a short delay
  setTimeout(() => {
    new AnimationObserver();
  }, 100);

  // Add global styles for dynamic elements
  addDynamicStyles();

  // Log welcome message
  console.log('%c🤖 Welcome to AI for Kids! 🚀', 'font-size: 24px; font-weight: bold; background: linear-gradient(135deg, #6366f1, #ec4899); -webkit-background-clip: text; -webkit-text-fill-color: transparent;');
  console.log('%cTry the Konami code (↑↑↓↓←→←→BA) or click the robot 5 times fast!', 'font-size: 14px; color: #6366f1;');
});

// ============================================================
// Dynamic Styles for JS-generated elements
// ============================================================
function addDynamicStyles() {
  const style = document.createElement('style');
  style.textContent = `
    /* Spinner for buttons */
    .spinner {
      display: inline-block;
      width: 16px;
      height: 16px;
      border: 2px solid transparent;
      border-top-color: currentColor;
      border-radius: 50%;
      animation: spin 0.8s linear infinite;
      margin-right: 8px;
    }
    
    @keyframes spin {
      to { transform: rotate(360deg); }
    }

    /* Button loading state */
    .btn.loading {
      position: relative;
      color: transparent !important;
      pointer-events: none;
    }
    
    .btn.loading .spinner {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      color: inherit;
    }

    .btn.completed {
      background: linear-gradient(135deg, #34d399, #10b981) !important;
      color: white !important;
      border-color: transparent !important;
    }

    .btn.in-progress {
      background: linear-gradient(135deg, #fbbf24, #f59e0b) !important;
      color: #92400e !important;
      border-color: transparent !important;
    }

    /* Modal Styles */
    .lesson-modal,
    .game-modal {
      position: fixed;
      inset: 0;
      z-index: 1000;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
      opacity: 0;
      visibility: hidden;
      transition: opacity 0.3s ease, visibility 0.3s ease;
    }

    .lesson-modal.open,
    .game-modal.open {
      opacity: 1;
      visibility: visible;
    }

    .lesson-modal-overlay,
    .game-modal-overlay {
      position: absolute;
      inset: 0;
      background: rgba(0, 0, 0, 0.6);
      backdrop-filter: blur(4px);
    }

    .lesson-modal-content,
    .game-modal-content {
      position: relative;
      background: var(--color-bg-card);
      border-radius: var(--radius-2xl);
      max-width: 500px;
      width: 100%;
      max-height: 90vh;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      box-shadow: var(--shadow-2xl);
      transform: scale(0.9) translateY(20px);
      transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
    }

    .lesson-modal.open .lesson-modal-content,
    .game-modal.open .game-modal-content {
      transform: scale(1) translateY(0);
    }

    .lesson-modal-header,
    .game-modal-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: var(--space-5) var(--space-6);
      border-bottom: 1px solid var(--color-border-light);
    }

    .lesson-modal-header h2,
    .game-modal-header h2 {
      font-size: var(--font-size-xl);
      margin: 0;
    }

    .lesson-modal-close,
    .game-modal-close {
      width: 40px;
      height: 40px;
      border: none;
      background: var(--color-bg-tertiary);
      border-radius: var(--radius-full);
      font-size: var(--font-size-2xl);
      color: var(--color-text-secondary);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all var(--transition-fast);
    }

    .lesson-modal-close:hover,
    .game-modal-close:hover {
      background: var(--color-error);
      color: white;
    }

    .lesson-modal-body,
    .game-modal-body {
      padding: var(--space-6);
      overflow-y: auto;
      flex: 1;
    }

    .lesson-placeholder,
    .game-placeholder {
      text-align: center;
      padding: var(--space-8) var(--space-4);
    }

    .lesson-placeholder-icon,
    .game-placeholder-icon {
      font-size: 4rem;
      margin-bottom: var(--space-4);
      animation: bounce 2s ease-in-out infinite;
    }

    .lesson-placeholder h3,
    .game-placeholder h3 {
      margin-bottom: var(--space-3);
    }

    .lesson-placeholder p,
    .game-placeholder p {
      margin-bottom: var(--space-6);
      color: var(--color-text-secondary);
    }

    .lesson-progress-preview,
    .game-preview-area {
      margin-top: var(--space-6);
    }

    .progress-bar {
      height: 8px;
      background: var(--color-bg-tertiary);
      border-radius: var(--radius-full);
      overflow: hidden;
      margin-bottom: var(--space-2);
    }

    .progress-fill {
      height: 100%;
      background: var(--gradient-primary);
      border-radius: var(--radius-full);
      transition: width 0.3s ease;
    }

    .progress-text {
      font-size: var(--font-size-sm);
      color: var(--color-text-tertiary);
      font-weight: var(--font-weight-medium);
    }

    .game-preview-screen {
      aspect-ratio: 16/9;
      background: var(--color-bg-tertiary);
      border-radius: var(--radius-xl);
      overflow: hidden;
      position: relative;
    }

    .preview-animation {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 4rem;
      animation: preview-float 3s ease-in-out infinite;
    }

    @keyframes preview-float {
      0%, 100% { transform: translateY(0) rotate(0deg); }
      50% { transform: translateY(-10px) rotate(5deg); }
    }

    .lesson-modal-footer,
    .game-modal-footer {
      display: flex;
      gap: var(--space-3);
      padding: var(--space-5) var(--space-6);
      border-top: 1px solid var(--color-border-light);
      justify-content: flex-end;
    }

    .lesson-modal-footer .btn,
    .game-modal-footer .btn {
      min-width: 120px;
    }

    /* Celebration Toast */
    .celebration-toast {
      animation: celebration-pop 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
    }

    /* Reduced motion */
    @media (prefers-reduced-motion: reduce) {
      .lesson-modal-content,
      .game-modal-content {
        transition: none;
        transform: none !important;
      }
      
      .spinner {
        animation: none;
      }
      
      .lesson-placeholder-icon,
      .game-placeholder-icon,
      .preview-animation {
        animation: none;
      }
    }
  `;
  document.head.appendChild(style);
}

// ============================================================
// Service Worker Registration (for PWA support)
// ============================================================
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(registration => {
        console.log('SW registered:', registration.scope);
      })
      .catch(error => {
        console.log('SW registration failed:', error);
      });
  });
}

// ============================================================
// Export for testing (if needed)
// ============================================================
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    HeaderNav,
    HeroAnimations,
    LessonCards,
    GameCards,
    BackToTop,
    FloatingElements,
    StatsCounter,
    ThemeManager,
    KeyboardNavigation,
    PerformanceMonitor,
    EasterEggs,
    Utils,
    CONFIG
  };
}