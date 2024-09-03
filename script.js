function loco(){

    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();


}


loco();

function carsormove(){
    var carsor = document.querySelector(".carsor");
    var page1text = document.querySelector(".page1-text")

    page1text.addEventListener("mousemove", function(dets){
        gsap.to(carsor, {
            left:dets.x,
            top:dets.y,
        })
    })
    page1text.addEventListener("mouseenter", function(){
        gsap.to(carsor, {
            scale:1,
            opacity:1,
        })
    })
    page1text.addEventListener("mouseleave", function(){
        gsap.to(carsor, {
            scale:0,
            opacity:0,
        })
    })
}
carsormove();

function page2(){
    gsap.from(".page2 h1",{
        y:100,
        scale:0.2,
        opacity:0,
        stagger:1,
        scrollTrigger:{
           trigger:".page2",
           scroller:".main",
           start:"top 40%",
           end:"top 30%",
           scrub:2,
        }
   })
}

page2();


function swip(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        
      });
}

swip();


function loader(){
     var osaka = gsap.timeline();

     osaka.from(".loder h1",{
        y: -100,
        duration:2,
        stagger:0.2,
        scale:0,
        opacity:0,
     })
     osaka.to(".loder h1",{
        color:"white"
     })
     osaka.to(".loder h1", {
        y:100,
        duration:2,
        stagger:0.3,
        opacity:0,
     })
     osaka.to(".loder",{
        opacity:0,
     })
     osaka.to(".loder",{
        display:"none",
     })
}

loader()

gsap.from(".page1-text h1", {
   opacity:0,
   y:-200,
   duration:2,
})
