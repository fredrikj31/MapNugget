var data = { "C2.07": 10, "C2.03": 20, };
var occupied = "#dc3545";
var free = "#198754";

$(function () {

	var map;
	var mapRegions = [];

	function ObjectLength(object) {
		var length = 0;
		for( var key in object ) {
			if( object.hasOwnProperty(key) ) {
				++length;
			}
		}
		return length;
	};
	
	//map = $('#map').vectorMap({
	map = new jvm.Map({
		map: "dk_mill",
		container: $('#map'),
		series: {
			regions: [{
				scale: {
					nugget: './assets/images/nugget.png',
				}
			}]
		},
		labels: {
			regions: {
				render: function (code) {
					//console.log(code);

					mapRegions.push(code);
				},
			},
		},
		onRegionTipShow: function (e, el) {
			el.html(el.html());
		},
	});

	
	// Setting the color of the map to nugget!
	for (let i = 0; i < ObjectLength(map.regions); i++) {
		var data = {}
		data[mapRegions[i]] = "nugget"

		map.series.regions[0].setValues(data);
	}
});