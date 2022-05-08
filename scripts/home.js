import {navbar} from "../component/navbar.js"

import {footer} from "../component/footer.js"

let chandan_footer = document.getElementById("footer_chandan");
chandan_footer.innerHTML= footer();
let chandan = document.getElementById("navbar_chandan");
chandan.innerHTML = navbar();



const swiper = new Swiper('.swiper', {
    // Optional parameters

    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,

    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },


});