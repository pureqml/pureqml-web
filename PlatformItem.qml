Item {
	property Mixin hoverMixin: HoverMixin {}
	property alias hover: hoverMixin.value;
	property string icon;
	property string text;
	width: 100;
	height: 100;

	Image {
		anchors.fill: parent;
		source: parent.icon;
	}

	Rectangle {
		width: parent.hover ? 180 : 0;
		height: parent.hover ? 40 : 0;
		anchors.top: parent.bottom;
		anchors.left: parent.left;
		color: "#424242ee";
		z: parent.z + 1;
		clip: true;

		Text {
			id: platformText;
			anchors.top: parent.top;
			anchors.left: parent.left;
			anchors.margins: 8;
			color: "#eee";
			text: parent.parent.text;
			font.pixelSize: 18;
		}

		Behavior on y, height, width { Animation { duration: 300; } }
	}
}
