 
  new Swiper('.certificate__swiper', {
    direction: 'horizontal',
	navigation: {
		prevEl: '.btn__swiper-prev',
		nextEl: '.btn__swiper-next',
	},
    autoHeight: true,
	slidesPerView: 1,
})

new Swiper('.reviews__swiper', {
	direction: 'horizontal',
	navigation: {
		prevEl: '.btn__swiper-prev',
		nextEl: '.btn__swiper-next',
	},
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
	},
	// loop: true,
    autoHeight: true,
	slidesPerView: 3,
	spaceBetween: 55,
	// initialSlide: 1,
	watchOverflow: true,
	mousewheelControl: false,
})

new Swiper('.partners__swiper', {
	direction: 'horizontal',
	navigation: {
		prevEl: '.btn__swiper-prev',
		nextEl: '.btn__swiper-next',
	},
	// loop: true,
    autoHeight: true,
	slidesPerView: 3,
	spaceBetween: 26,
	// initialSlide: 1,
	watchOverflow: true,
	mousewheelControl: false,
})