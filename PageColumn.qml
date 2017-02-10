Column {
	property string text;
	property string title;
	width: 100%;
	spacing: 10;

	H2 {
		id: headText;
		anchors.topMargin: 70;
		width: 100%;
		text: parent.title;
		color: colorTheme.primaryColor;
	}

	P {
		text: parent.text;
		font.pixelSize: 20;
		color: colorTheme.textColor;
	}
}
