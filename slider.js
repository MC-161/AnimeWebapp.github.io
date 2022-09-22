let slider1 = tns({
  container : '.slider',
  'slideBy' : 1,
  'speed' : 400,
  'nav' : false,
  controlsContainer:'#controls',
  responsive:{
    1600: {
      items:10,
      gutter:20
    },
    1024: {
      items:7,
      gutter:200
    },
    768: {
      items:3,
      gutter:10
    },
    300:{
      items:3,
      gutter:0
    }
  }
})

let slider2 = tns({
  container : '.slider-2',
  'slideBy' : 1,
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
      items:7,
      gutter:200
    },
    768: {
      items:3,
      gutter:20
    },
    300:{
      items:3,
      gutter:0
    }
  }
})