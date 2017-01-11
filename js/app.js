jQuery(function($) {

  var DEBUG = false;

  var COLOR_WHITE   = '#ffffff';
  var COLOR_PRIMARY = '#2b3031'
  var COLOR_SECONDARY = '#2b3031'
  
  var $el = {
    intro: $('#intro'),
    introContent: $('#intro-content'),
    introOverlay: $('#intro-overlay'),
    introBg: $('#intro-bg'),
  }

  /**
   * Controller
   * ----------------------------------------------------------------
   */
  var ctrl = new ScrollMagic.Controller({
    globalSceneOptions: {
      triggerHook: 'onLeave'
    }
  })

  /**
   * Timelines / Tweens
   * ----------------------------------------------------------------
   */
  var titleTimeline = new TimelineMax();
  titleTimeline    
    // .fromTo( $el.introContent[0], 1, 
    //   { yPercent: 20, autoAlpha: 0, scale: 0.8}, 
    //   { yPercent: 0, autoAlpha: 1, scale: 1, ease: Power4.easeOut}, '0')
    
    .fromTo( $el.introContent[0], 1,
      { color: COLOR_WHITE }, 
      { color: COLOR_PRIMARY, ease: Linear.easeNone })


  /**
   * Scenes
   * ----------------------------------------------------------------
   */
  // var scene = new ScrollMagic.Scene({
  //   triggerElement: $el.introBg[0],
  //   duration: '100%'
  // })
  // .setPin($el.introBg[0])
  // .addTo(ctrl)
  // .addIndicators()

  var titleScene = new ScrollMagic.Scene({
    triggerElement: $el.introContent[0],
    duration: '100%'
  })
  .setPin($el.introContent[0])
  .setTween(titleTimeline)
  .addTo(ctrl)
  .addIndicators()


  







});
