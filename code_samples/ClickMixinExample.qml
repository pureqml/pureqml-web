Item {
	width: 200;
	height: 200;

	Rectangle {
		property Mixin hoverMixin: HoverMixin { }
		property alias hover: hoverMixin.value;
		width: 100;
		height: 100;
		anchors.centerIn: parent;
		color: hover ? "red" : "blue";

		Text {
			id: innerText;
			color: "#fff";
			font.pixelSize: 14;
		}

		onClicked: { innerText.text = "Clicked" }
	}
}
