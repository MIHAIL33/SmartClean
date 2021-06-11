$(function() {

	$("a[href='#callback']").magnificPopup({
		mainClass: 'my-mfp-zoom-in',
		removalDelay: 300,
		type: 'inline',
	});

	$("a[href='#callback']").click(function() {
		var dataForm = $(this).data("form");
		var dataText = $(this).data("text");
		$(".form-callback h4").text(dataText);
		$(".form-callback [name=admin-data]").val(dataForm);
	});

	caclCost();

	var $select = $("form select").selectize();
	var selectizeControl = $select[0].selectize

	$(".choose-button .button").click(function() {
		var value = $(this).attr('id');
		selectizeControl.setValue(value);
		$("html, body").animate({
			scrollTop : $(".s-order").offset().top
		}, 1000);
	});

	$(".arrow-2").click(function() {
		$("html, body").animate({
			scrollTop : $(".s-choose-clean").offset().top
		}, 1000);
	});

	$('.spoiler-body').css({'display':'none'});
	$('.unit-wrap').click(function(){
	   $(this).children('.spoiler-body').slideToggle(500)
		 $(this).find('.circle').toggleClass("rotated-90 rotated-45")
	});

	function heightses() {
		$(".s-choose-clean .choose-wrap h3").height('auto').equalHeights();
		$(".s-choose-clean .choose-wrap .choose-text ul").height('auto').equalHeights();
	}

	$(window).resize(function() {
		heightses();
	});

	heightses();

	$(".toggle-mnu").click(function() {
		$(this).toggleClass("on");
		$(".main-mnu").slideToggle();
	});

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$(".form-callback .success").addClass("active");
			setTimeout(function() {
				// Done Functions
				$(".form-callback .success").removeClass("active");
				th.trigger("reset");
				$.magnificPopup.close();
			}, 3000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

	$('.img-svg').each(function(){
		var $img = jQuery(this);
		var imgID = $img.attr('id');
		var imgClass = $img.attr('class');
		var imgURL = $img.attr('src');

		$.get(imgURL, function(data) {
		// Get the SVG tag, ignore the rest
		var $svg = jQuery(data).find('svg');

		// Add replaced image's ID to the new SVG
		if(typeof imgID !== 'undefined') {
			$svg = $svg.attr('id', imgID);
		}
		// Add replaced image's classes to the new SVG
		if(typeof imgClass !== 'undefined') {
			$svg = $svg.attr('class', imgClass+' replaced-svg');
		}

		// Remove any invalid XML tags as per http://validator.w3.org
		$svg = $svg.removeAttr('xmlns:a');

		// Replace image with new SVG
		$img.replaceWith($svg);

		}, 'xml');
	});

	$("body").append('<div class="top"><i class="fas fa-angle-double-up"></i></div>')

	$("body").on("click", ".top", function() {
		$("html, body").animate({scrollTop: 0}, "slow");
		return false;
	});

	$(window).scroll(function() {
		if($(this).scrollTop() > $(this).height()) {
			$(".top").addClass("active");
		} else {
			$(".top").removeClass("active");
		}
	});

});
