
const isInViewport = (element) => {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

document.addEventListener('DOMContentLoaded', () => {
    // Listen for scrolling
    // document.addEventListener("scroll", () => {
    //     const educationTimeline = document.querySelector("#second-list");
    //     const inViewport = isInViewport(educationTimeline);
    //     if (inViewport) {
    //         document.querySelector("#timelineHeading").innerText = "Education";
    //     } else {
    //         document.querySelector("#timelineHeading").innerText = "Employment History";
    //     }
    // });

//     let downArrow = document.querySelector("#btn1");
//     let upArrow = document.querySelector("#btn2");

//     downArrow.onclick = () => {
//         'use strict';
//         document.querySelector("#first-list").style = "top:-620px";
//         document.querySelector("#second-list").style = "top:-620px";
//         downArrow.style = "display:none";
//         upArrow.style = "display:block";
//         document.querySelector("#timelineHeading").innerText = "Education";
//     };

//     upArrow.onclick = () => {
//         'use strict';
//         document.querySelector("#first-list").style = "top:0";
//         document.querySelector("#second-list").style = "top:80px";
//         upArrow.style = "display:none";
//         downArrow.style = "display:block";
//     };
});

