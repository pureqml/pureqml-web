Rectangle {
	width: 300;
	height: 150;
	color: "red";

	Rest {
		id: headersApi;
		baseUrl: "https://blockchain.info";

		// Set common headers for all methods
		function headers(headers) { headers["Content-Type"] = "application/json" }

		Method {
			name: "getUsdValue";
			path: "/tobtc?currency=USD&value=1";

			// Set headers for "getUsdValue" method
			function headers(headers) { headers["Accept-Language"] = "en-US" }
		}

		Method {
			name: "getRubValue";
			path: "/tobtc?currency=RUB&value=1";

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
		text: "Convert USD or RUB to Bitcoin";
	}

	WebItem {
		x: 40;
		y: 50;
		width: 100;
		height: 50;
		color: "blue";

		Text {
			anchors.fill: parent;
			font.pixelSize: 21;
			horizontalAlignment: Text.AlignHCenter;
			verticalAlignment: Text.AlignVCenter;
			color: "#fff";
			text: "1 USD";
		}

		onClicked: {
			headersApi.getUsdValue(
				function(price) { btcText.text = price + " BTC" },
				function(err) { log("Failed to get price", err) }
			)
		}
	}

	WebItem {
		x: 160;
		y: 50;
		width: 100;
		height: 50;
		color: "blue";

		Text {
			anchors.fill: parent;
			font.pixelSize: 21;
			horizontalAlignment: Text.AlignHCenter;
			verticalAlignment: Text.AlignVCenter;
			color: "#fff";
			text: "1 RUB";
		}

		onClicked: {
			headersApi.getRubValue(
				function(price) { btcText.text = price + " BTC" },
				function(err) { log("Failed to get price", err) }
			)
		}
	}
}
