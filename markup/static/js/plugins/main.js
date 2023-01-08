$(document).ready(function () {
	$("body").css({'visibility': "visible", "opacity": "1"});
	// forms();

	

	

	
	
	// window.addEventListener('scroll', _.throttle(lazyLoad, 16))
	// window.addEventListener('resize', _.throttle(lazyLoad, 16))
	


	




	

	
	
	new WOW().init();

	$(".m-bg-cont").each(function() {
		var img = $(this).find("img:first-of-type").attr("src");
		$(this).css("background-image", "url(" + img + ")");
	});
	 


	// NEW TTT



	SmoothScroll({
		// Время скролла 400 = 0.4 секунды
		animationTime: 500,
		// Размер шага в пикселях 
		stepSize: 100,
	
		// Дополнительные настройки:
	
		// Ускорение 
		accelerationDelta: 30,
		// Максимальное ускорение
		accelerationMax: 2,
	
		// Поддержка клавиатуры
		keyboardSupport: true,
		// Шаг скролла стрелками на клавиатуре в пикселях
		arrowScroll: 50,
	
		// Pulse (less tweakable)
		// ratio of "tail" to "acceleration"
		pulseAlgorithm: true,
		pulseScale: 4,
		pulseNormalize: 1,
	
		// Поддержка тачпада
		touchpadSupport: true,
	  });





	// ТЕГИ АНИМАЦИЯ

	$(".ctag").mouseover(function(e){
		// положение элемента
		var pos = $(this).offset();
		var elem_left = pos.left;
		var elem_top = pos.top;
		// положение курсора внутри элемента
		var Xinner = e.pageX - elem_left;
		var Yinner = e.pageY - elem_top;
			$(this).find(".btn_hover").css({
				"--x":Xinner,
				"--y":Yinner
			})
			$(this).css({"--x": Xinner, "--y": Yinner})
	  });
	
	$(".ctag-f").click(function() {
		$(this).toggleClass('active')
	})


	// Паралакс

	$('.jarallax').jarallax({
		speed: 0.8,
	});





	





	
	// МЕНЮ НОВОЕ ОТКРЫТИЕ

	$('.header-b__top-menu').click(function() {
		$('.bsmenu').addClass('active')
		$('body').addClass('no-scroll')
		$('html').addClass('no-scroll')
	})
	$('.js-show-menu').click(function() {
		$('.bsmenu').addClass('active')
		$('body').addClass('no-scroll')
		$('html').addClass('no-scroll')
	})

	$('.header__top-menu').click(function() {
		$('.bsmenu').addClass('active')
		$('body').addClass('no-scroll')
		$('html').addClass('no-scroll')
	})
	$('.bsmenu__ov-close').click(function() {
		$('.bsmenu').removeClass('active')
		$('body').removeClass('no-scroll')
		$('html').removeClass('no-scroll')
	})

	
	$(window).scroll(function(event){
		
		var scroll = $(window).scrollTop()
		
		if (scroll > 0) {
			$('.header__textlogo').addClass('hide')
			$('.header__top-a').addClass('active')
			$('.header__fix-as').addClass('hide')
			$('.header__top-menu').addClass('active')
			
			$('.header-b__top-a').addClass('active')
			$('.header-b__fix-as').addClass('hide')
			$('.header-b__top-menu').addClass('active')
		}
		if (scroll <= 0) {
			$('.header__textlogo').removeClass('hide')
			$('.header__top-a').removeClass('active')
			$('.header__fix-as').removeClass('hide')
			$('.header__top-menu').removeClass('active')
			
			$('.header-b__top-a').removeClass('active')
			$('.header-b__fix-as').removeClass('hide')
			$('.header-b__top-menu').removeClass('active')
		}
		
	});


	

})
