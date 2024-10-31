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
  if (gsap.Flip !== undefined) {
    gsap.registerPlugin(Flip);
  }
  initLenis();

  // Commercials Parallax
  commercialsScroll = function () {
    const triggerElement = document.querySelector('.commercials_component');
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
      // Conditional Animations
      if (!reduceMotion) {
        commercialsScroll();
      }
    }
  );
});
