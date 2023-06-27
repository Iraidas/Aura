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
        }
    });
}

export function swiper1() {
    const slider1 = new Swiper('.swiper-1', {
        breakpoints: {
            695: {
                slidesPerView: 'auto',
                spaceBetween: 32,
            },
            280: {
                maxwidth: 296,
                slidesPerView: 1,
                spaceBetween: 32,
                pagination: {
                    el: '.swiper-pagination-1',
                    clickable: true
                },
            }
        }
    });
}