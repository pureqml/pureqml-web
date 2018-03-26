Item {
	width: 300;
	height: 300;
	clip: true;

	WebItem {
		property Mixin drag: DragMixin { }
		x: 100;
		y: 100;
		width: 100;
		height: width;
		radius: width / 2;
		color: "red";

		Text {
			anchors.centerIn: parent;
			text: parent.drag.pressed ? "Drop me" : "Drag me";
			color: "white";
		}
	}
}
