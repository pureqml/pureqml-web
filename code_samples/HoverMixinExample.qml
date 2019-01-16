Item {
	width: 200;
	height: 200;

	Rectangle {
		property Mixin hover: HoverClickMixin {
			onValueChanged: { if (!value) myText.text = ""; }
		}
		width: 100;
		height: 100;
		anchors.centerIn: parent;
		color: hover.value ? "red" : "blue";

		TextMixin {
			id: myText;
			color: "#fff";
			font.pixelSize: 14;
		}

		onClicked: { myText.text = "Clicked" }
	}
}
