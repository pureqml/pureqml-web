Column {
	property string text;
	property string title;
	width: 100%;
	spacing: 10;

	H2 {
		anchors.topMargin: 70;
		width: parent.width;
		text: parent.title;
		color: colorTheme.primaryColor;
	}

	Text { 
		text: parent.text;
		color: colorTheme.textColor;
		width: parent.width;
		font.pixelSize: 20;
		wrapMode: Text.WordWrap;
	}
}
