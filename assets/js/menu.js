/*
  Slidemenu
*/
(function () {
	var $body = document.body
		, $menu_trigger = $body.getElementsByClassName('menu-trigger')[0];

	if (typeof $menu_trigger !== 'undefined') {
		$menu_trigger.addEventListener('click', function () {
			$body.className = ($body.className == 'menu-active') ? '' : 'menu-active';
		});
	}

}).call(this);

function meet(url, title, w, h) {
	var dualScreenLeft = window.screenLeft != undefined ? window.screenLeft : screen.left;
	var dualScreenTop = window.screenTop != undefined ? window.screenTop : screen.top;

	width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
	height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;

	var left = ((width / 2) - (w / 2)) + dualScreenLeft;
	var top = ((height / 2) - (h / 2)) + dualScreenTop;
	var newWindow = window.open('https://meet.google.com/quw-ghqj-bfr?pli=1', 'Meet personalizado', 'scrollbars=yes, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);

	// Puts focus on the newWindow  
	if (window.focus) {
		newWindow.focus();
	}
}