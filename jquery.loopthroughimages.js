(function( $ ) {
  $.fn.loopThroughImages = function(options) {
	var images = this;
    var showImageAtIndex = 0;
	loop(images);	// first loop must start immediately
	
	var settings = $.extend( {
      'speed': 2000
    }, options);
	
	function loop(images) {
		images.hide();
		images.each(function(index) {
			if (index === showImageAtIndex) {
				$(this).show();
				return true;
			}
		});
		
		// restart counting
		if (showImageAtIndex === images.size() - 1) {
			showImageAtIndex = 0;
		} else {
			showImageAtIndex++;
		}
	}

	setInterval(function() { loop(images); }, settings.speed);
  };
})( jQuery );