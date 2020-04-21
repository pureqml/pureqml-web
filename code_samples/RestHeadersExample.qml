Rectangle {
	width: 300;
	height: 150;
	color: "red";

	Rest {
		id: headersApi;
		baseUrl: "https://api.publicapis.org";

		// Set common headers for all methods
		function headers(headers) { headers["Accept"] = "*/*" }

		Method {
			name: "getEntries";
			path: "/entries?title=cat&cors=no";

			// Set headers for "getUsdValue" method
			function headers(headers) { headers["Accept-Language"] = "en-US" }
		}

		Method {
			name: "getRandom";
			path: "/random?title=cat&cors=no";

			// Set headers for "getRubValue" method
			function headers(headers) { headers["Accept-Language"] = "ru-RU" }
		}
	}

	Text {
		id: btcText;
		width: 100%;
		color: "#fff";
		font.pixelSize: 21;
		horizontalAlignment: Text.AlignHCenter;
		text: "Try API requests";
	}

	WebItem {
		y: 50;
		width: 140;
		height: 50;
		color: "blue";

		Text {
			anchors.fill: parent;
			font.pixelSize: 21;
			horizontalAlignment: Text.AlignHCenter;
			verticalAlignment: Text.AlignVCenter;
			color: "#fff";
			text: "Get first API";
		}

		onClicked: {
			headersApi.getEntries(
				function(res) { btcText.text = res.entries[0].Link },
				function(err) { log("Failed to get entries", err) }
			)
		}
	}

	WebItem {
		x: 150;
		y: 50;
		width: 140;
		height: 50;
		color: "blue";

		Text {
			anchors.fill: parent;
			font.pixelSize: 21;
			horizontalAlignment: Text.AlignHCenter;
			verticalAlignment: Text.AlignVCenter;
			color: "#fff";
			text: "Get random";
		}

		onClicked: {
			headersApi.getRandom(
				function(res) { btcText.text = res.entries[0].Link },
				function(err) { log("Failed to get random entry", err) }
			)
		}
	}
}
