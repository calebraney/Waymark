import { initLenis } from './interactions/lenis';
import { load } from './interactions/load';
import { scrollIn } from './interactions/scrollin';
import { scrolling } from './interactions/scrolling';
import { attr, runSplit } from './utilities';
import { marquee } from './interactions/marquee';
import { accordion } from './interactions/accordion';
import { imageSwitch } from './interactions/image-switch';
import { textScrub } from './interactions/text-scrub';
import Plyr from 'plyr';

// Webflow is initialized
document.addEventListener('DOMContentLoaded', function () {
  // register gsap plugins if available
  if (gsap.ScrollTrigger !== undefined) {
    gsap.registerPlugin(ScrollTrigger);
  }
  initLenis();

  const customVideoPlayer = function () {
    //selectors
    const COMPONENT = '.plyr_component';
    //custom classes
    const VIDEO_CLASS = '.plyr_video';
    const COVER_CLASS = '.plyr_cover';
    const HIDE_COVER_CLASS = 'hide-cover';
    const PAUSE_TRIGGER_CLASS = '.plyr_pause-trigger';
    const CONTAIN_CLASS = 'contain-video';
    const settings = {
      autoplay: false,
      loop: false,
      mute: false,
      hideControls: true,
    };
    //plyr.io classes
    const PLAYING_CLASS = '.plyr--playing';

    const components = [...document.querySelectorAll(COMPONENT)];
    if (components.length === 0) return;

    components.forEach((component, index) => {
      // create plyr settings
      const video = component.querySelector(VIDEO_CLASS);
      const cover = component.querySelector(COVER_CLASS);
      const pauseTrigger = component.querySelector(PAUSE_TRIGGER_CLASS);

      //optional
      //get settings from the components
      const loopSetting = attr(settings.loop, component.getAttribute('data-player-loop'));
      let muteSetting = attr(settings.mute, component.getAttribute('data-player-mute'));
      const showCoverOnPause = attr(
        false,
        component.getAttribute('data-player-show-cover-on-pause')
      );

      let player = new Plyr(video, {
        controls: ['play', 'progress', 'current-time', 'mute', 'fullscreen'],
        hideControls: settings.hideControls,
        loop: { active: loopSetting },
        resetOnEnd: true,
      });

      // custom video cover
      if (cover) {
        cover.addEventListener('click', () => {
          player.play();
        });
      }

      player.on('ended', (event) => {
        component.classList.remove(HIDE_COVER_CLASS);
      });
      //if attribute is set to true show the cover on pause of video
      if (showCoverOnPause) {
        player.on('pause', (event) => {
          component.classList.remove(HIDE_COVER_CLASS);
        });
      }

      // pause other playing videos when this one starts playing
      player.on('play', (event) => {
        //remove the hide cover class for all components
        components.forEach((item, index) => {
          item.classList.remove(HIDE_COVER_CLASS);
        });
        //add the hidecover class to the current component
        component.classList.add(HIDE_COVER_CLASS);
        //find the component that was previously playing
        let prevPlayingComponent = document.querySelector(PLAYING_CLASS).closest(COMPONENT);
        //if the previous component exists and it is not the current one pause it
        if (prevPlayingComponent && prevPlayingComponent !== component) {
          prevPlayingComponent.find(PAUSE_TRIGGER_CLASS)[0].click();
        }
      });

      //pause component on click trigger
      pauseTrigger.addEventListener('click', () => {
        player.pause();
      });
      // exit full screen when video ends
      player.on('ended', (event) => {
        if (player.fullscreen.active) {
          player.fullscreen.exit();
        }
      });
      // set video to contain instead of cover when in full screen mode
      player.on('enterfullscreen', (event) => {
        component.classList.add(CONTAIN_CLASS);
      });
      player.on('exitfullscreen', (event) => {
        component.classList.remove(CONTAIN_CLASS);
      });
    });
  };

  // Pricing Panel Interaction
  const pricingPanels = function () {
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
      customVideoPlayer();
      marquee(gsapContext);
      accordion(gsapContext);
      imageSwitch(gsapContext);
      load(gsapContext);
      scrollIn(gsapContext);
      scrolling(gsapContext);
      textScrub(gsapContext);
      pricingPanels();
      // Conditional Animations
      if (!reduceMotion) {
        commercialsScroll();
      }
    }
  );

  //reset gsap on click of reset triggers
  const scrollReset = function () {
    //selector
    const RESET_EL = '[data-ix-reset]';
    //time option
    const RESET_TIME = 'data-ix-reset-time';
    const resetScrollTriggers = document.querySelectorAll(RESET_EL);
    resetScrollTriggers.forEach(function (item) {
      item.addEventListener('click', function (e) {
        //reset scrolltrigger
        ScrollTrigger.refresh();
        //if item has reset timer reset scrolltriggers after timer as well.
        if (item.hasAttribute(RESET_TIME)) {
          let time = attr(1000, item.getAttribute(RESET_TIME));
          //get potential timer reset
          setTimeout(() => {
            ScrollTrigger.refresh();
          }, time);
        }
      });
    });
  };
  scrollReset();

  const updaterFooterYear = function () {
    // set the fs-hacks selector
    const YEAR_SELECTOR = '[data-footer-year]';
    // get the the span element
    const yearSpan = document.querySelector(YEAR_SELECTOR);
    if (!yearSpan) return;
    // get the current year
    const currentYear = new Date().getFullYear();
    // set the year span element's text to the current year
    yearSpan.innerText = currentYear.toString();
  };
  updaterFooterYear();
});
