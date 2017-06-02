 $(function() {
 		var headerHeight = $('.main-header').height();

 		$(document).scroll(function() {
 			var pos = $(document).scrollTop();
 			var parallax = parseInt(pos * 1.3) + 'px';
 			var rgba = (pos / headerHeight) * 1.1;
 			$('.header').css('margin-top', parallax);
 			$('.main-header').css('background', 'rgba(0,0,0,' + rgba);
 		});
 	});