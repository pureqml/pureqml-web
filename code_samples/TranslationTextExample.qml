WebItem {
	width: 200;
	height: 200;

	Text {
		anchors.centerIn: parent;
		color: "black";
		font.pixelSize: 25;
		text: qsTr("Hello world");
	}

	ClickMixin {
		onClicked: { context.language == "ru_RU" ? "default" : "ru_RU" }
	}
}
