Text {
	text: "Hello world";

	ClickMixin {
		onClicked: { context.language == "ru_RU" ? "default" : "ru_RU" }
	}
}
