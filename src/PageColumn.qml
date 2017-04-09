Column {
	property string text;
	property string title;
	width: 100%;
	spacing: 10;

	H2 {
		id: headText;
		anchors.topMargin: 50;
		width: 100%;
		font.weight: 300;
		font.pixelSize: 36;
		text: parent.title;
		color: colorTheme.primaryColor;
	}

	MainP {
		text: parent.text;
		horizontalAlignment: Text.AlignLeft;
	}
}
