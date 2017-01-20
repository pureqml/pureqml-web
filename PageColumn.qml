Column {
	property string text;
	property string title;
	property string hash;
	property string link;
	width: 100%;
	spacing: 10;

	onHashChanged: { this.element.setAttribute('id', value) }

	H2 {
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
