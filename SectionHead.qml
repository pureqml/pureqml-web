Item {
	property string title;
	anchors.left: parent.left;
	anchors.right: parent.right;
	height: titleText.height + 10;

	Text {
		id: titleText;
		anchors.left: parent.left;
		anchors.verticalCenter: parent.verticalCenter;
		color: colorTheme.primaryColor;
		font.weight: 300;
		font.pixelSize: 32;
		text: parent.title; 
	}
}
