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
	breakpoints: {
		1163: {
			spaceBetween: 55,
			slidesPerView: 3,
		},
		942: {
			slidesPerView: 3,
		},
		769: {
			slidesPerView: 2,
			spaceBetween: 20,
			// slidesPerView: 2,
		},
		320: {
			slidesPerView: 1,
			spaceBetween: 0,
		},
		// 576: {
		// 	slidesPerView: 'auto',
		// },
		// 320: {
		// 	slidesPerView: 2,
		// 	spaceBetween: 8,
		// }
	},
	// loop: true,
    autoHeight: true,
	// slidesPerView: 3,
	// spaceBetween: 55,
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
	breakpoints: {
		992: {
			spaceBetween: 26,
			slidesPerView: 3,
		},
		768: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
	},
	// loop: true,
    autoHeight: true,
	// initialSlide: 1,
	watchOverflow: true,
	mousewheelControl: false,
})


new Swiper('.certificate__swiper', {
    direction: 'horizontal',
	navigation: {
		prevEl: '.btn__swiper-prev',
		nextEl: '.btn__swiper-next',
	},
    autoHeight: true,
	slidesPerView: 1,
})
