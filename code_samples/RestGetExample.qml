Rectangle {
	width: 200;
	height: 200;
	color: "red";

	ClickMixin { }

	Rest {
		id: api;
		baseUrl: "https://blockchain.info";

		Method {
			name: "getBitcoinPrice";
			path: "/ticker";
		}
	}

	Text {
		id: bitcoinText;
		color: "#fff";
		font.pixelSize: 18;
		text: "Click to get bitcoin price";
	}

	onClicked: {
		api.getBitcoinPrice(
			function(price) { bitcoinText.text = price.USD.last + "$" },
			function(err) { log("Failed to get price", err) }
		)
	}
}
