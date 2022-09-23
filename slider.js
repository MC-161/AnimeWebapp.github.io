let slider1 = tns({
  container : '.slider',
  'slideBy' : 2,
  'speed' : 400,
  'nav' : false,
  controlsContainer:'#controls',
  responsive:{
    1600: {
      items:8,
      gutter:100
    },
    1024: {
      items:8,
      gutter:10
    },
    768: {
      items:4,
      gutter:10
    },
    300:{
      items:3,
      gutter:100
    }
  }
})

let slider2 = tns({
  container : '.slider-2',
  'slideBy' : 2,
  'speed' : 400,
  'nav' : false,
  controlsContainer:'#controls2',
  prevButton:'.previous2',
  nextButton:'.next2',
  responsive:{
    1600: {
      items:10,
      gutter:20
    },
    1024: {
      items:8,
      gutter:10
    },
    768: {
      items:4,
      gutter:20
    },
    300:{
      items:3,
      gutter:100
    }
  }
})