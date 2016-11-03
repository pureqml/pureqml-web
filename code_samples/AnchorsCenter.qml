Item {
	width: 350;
	height: 350;

	Rectangle {
		width: 100;
		height: 100;
		anchors.top: parent.top;
		anchors.horizontalCenter: parent.horizontalCenter;
		color: "red";
	}

	Rectangle {
		width: 100;
		height: 100;
		anchors.right: parent.right;
		anchors.verticalCenter: parent.verticalCenter;
		color: "blue";
	}

	Rectangle {
		width: 100;
		height: 100;
		anchors.centerIn: parent;
		color: "green";
	}
}
