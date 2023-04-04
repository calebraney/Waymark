import SplitType from 'split-type';

// Webflow is initialized
window.Webflow ||= [];
window.Webflow.push(() => {
  console.log('webflow laoded');
  // Run code once webflow is initialized
  gsap.registerPlugin(ScrollTrigger);
  // Keep lenis and scrolltrigger in sync
  lenis.on('scroll', () => {
    if (!ScrollTrigger) return;
    ScrollTrigger.update();
  });

  // Split the text up
  let typeSplit = new SplitType('h1', {
    types: 'lines, words',
    tagName: 'span',
  });

  // Split the text up
  function testimonialSplit() {
    1;
    let testimonialSplitInstance = new SplitType('.testimonial_quote', {
      types: 'lines',
    });
    $('.testimonial_quote')
      .find('.line')
      .each(function (index) {
        $(this).append("<div class='line-mask is-gradient'></div>");
        $(this).append("<div class='line-mask is-grey'></div>");
      });
  }

  // Home Header Parallax
  function homeHeaderScroll() {
    const triggerElement = $('.section_home-header');
    let tl = gsap.timeline({
      scrollTrigger: {
        markers: false,
        trigger: triggerElement,
        start: '10% top',
        end: 'bottom top',
        scrub: 0.5,
      },
      defaults: {
        duration: 1,
      },
    });
    tl.to(
      '.home-header_image-brand-wrap',
      {
        y: '20%',
      },
      0
    );
    tl.to(
      '.home-header_image-voice-overs-wrap',
      {
        y: '50%',
      },
      0
    );
    tl.to(
      '.home-header_lightbox-wrap',
      {
        y: '-15%',
      },
      0
    );
    tl.to(
      '.home-header_image-gradient-wrap',
      {
        y: '-20%',
      },
      0
    );
    tl.to(
      '.home-header_crop-grid',
      {
        height: '50%',
      },
      0
    );
  }

  // Commercials Parallax
  function commercialsScroll() {
    const triggerElement = $('.commercials_component');
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
  }

  // scroll animation for testimonial quote
  function testimonialScroll() {
    $('.line').each(function (index) {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: $(this),
          start: 'top center',
          end: 'bottom center',
          scrub: 1,
        },
      });
      tl.to($(this).find('.line-mask.is-grey'), {
        width: '0%',
        duration: 1,
      });
      tl.to(
        $(this).find('.line-mask.is-gradient'),
        {
          width: '100%',
          duration: 1,
        },
        '<'
      );
    });
  }

  let mm = gsap.matchMedia();
  mm.add(
    {
      //Animation Media Query
      isAnimationSafe: '(prefers-reduced-motion: no-preference)',
      isDesktop: '(min-width: 768px)',
    },
    (context) => {
      let { isAnimationSafe, isDesktop } = context.conditions;
      //Page Load Animation
      function homeHeaderLoad() {
        let tl = gsap.timeline({ delay: 0.5 });
        tl.set('.section_home-header', {
          opacity: 1,
        });
        tl.from('.home-header_crop-grid', {
          width: '100%',
          ease: 'power3.out',
          duration: 1.4,
        });
        tl.from(
          'h1 .line, [home-header-item], .section_home-header .button_wrapper',
          {
            y: isAnimationSafe ? '50%' : '5%',
            opacity: 0,
            stagger: { each: isAnimationSafe ? 0.2 : 0, from: 'left' },
            ease: 'power2.out',
            duration: 0.8,
          },
          '<'
        );
        tl.set(
          'body',
          {
            overflow: 'visible',
          },
          '<.8'
        );
        tl.from(
          '.home-header_image-gradient',
          {
            y: isAnimationSafe ? '2rem' : '0rem',
            opacity: 0,
            ease: 'power2.out',
            duration: 1.2,
          },
          '<'
        );
      }
      homeHeaderLoad();

      // Conditional Animations
      if (isAnimationSafe) {
        homeHeaderScroll();
        commercialsScroll();
        testimonialSplit();
        testimonialScroll();
        // Update on window resize
        let windowWidth = $(window).innerWidth();
        window.addEventListener('resize', function () {
          if (windowWidth !== $(window).innerWidth()) {
            windowWidth = $(window).innerWidth();
            elementsToSplit.each(function (index) {
              instancesOfSplit[index].revert();
            });
            testimonialSplit();
            testimonialScroll();
          }
        });
      }
      if (!isAnimationSafe) {
        $('.line-mask').style.display = 'none';
      }
    }
  );
});
