$(document).ready(function(){
	$('.carousel__inner').slick({
		infinite: true,
		speed: 500,
		centerMode: true,
		variableWidth: true,
		autoplay: true,
		autoplaySpeed: 4000,
		prevArrow: '<button type="button" class="slick-prev"><img src="img/btn-left.png"></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="img/btn-right.png"></button>',
		responsive: [
				{
					breakpoint: 992,
					settings: {
					dots: true,
					arrows: false
					}
				}
			]
	 });

	 $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
		$(this)
		  .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
		  .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
	 });

	 function toggleSlide(item) {
		$(item).each(function(i) {
			$(this).on('click', function(e) {
			  e.preventDefault();
			  $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
			  $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active')
			})
		});
	};

	toggleSlide('.catalog-item__link');
	toggleSlide('.catalog-item__link-back');

	//Modal
	$('[data-modal=consultation]').on('click', function(){
		$('.overlay, #consultation').fadeIn(500);
	});

	$('.modal__close').on('click', function(){
		$('.overlay, #consultation, #thanks, #order').fadeOut(500);
	})

	$('.button_mini').each(function(i) {
		$(this).on('click', function() {
			$('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text())
			$('.overlay, #order').fadeIn(500);
		})
	});

	//Отправка писем с формы сайта
	$('form').submit(function(e) {
		e.preventDefault();
		$.ajax({
			type: "POST",
			url: "mailer/smart.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			$('#consultation, #order').fadeOut();
			$('.overlay, #thanks').fadeIn(500);

			$('form').trigger('reset');
		});
		return false;
	});
});