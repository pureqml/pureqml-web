Item {
	width: 300;
	height: 300;
	clip: true;

	WebItem {
		property Mixin drag: DragMixin { }
		width: 100;
		height: width;
		anchors.centerIn: parent;
		radius: width / 2;
		color: "red";

		Text {
			anchors.centerIn: parent;
			text: parent.drag.pressed ? "Drop me" : "Drag me";
			color: "white";
		}
	}
}
