import React from 'react';
import { styles } from '../../Styles/style';
import heroBackground from '../../../assets/Images/hero-section-background.png';

const Herosection = () => {
  return (
    <div style = {styles.herosection}>
   <div className='overlay'></div>
<div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl z-10">
  <div class="w-full sm:w-1/2 p-4 flex flex-wrap">
    <div style={styles.textWrapperStyle} className=' typewrite w-full text-left lg:text-5xl text-3xl  font-bold text-white ' data-period="2000" data-type='[ "Re-inventing Learning", "Transformative Education", "Revolutionizing Learning" ]'>
    <span class="wrap"></span>
    </div>
    <div className='w-full text-left text-3xl pt-5 text-white'>
    Develop yourself for yourself
    </div>

              <button style={styles.btnStyle} className='btn'>
                    Get Started 
              </button>

  </div>
  <div class="w-full sm:w-1/2 bg-gray-300 p-4 md:mt-56 md:mb-36 mt-12 mb-12">
    <img src={heroBackground} alt='Hero Image'/>
  </div>
</div>
 
    </div>
  );
}
var TxtType = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
  this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
  this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
  delta = this.period;
  this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
  this.isDeleting = false;
  this.loopNum++;
  delta = 500;
  }

  setTimeout(function() {
  that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('typewrite');
  for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-type');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtType(elements[i], JSON.parse(toRotate), period);
      }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
  document.body.appendChild(css);
};
export default Herosection;
