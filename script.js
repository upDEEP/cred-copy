let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".part-2",
    start: "0% 50%", // when the top of the trigger hits the top of the viewport
    end: "50% 60%", // end after scrolling 500px beyond the start
    // markers: true,
    scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
  },
});

tl.to("#imgthree", {
  bottom: "-6vh",
})
  .to("#imgtwo, #imgfour", {
    bottom: "-18vh",
  })
  .to("#imgone, #imgfive", {
    bottom: "-30vh",
  });

let tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: "#part-5",
    start: "40% 50%", // when the top of the trigger hits the top of the viewport
    end: "150% 60%", // end after scrolling 500px beyond the start
    // markers: true,
    pin: true, // pin the trigger element while active
    //duration: 5,
    scrub: 10, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
  },
});

tl2
  .to("#scroll-1", {
    bottom: "60vh",
  })
  .to("#scroll-1", {
    opacity: 0,
  })
  .to(
    "#scroll-2",
    {
      opacity: 1,
    },
    "arrf"
  )
  .to(
    ".phone-img",
    {
      x: "-28%",
    },
    "arrf"
  )
  .to("#scroll-2", {
    bottom: "60vh",
  })
  .to("#scroll-2", {
    opacity: 0,
  })
  .to(
    "#scroll-3",
    {
      opacity: 1,
    },
    "arrs"
  )
  .to(
    ".phone-img",
    {
      x: "-60%",
    },
    "arrs"
  )
  .to("#scroll-3", {
    bottom: "60vh",
  })
  .to("#scroll-3", {
    opacity: 0,
  })
  .to(
    "#scroll-4",
    {
      opacity: 1,
    },
    "arrt"
  )
  .to(
    ".phone-img",
    {
      x: "-84%",
    },
    "arrt"
  );

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
