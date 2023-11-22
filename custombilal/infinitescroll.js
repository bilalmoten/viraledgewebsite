// const scrollers = document.querySelectorAll(".infscroller");
// // window.addEventListener("DOMContentLoaded", (event) => {
//   // If a user hasn't opted in for recuded motion, then we add the animation
//   // if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
// //   addAnigmation();
//   console.log("animation added");
//   scrollers.forEach((scroller) => {
//     // add data-animated="true" to every `.scroller` on the page
//     scroller.setAttribute("data-animated", true);
//   });


window.addEventListener("DOMContentLoaded", (event) => {
    
    const scrollers = document.querySelectorAll(".infscroller");
    console.log("animation added");
    scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", "true");
        console.log("data-animated added");

    // Make an array from the elements within `.scroller-inner`
    const scrollerInner = scroller.querySelector(".infscroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);

    // For each item in the array, clone it
    // add aria-hidden to it
    // add it into the `.scroller-inner`
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
    });
});

  // }
// });
function addAnigmation() {
  scrollers.forEach((scroller) => {
    // add data-animated="true" to every `.scroller` on the page
    scroller.setAttribute("data-animated", true);
    console.log("data-animated added");

    // Make an array from the elements within `.scroller-inner`
    const scrollerInner = scroller.querySelector(".infscroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);

    // For each item in the array, clone it
    // add aria-hidden to it
    // add it into the `.scroller-inner`
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}
