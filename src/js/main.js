(function() { 

function Slider(settings) {
  this.slider = document.querySelector(settings.className);  
  this.sliderItems = this.slider.querySelectorAll(".slides__item");  
  this.btnPrev = this.slider.querySelector('.slider__control--prev');
  this.btnNext = this.slider.querySelector('.slider__control--next');
  this.interval = settings.interval;
  this.inf = settings.inf;
  this.animate = settings.animate;
  var self = this;

  if(settings.animate) {
    for( var i = 0; i < this.sliderItems.length; i++){
      this.sliderItems[i].style.transition = "0.5s ease-in-out";
    }
  }
  this.btnNext.onclick = function() {
    self.nextSlide();
  } 
  this.btnPrev.onclick = function () {
    self.prevSlide();
  }
  window.onresize = function() {
    self.init();
  }
  this.init();
  this.slideShow();
};

Slider.prototype.slideShow = function() {  
  if(this.inf) {
    this.timer();
  }
}

Slider.prototype.timer = function() { 
  var self = this;
  var timer = setInterval(function() {
    self.nextSlide();
  },this.interval);
  
}
Slider.prototype.init = function() {
    for(var i = 0;  i < this.sliderItems.length; i++) {      
      this.sliderItems[i].style.left = (this.sliderItems[i].offsetWidth * i) + "px";
    };    
  };

// след. слайд
Slider.prototype.nextSlide = function() {   
  if((parseInt(this.sliderItems[0].style.left) !== parseInt(-(this.sliderItems.length-1)*this.sliderItems[0].offsetWidth))) {
    for(var i = 0;  i < this.sliderItems.length; i++) {
      this.sliderItems[i].style.left = parseInt(this.sliderItems[i].style.left) - this.sliderItems[0].offsetWidth + "px";    
    }
  } else this.init();
};

//пред. слайд
Slider.prototype.prevSlide = function() {
  if((parseInt(this.sliderItems[0].style.left) !== 0)) {
    for(var i = 0;  i < this.sliderItems.length; i++) {
      this.sliderItems[i].style.left = parseInt(this.sliderItems[i].style.left) + this.sliderItems[0].offsetWidth + "px";
    }
  } else for (var i = 0; i < this.sliderItems.length; i++) {    
    this.sliderItems[i].style.left = -parseInt(this.sliderItems[0].offsetWidth * ((this.sliderItems.length - i)-1))+ "px";
  };
};


var s1 = new Slider({
        className: ".slider",
        interval: "5000",
        inf: true,
        animate: true
});

  var accordionItem = document.querySelectorAll(".accordion__item");
  var accordionTrigger = document.querySelectorAll(".accordion__title");

  for(var i = 0; i < accordionTrigger.length; i++) {

    accordionItem[i].children[1].style.display = "none";
    
    accordionItem[i].children[0].onclick = function(e) {

      for ( var i = 0 ; i < accordionTrigger.length; i++ ) {

        accordionItem[i].children[1].style.display = "none";
        accordionItem[i].children[0].classList.remove("accordion__title--active");
      }

      e.target.nextElementSibling.style.display= "block";
      e.target.classList.add("accordion__title--active");
    }
  }

    accordionItem[0].children[1].style.display= "block";
    accordionItem[0].children[0].classList.add("accordion__title--active");
  
})();

