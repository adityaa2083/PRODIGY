const navSearch = document.getElementById("nav_search");

navSearch.addEventListener("click", (e) => {
    navSearch.classList.toggle("open");
});


const scrollRevealOption={
    distance: "50px",
    origin: "bottom",
    duration: 1000,
}

ScrollReaveal().reveal(".header_image img ", {
    ...scrollRevealOption,
    origin: "right",
});

ScrollReaveal().reveal(".header_content .section_subheader", {
    ...scrollRevealOption,
    delay:500,
});

ScrollReaveal().reveal(".header_content h1", {
    ...scrollRevealOption,
    delay: 1000,
});

ScrollReaveal().reveal(".header_content header_btn", {
    ...scrollRevealOption,
    delay: 1500 ,
});


ScrollReaveal().reveal(".feature_card", {
    duration: 1000,
    interval: 500,
});


ScrollReaveal().reveal(".music_content .section_subheader", {
   ...scrollRevealOption,
});

ScrollReaveal().reveal(".music_content p", {
   ...scrollRevealOption,
   delay:500,
});

ScrollReaveal().reveal("music_btn", {
    ...scrollRevealOption,
    delay: 1000,
});


ScrollReaveal().reveal(".discount_content .section_subheader", {
    ...scrollRevealOption,
 });
 
 ScrollReaveal().reveal(".discount_content p", {
    ...scrollRevealOption,
    delay:500,
 });
 
 ScrollReaveal().reveal("discount_btn", {
     ...scrollRevealOption,
     delay: 1000,
 });
