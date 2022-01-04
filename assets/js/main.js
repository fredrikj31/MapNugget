$(function () {
	new jvm.MultiMap({
		container: $('#map'),
		maxLevel: 1,
		main: {
			map: 'world_mill',
			regionStyle: {
				initial: {
					"fill": './assets/images/nugget.png',
					"fill-opacity": 1,
				},
				hover: {
					"fill-opacity": 0.8,
					"cursor": 'pointer'
				},
			},
		},
		onRegionTipShow: function (e, el) {
			el.html(el.html());
		},
		mapUrlByCode: function (code, multiMap) {
			console.log(code.toLowerCase());

			console.log('https://jvectormap.com/js/jquery-jvectormap-' +
			code.toLowerCase() + '-mill.js');

			return 'https://jvectormap.com/js/jquery-jvectormap-' +
				code.toLowerCase() + '-mill.js';
		}
	});
});