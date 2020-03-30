Item {
	width: 100%;
	height: 600;

	Rest {
		id: api;
		baseUrl: "https://api.covid19api.com";

		Method {
			name: "getCountries";
			path: "/countries";
		}

		Method {
			name: "getCountryConfirmed";
			path: "/dayone/country/{country}/status/confirmed";
		}
	}

	ListView {
		id: countriesView;
		y: 10;
		x: 10;
		width: 200;
		height: 200;
		model: ListModel { }
		delegate: WebItem {
			width: 100%;
			height: 24;
			color: activeFocus ? "#ccc" : "#fff";

			Text {
				anchors.fill: parent;
				horizontalAlignment: Text.AlignHCenter;
				verticalAlignment: Text.AlignVCenter;
				font.pixelSize: 14;
				text: model.Country;
				color: "#000";
			}
		}

		onSelectPressed: {
			var row = this.model.get(this.currentIndex)
			api.getCountryConfirmed(
				row.Slug,
				function(res) {
					var confirmedCount = (res && res.length > 0) ? res[res.length - 1].Cases : 0
					statusText.text = "Confirmed: " + confirmedCount
				},
				function(err) { log("Failed to get info", res) }
			)
		}
	}

	Text {
		id: statusText;
		x: 220;
		width: 200;
		color: "#000";
	}

	onCompleted: {
		api.getCountries(function(res) { countriesView.model.assign(res) }, function(err) { log("Failed to get countries", res) })
	}
}
