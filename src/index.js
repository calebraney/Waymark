import SplitType from 'split-type';
import { initLenis } from './interactions/lenis';
import { load } from './interactions/load';
import { scrollIn } from './interactions/scrollin';
import { scrolling } from './interactions/scrolling';
import { runSplit } from './utilities';

// Webflow is initialized
document.addEventListener('DOMContentLoaded', function () {
  // register gsap plugins if available
  if (gsap.ScrollTrigger !== undefined) {
    gsap.registerPlugin(ScrollTrigger);
  }
  initLenis();
  // Commercials Parallax
  pricingPanels = function () {
    const PANEL = 'data-pricing-panel';
    const BUTTON = 'data-pricing-target';
    const panels = [...document.querySelectorAll(`[${PANEL}]`)];
    const buttons = [...document.querySelectorAll(`[${BUTTON}]`)];
    const ACTIVE_CLASS = 'is-active';

    if (panels.length === 0) return;
    //function to activate panels
    const activatePanel = function (nextPanel) {
      if (!nextPanel) return;
      //get the active panel and if isn't found get the first panel
      let activePanel = panels.find((item) => item.classList.contains(ACTIVE_CLASS));
      if (activePanel === undefined) {
        activePanel = panels[0];
      }
      activePanel.classList.remove(ACTIVE_CLASS);
      nextPanel.classList.add(ACTIVE_CLASS);
      let tl = gsap.timeline({
        duration: 0.4,
        onComplete: () => {},
      });
      gsap.fromTo(nextPanel, { opacity: 0, scale: 0.95 }, { opacity: 1, scale: 1, duration: 0.6 });
      if (nextPanel !== activePanel) {
        gsap.set(activePanel, { opacity: 0 }, '<.6');
      }
    };

    //activate the first panel
    activatePanel(panels[0]);

    //activate panels on button clicks
    buttons.forEach((button) => {
      const target = button.getAttribute(BUTTON);
      const targetPanel = document.querySelector(`[${PANEL}="${target}"]`);
      //activate panel on click
      button.addEventListener('click', function (e) {
        activatePanel(targetPanel);
      });
    });
  };

  // Commercials Parallax
  commercialsScroll = function () {
    const triggerElement = document.querySelector('.commercials_component');
    if (!triggerElement) return;
    let tl = gsap.timeline({
      scrollTrigger: {
        markers: false,
        trigger: triggerElement,
        start: 'top 80%',
        end: 'bottom 10%',
        scrub: 0.25,
      },
      defaults: {
        duration: 1,
        ease: 'none',
      },
    });
    tl.fromTo(
      '.commercials_layout',
      {
        rotationZ: 6,
      },
      {
        rotationZ: 2,
      },
      '<'
    );
    tl.fromTo(
      '.commercials_row.is-top',
      {
        xPercent: 20,
      },
      {
        xPercent: -30,
      },
      '<'
    );
    tl.fromTo(
      '.commercials_row.is-bottom',
      {
        xPercent: -30,
      },
      {
        xPercent: 30,
      },
      '<'
    );
  };
  const headerGradients = function () {
    const SELECTOR = '#gradient-canvas';
    const gradientEl = document.querySelector(SELECTOR);
    if (!gradientEl) return;
    var gradient = new Gradient();
    gradient.initGradient(SELECTOR);
  };

  let mm = gsap.matchMedia();
  mm.add(
    {
      //This is the conditions object
      isMobile: '(max-width: 767px)',
      isTablet: '(min-width: 768px)  and (max-width: 991px)',
      isDesktop: '(min-width: 992px)',
      reduceMotion: '(prefers-reduced-motion: reduce)',
    },
    (gsapContext) => {
      let { isMobile, isTablet, isDesktop, reduceMotion } = gsapContext.conditions;
      //Page Load Animation
      // homeHeaderLoad();

      headerGradients();
      load(gsapContext);
      scrollIn(gsapContext);
      scrolling(gsapContext);
      pricingPanels();
      // Conditional Animations
      if (!reduceMotion) {
        commercialsScroll();
      }
    }
  );
});
