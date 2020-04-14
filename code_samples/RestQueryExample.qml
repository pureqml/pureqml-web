Rectangle {
	width: 300;
	height: 100;
	color: "blue";

	ClickMixin { }

	Rest {
		id: catApi;
		baseUrl: "https://api.publicapis.org";


		Method {
			name: "getEntries";
			path: "/entries?title={title}&cors={cors}";
		}
	}

	Text {
		id: infoText;
		color: "#fff";
		font.pixelSize: 18;
		text: "Click to get a cat open APIs count";
	}

	onClicked: {
		catApi.getEntries(
			"cat",
			"no",
			function(info) { infoText.text = info.count },
			function(err) { log("Request failed", err) }
		)
	}
}
