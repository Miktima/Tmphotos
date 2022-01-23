(function($) {
	
	var galleryGrid;
	var loaderPerc;
	var load_wrap = $("#load_wrap");
	
	$(document).ready(function() {
		
		
		// Gallery page

		
		$('#gallery_nav a').on("click", function() {
			
			var targets = $(this).data("category");
			
			$(this).addClass("active").parent().siblings("li").find('a').removeClass("active");
			
			if ( targets == "all" ) {
				
				$('.grid-item').show();
				
			} else {
			
				$('.grid-item').each(function() {
					
					var $this = $(this);
					var thisCat = $(this).data("category");
										
					if ( thisCat.indexOf(targets) >= 0 ) {
						$this.show();
					} else {
						$this.hide();
					}
					
				});
			
			}
			
			galleryGrid.masonry();
			
			console.log(targets);
			
		return false;
		});
		

		
	});
	
	$(window).on('load', function() {

		
		if ( $('.gallery_grid').length > 0 ) {
 		
			galleryGrid = $('.gallery_grid').masonry({
				columnWidth: '.grid-sizer',
				itemSelector: '.grid-item',
				percentPosition: true
			});
		
		}

		
		// Run animations
		
		
	});
	
	
})(jQuery);