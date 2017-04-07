ACF - CSS Margin & Padding Settings
===================================

With the ACF – CSS Margin & Padding Settings you will get one field where you can set margins, paddings, border width, border color, border radius and border styling. Also you can set the background and text color.

![advanced custom field css margin padding settings](http://www.dreihochzwo.de/download/acf-css-settings.jpg)

So you have the possibilities to set CSS style in an options page or for an element on a page/post. Everything in one dialog - no more cluttered settings with a lot of fields for every value.


### Description

**Usage**

The field content is stored in an array. In this array you will get all values from the settings. For margin and padding you will also get the shorthand version for CSS. Note, that for the border width, there is no shorthand, so the &quot;shorthand&quot; will be only the top border value.

```
Array (
	[margin] => 40px 0px 40px 0px
	[border] => 2px solid #3876a5
	[padding] => 10px 10px 10px 10px
	[border-radius] => 10px 10px 10px 10px
	[margin-top] => 40px
	[margin-right] => 0px
	[margin-bottom] => 40px
	[margin-left] => 0px
	[border-top] => 2px
	[border-right] => 2px
	[border-bottom] => 2px
	[border-left] => 2px
	[padding-top] => 10px
	[padding-right] => 10px
	[padding-bottom] => 10px
	[padding-left] => 10px
	[background-color] => #c6c443
	[border-color] => #3876a5
	[color] => #3876a5
	[border-style] => solid
	[border-top-left-radius] => 10px
	[border-bottom-left-radius] => 10px
	[border-top-right-radius] => 10px
	[border-bottom-right-radius] => 10px
)
```
In your page template get the array with `get_field('YOUR_FIELD_NAME')` and grab the values you need from this array. As you see, the array keys correspond to the CSS properties for easy using.

```php
		// get field value
		$css = get_field('YOUR_FIELD_NAME');

		// e.g. ?>
		<div style="margin-right: <?php echo $css['margin-right']; ?>; padding: <?php echo $css['padding']; ?>;">
			....
		</div>

```

### Installation

1. Copy the 'acf-css_margin_padding' folder into your plugins folder
2. Activate the plugin via the Plugins admin page


**This plugin needs the installation/activation of Advanced Custom Fields V5**


### Compatibility

This version works only with ACF 5.


### Changelog

**1.0.2**
* Delete ACF function and add my own for better compatibility of further ACF versions

**1.0.1**
* Make the preview work correctly on Repeater/Flexible Content Fields 

**1.0.0**
* First release
