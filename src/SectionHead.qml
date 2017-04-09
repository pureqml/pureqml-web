Item {
	property string title;
	anchors.left: parent.left;
	anchors.right: parent.right;
	height: titleText.height + 10;

	H3 {
		id: titleText;
		anchors.left: parent.left;
		anchors.verticalCenter: parent.verticalCenter;
		color: colorTheme.primaryColor;
		wrapMode: Text.NoWrap;
		text: parent.title; 
	}
}
