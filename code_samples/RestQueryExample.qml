Rectangle {
	width: 200;
	height: 200;
	color: "blue";

	ClickMixin { }

	Rest {
		id: catApi;
		baseUrl: "https://cat-fact.herokuapp.com";

		Method {
			name: "getAnimalFacts";
			path: "/facts/random?animal_type={type}&amount={amount}";
		}
	}

	Text {
		id: infoText;
		color: "#fff";
		font.pixelSize: 18;
		text: "Click to get a cat fact";
	}

	onClicked: {
		catApi.getAnimalFacts(
			"cat",
			1,
			function(info) { infoText.text = info.text },
			function(err) { log("Failed to get price", err) }
		)
	}
}
