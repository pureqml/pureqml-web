Item {
	width: 300;
	height: 300;
	clip: true;

	Rectangle {
		height: 40;
		anchors.top: parent.top;
		anchors.left: parent.left;
		anchors.right: parent.right;
		anchors.topMargin: 20;
		color: "#ccc";

		WebItem {
			width: 100;
			height: parent.height;
			color: "#424242";

			DragMixin { direction: DragMixin.Horizontal; }
		}
	}

	Rectangle {
		width: 40;
		anchors.top: parent.top;
		anchors.left: parent.left;
		anchors.bottom: parent.right;
		anchors.leftMargin: 20;
		color: "#ccc";

		WebItem {
			width: parent.width;
			height: 100;
			color: "#424242";

			DragMixin { direction: DragMixin.Vertical; }
		}
	}
}
