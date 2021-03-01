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
 });