Item {
	width: 200;
	height: 200;

	Rectangle {
		width: 100;
		height: 100;
		anchors.top: parent.top;
		anchors.left: parent.left;
		color: "red";
	}

	Rectangle {
		width: 100;
		height: 100;
		anchors.right: parent.right;
		anchors.bottom: parent.bottom;
		color: "blue";
	}
}
