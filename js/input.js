(function($){
	
	var s;

	$('.acf-css-checkall').live( 'click', function() {
		$(this).toggleClass('checked');
	});

	$('.acf-css-margin').live( 'change', function() {
		s = $(this).val();
		checkproperty(s);
		$(this).val(s);
		if ( $('.acf-margin-checkall').hasClass('checked') ) {
			$('.acf-css-margin').each( function() {
				$(this).val(s);
			});
		}
		var marginShort = $('.acf-css-margin-top').val() + ' ' + $('.acf-css-margin-right').val() + ' ' + $('.acf-css-margin-bottom').val() + ' ' + $('.acf-css-margin-left').val();
		$('.acf-css-margin-shorthand').val(marginShort);
	});

	$('.acf-css-border').live( 'change', function() {
		s = $(this).val();
		checkproperty(s);
		$(this).val(s);
		if ( $('.acf-border-checkall').hasClass('checked') ) {
			$('.acf-css-border').each( function() {
				$(this).val(s);
			});
		}
		var borderShort = $('.acf-css-border-top').val();
		$('.acf-css-border-shorthand').val(borderShort);
	});	

	$('.acf-css-padding').live( 'change', function() {
		s = $(this).val();
		checkproperty(s);
		$(this).val(s);
		if ( $('.acf-padding-checkall').hasClass('checked') ) {
			$('.acf-css-padding').each( function() {
				$(this).val(s);
			});
		}
		var paddingShort = $('.acf-css-padding-top').val() + ' ' + $('.acf-css-padding-right').val() + ' ' + $('.acf-css-padding-bottom').val() + ' ' + $('.acf-css-padding-left').val();
		$('.acf-css-padding-shorthand').val(paddingShort);
	});

	$('.acf-css-border-radius').live( 'change', function() {
		s = $(this).val();
		checkproperty(s);
		$(this).val(s);

		if ( $('.acf-border-radius-checkall').hasClass('checked') ) {
			$('.acf-css-border-radius').each( function() {
				$(this).val(s);
			});
		}
		var borderradiusShort = $('.acf-css-border-radius_topleft').val() + ' ' + $('.acf-css-border-radius_topright').val() + ' ' + $('.acf-css-border-radius_bottomright').val() + ' ' + $('.acf-css-border-radius_bottomleft').val();
		$('.acf-css-borderradius-shorthand').val(borderradiusShort);
		$('.acf-css-layout-border').css({
			"border-top-left-radius": $('.acf-css-border-radius_topleft').val(),
			"border-top-right-radius": $('.acf-css-border-radius_topright').val(),
			"border-bottom-right-radius": $('.acf-css-border-radius_bottomright').val(),
			"border-bottom-left-radius": $('.acf-css-border-radius_bottomleft').val(),
		});
	});

	$('.border-style').live( 'change', function() {		
		$('.acf-css-layout-border').css({
			"border-style": $(this).val(),
		})
	});
/*
	$('.acf-css-border-color-field').wpColorPicker({
		hide: true,
		change: function(event, ui) {
			// change the border-color
			$(".acf-css-layout-border").css( 'border-color', ui.color.toString());
		}
	});

	$('.acf-css-border-color-settings .wp-picker-clear').on('click', function() {
		$(".acf-css-layout-border").css( 'border-color', 'transparent');
	});

	$('.acf-css-back-color-field').wpColorPicker({
		hide: true,
		change: function(event, ui) {
			// change the background-color
			$(".acf-css-layout-padding").css( 'background', ui.color.toString());
			$(".acf-css-layout-border").css( 'background', ui.color.toString());
			$(".acf-css-layout-padding").css( 'border-style', 'none');
		}
	});

	$('.acf-css-back-color-settings .wp-picker-clear').on('click', function() {
		$(".acf-css-layout-padding").css( 'background', 'transparent');
		$(".acf-css-layout-padding").css( 'border-style', 'dashed');
	});

	$('.acf-css-text-color-field').wpColorPicker({
		hide: true,
		change: function(event, ui) {
			// change the border-color
			$(".acf-css-center-caption p").css( 'color', ui.color.toString());
		}
	});

	$('.acf-css-text-color-settings .wp-picker-clear').on('click', function() {
		$(".acf-css-center-caption p").css( 'color', 'inherit');
	});
*/
	$('.select2-container.border-style').select2({
		data:[
			{id:'none',text:acf._e('css_margin_padding', 'none')},
			{id:'solid',text:acf._e('css_margin_padding', 'solid')},
			{id:'dashed',text:acf._e('css_margin_padding', 'dashed')},
			{id:'dotted',text:acf._e('css_margin_padding', 'dotted')},
			{id:'double',text:acf._e('css_margin_padding', 'double')},
			{id:'groove',text:acf._e('css_margin_padding', 'groove')},
			{id:'ridge',text:acf._e('css_margin_padding', 'ridge')},
			{id:'inset',text:acf._e('css_margin_padding', 'inset')},
			{id:'outset',text:acf._e('css_margin_padding', 'outset')}
		],
		formatNoMatches: function(term) {
			return acf._e('css_margin_padding', 'nostyle');
		}
	});

	$('.acf-css-info').live('click', function() {
		$('.infotext').slideToggle();
	});

	var checkproperty = function( value) {
		if ( $.isNumeric(value) ) {
			s = value + 'px';
			return s;
		} else if ( value.indexOf('px') > -1  || value.indexOf('%') > -1  || value.indexOf('em') > -1  ) {
			var checkPx  = s.replace("px", "");
			var checkPct = s.replace("%", "");
			var checkEm  = s.replace("em", "");
			if ( $.isNumeric(checkPx) || $.isNumeric(checkPct) || $.isNumeric(checkEm) ) {
				s = value;
				return s;
			} else {
				s = "0px";
				return s;
			}
		} else {
			s = "0px";
			return s;
		}
	};

})(jQuery);
