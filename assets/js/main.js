var data = { "C2.07": 10, "C2.03": 20, };
var occupied = "#dc3545";
var free = "#198754";

$(function () {

	var map;
	var mapRegions = [];
	var restaurants;

	async function getData() {
		await $.getJSON('./assets/data/dk/restaurants.json', function (data) {
			restaurants = data;
		});
	}

	getData().then(
		function (value) {
			let temp = []
			restaurants.map(
				function (h) {
					//console.log({ name: h.name, latLng: [h.coordinates.lat, h.coordinates.lng] });

					temp.push({ name: h.name, latLng: [h.coordinates.lat, h.coordinates.lng] })

					//return { name: h.name, latLng: [h.coordinates.lat, h.coordinates.lng] } 
				}
			),


				map = new jvm.Map({
					map: "dk_mill",
					markers: temp,
					markerStyle: {
						initial: {
							fill: 'yellow',
							stroke: 'red',
						},
					},
					regionStyle: {
						image: "./assets/images/mcdonalds-logo.png",
					},
					container: $('#map'),
					series: {
						regions: [{
							scale: {
								nugget: './assets/images/nugget.png',
							}
						}],
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
				})

			console.log(map)

			// Setting the color of the map to nugget!
			for (let i = 0; i < ObjectLength(map.regions); i++) {
				var data = {}
				data[mapRegions[i]] = "nugget"

				map.series.regions[0].setValues(data);
			}
		},
		function (error) {
			alert(error);
		}
	)


	function ObjectLength(object) {
		var length = 0;
		for (var key in object) {
			if (object.hasOwnProperty(key)) {
				++length;
			}
		}
		return length;
	};
});