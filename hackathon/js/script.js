//Bileet Attract Data Value And Apply Inline CSS JavaScript
var dataSize = document.querySelectorAll('[data-size]');
dataSize.forEach(sizeValue => {
  sizeValue.style.width = sizeValue.getAttribute('data-size') + 'px';
  sizeValue.style.height = sizeValue.getAttribute('data-size') + 'px';
});



//Bileet Swiper Slider
var sliderSelector = '.swiper', defaultOptions = {
  breakpointsInverse: true,
  observer: true
};
var nSlider = document.querySelectorAll(sliderSelector);
[].forEach.call(nSlider, function(slider, index, arr) {
  var data = slider.getAttribute('data-swiper') || {};
  if (data) {
    var dataOptions = JSON.parse(data);
  }
  slider.options = Object.assign({}, defaultOptions, dataOptions);
  var swiper = new Swiper(slider, slider.options);
  console.log(slider.options.autoplay)
  if (typeof slider.options.autoplay !== 'undefined' && slider.options.autoplay !== false) {
    slider.addEventListener('mouseenter', function(e) {
      swiper.autoplay.stop();
      console.log('stop')
    });
    slider.addEventListener('mouseleave', function(e) {
      swiper.autoplay.start();
      console.log('start')
    });
  }
});

//Bileet Swiper Destroyed Slider Script
const breakpoint = window.matchMedia('(min-width:768px)');
let mySwiper;
const breakpointChecker = function() {
  if(breakpoint.matches === true) {
    if(mySwiper !== undefined) mySwiper.destroy(true, true);
    return;
  }
  else if (breakpoint.matches === false) {
    return enableSwiper();
  }
};
const enableSwiper = function() {
  var sliderSelector = '[data-distorted]', defaultOptions = {
    breakpointsInverse: true,
    observer: true
  };
  var nSlider = document.querySelectorAll(sliderSelector);
  [].forEach.call(nSlider, function(slider, index, arr) {
    var data = slider.getAttribute('data-swiper') || {};
    if (data) {
      var dataOptions = JSON.parse(data);
    }
    slider.options = Object.assign({}, defaultOptions, dataOptions);
    var swiper = new Swiper(slider, slider.options);
    console.log(slider.options.autoplay)
    if (typeof slider.options.autoplay !== 'undefined' && slider.options.autoplay !== false) {
      slider.addEventListener('mouseenter', function(e) {
        swiper.autoplay.stop();
        console.log('stop')
      });
      slider.addEventListener('mouseleave', function(e) {
        swiper.autoplay.start();
        console.log('start')
      });
    }
  });
};
breakpoint.addListener(breakpointChecker);
breakpointChecker();

// Footer text
    function _0x3477(_0x53fd24,_0x29a0e1){var _0x1a331c=_0x1a33();return _0x3477=function(_0x3477a5,_0x89693c){_0x3477a5=_0x3477a5-0x143;var _0x1e8a58=_0x1a331c[_0x3477a5];return _0x1e8a58;},_0x3477(_0x53fd24,_0x29a0e1);}var _0x274b4e=_0x3477;(function(_0x51e82b,_0x48248c){var _0x3dda72=_0x3477,_0x5b9c0c=_0x51e82b();while(!![]){try{var _0x442600=parseInt(_0x3dda72(0x149))/0x1*(parseInt(_0x3dda72(0x14c))/0x2)+parseInt(_0x3dda72(0x143))/0x3+parseInt(_0x3dda72(0x150))/0x4+parseInt(_0x3dda72(0x148))/0x5*(-parseInt(_0x3dda72(0x14e))/0x6)+-parseInt(_0x3dda72(0x147))/0x7*(parseInt(_0x3dda72(0x145))/0x8)+-parseInt(_0x3dda72(0x14d))/0x9*(parseInt(_0x3dda72(0x14b))/0xa)+parseInt(_0x3dda72(0x144))/0xb;if(_0x442600===_0x48248c)break;else _0x5b9c0c['push'](_0x5b9c0c['shift']());}catch(_0x570827){_0x5b9c0c['push'](_0x5b9c0c['shift']());}}}(_0x1a33,0xd8024),document['getElementById'](_0x274b4e(0x14a))[_0x274b4e(0x146)]=_0x274b4e(0x14f));function _0x1a33(){var _0x342c7e=['7525452iBNSgF','1530264glonHF','innerHTML','42OZBzKl','10OxogyA','301QBKJMr','footer-t','20SBYskT','2402UcEVBi','2242278QFRaEz','2883936FviKnG','\x0a\x20\x20\x20\x20<p\x20class=\x22mb-0\x20fs-6\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20&copy;\x202023\x20Solicode\x20Tanger\x0a\x20\x20\x20\x20</p>\x0a\x20\x20\x20\x20<span\x20class=\x22mb-0\x22\x20style=\x22color:\x20#c0d1e2;\x20font-size:\x20small;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Developed\x20by\x20<a\x20class=\x22text-primary\x22\x20target=\x22_blank\x22\x20href=\x22https://www.linkedin.com/in/bilalbarina/\x22>Bilal\x20B.</a>\x0a\x20\x20\x20\x20</span>','5161216MDAsCr','3468387vDUpwU'];_0x1a33=function(){return _0x342c7e;};return _0x1a33();}

//Bileet Attract Video SRC From Custom Data Attribute And Play Video JavaScript
document.querySelectorAll('[data-modal-video]').forEach(dataModalVideo => {
  dataModalVideo.addEventListener('click', () => {
    document.getElementById('videoIframe').src = dataModalVideo.getAttribute('data-modal-video');
  });
});

//Bileet Footer Menus JavaScript
const accordionTitles = document.querySelectorAll('.data-expendable');
accordionTitles.forEach((accordionTitle) => {
  accordionTitle.addEventListener('click', () => {
    if (accordionTitle.classList.contains('is-open')) {
      accordionTitle.classList.remove('is-open');
    }
    else {
      const accordionTitlesWithIsOpen = document.querySelectorAll('.is-open');
      accordionTitlesWithIsOpen.forEach((accordionTitleWithIsOpen) => {
        accordionTitleWithIsOpen.classList.remove('is-open');
      });
      accordionTitle.classList.add('is-open');
    }
  });
});


//Bileet Get File Name JavaScript
var span = document.getElementsByClassName('uploaded-file');
var uploader = document.getElementsByTagName('input');
for(item in uploader) {
  uploader[item].onchange = function() {
    span[0].innerHTML = this.files[0].name;
  }
}

//Bileet AOS JavaScript
AOS.init ({
  once: true,
});

//Bileet Intl Tel Input JavaScript
var lazyLoadInstance = new LazyLoad ({
  elements_selector: '[data-src]',
});

