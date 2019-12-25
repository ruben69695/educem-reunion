// (function($) {
//     "use strict"; // Start of use strict

//     // Magnific popup calls
//     $('.popup-gallery').magnificPopup({
//         delegate: 'a',
//         type: 'image',
//         tLoading: 'Loading image #%curr%...',
//         mainClass: 'mfp-img-mobile',
//         gallery: {
//         enabled: true,
//         navigateByImgClick: true,
//         preload: [0, 1]
//         },
//         image: {
//         tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
//         }
//     });

// })(jQuery); // End of use strict
$(document).ready(function() {
	$('.popup-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title') + '<small>by Rubén Arrebola</small>';
			}
		}
	});
});