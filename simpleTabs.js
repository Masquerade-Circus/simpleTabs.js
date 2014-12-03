(function ($) {
	"use strict";
	$.fn.simpleTabs = function( fn ) {

			return this.each(function(){
				var a = $(this), t = a.children().filter( ":even" ), tc = a.children().filter( ":odd" ), w = Math.floor(100 / t.length), n = null;
				
				a.css('position') == 'static' ? a.css('position','relative') : n;
				
				tc.addClass('simpleTabContainer');
				
				t.css({'position':'absolute','width': w + '%', 'top': '0', 'cursor' : 'pointer'}).each(function(i){
					$(this).css('left', (w * i) + '%');
				}).on('click', function(){
					tc.css('display', 'none');
					t.removeClass('simpleTabActive');
					$(this).addClass('simpleTabActive').next().css('display', 'block');
					/^f/.test(typeof fn) ? fn.call($(this)) : n;
				}).addClass('simpleTab').eq(0).trigger('click');
				
				setInterval(function(){
					a.css({'padding-top': t.eq(0).outerHeight() + 1 + 'px'});
				},100);
			});
	};
})(jQuery);