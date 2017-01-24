Item {
	width: 200;
	height: 200;

	EmailInput {
		id: emailText;
		width: 150;
		height: 40;
		backgroundColor: "gray";
		color: "white";
		anchors.centerIn: parent;
		font.pixelSize: 18;
	}

	Text {
		anchors.top: emailText.bottom;
		anchors.topMargin: 10;
		anchors.horizontalCenter: parent.horizontalCenter;
		color: emailText.valid ? "green" : "red";
		text: emailText.valid ? "Correct address" : "Incorrect address";
	}
}
