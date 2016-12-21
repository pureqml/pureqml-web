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
		color: emailText.correct ? "green" : "red";
		text: emailText.correct ? "Correct address" : "Incorrect address";
	}
}
