Item {
	width: 200;
	height: 200;
	clip: true;

	TextInput {
		id: textInput;
		width: 100;
		height: 40;
		anchors.centerIn: parent;
		backgroundColor: "green";
		color: "white";
		font.bold: true;
		border.width: 2;
		border.color: "red";
		passwordMode: true;
	}

	Text {
		anchors.top: textInput.bottom;
		anchors.horizontalCenter: parent.horizontalCenter;
		anchors.margins: 10;
		color: "black";
		text: "Password: " + textInput.text;
	}
}
