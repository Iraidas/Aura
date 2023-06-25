import Swiper, { Navigation, Pagination } from 'swiper';

Swiper.use([Navigation, Pagination]);

export function swiper() {

    const slider = new Swiper('.swiper', {
        maxwidth: 1280,
        slidesPerView: 1,
        spaceBetween: 28,
        pagination: {
            el: '.swiper-pagination',
            clickable: true, 
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + (index + 1) + "</span>";
            }
        },
        breakpoints: {
        }
    });
}