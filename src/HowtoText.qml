Item {
	width: parent.width;
	height: valueText.height;
	property string text;
	property string code;

	Rectangle {
		width: 10; height: 10;
		y: 9; radius: 5;
		color: colorTheme.primaryColor;
	}

	Text {
		id: valueText;
		width: parent.width - 20;
		x: 20;
		font.weight: 300;
		font.pixelSize: 20;
		color: colorTheme.textColor;
		text: parent.text + ' <span style="font-weight: 400; font-family: Roboto Slab;">' + parent.code + '</span>';
		wrapMode: Text.WordWrap;
	}
}