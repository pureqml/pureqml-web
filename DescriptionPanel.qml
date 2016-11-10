Rectangle {
	property string icon;
	property string title;
	property string text;
	width: 200;
	height: 350;
	color: "#eee";
	radius: 3;
	effects.shadow.color: "#ccc";
	effects.shadow.x: 1;
	effects.shadow.y: 1;

	Image {
		height: width;
		anchors.top: parent.top;
		anchors.left: parent.left;
		anchors.right: parent.right;
		anchors.margins: 10;
		source: parent.icon;
		fillMode: Image.PreserveAspectFit;
	}

	Text {
		id: titleText;
		anchors.top: parent.top;
		anchors.horizontalCenter: parent.horizontalCenter;
		anchors.topMargin: parent.width - 10;
		color: colorTheme.primaryColor;
		font.weight: 400;
		font.pixelSize: 24;
		text: parent.title;
	}

	Text {
		text: parent.text;
		anchors.top: titleText.bottom;
		anchors.left: parent.left;
		anchors.right: parent.right;
		anchors.margins: 5;
		color: colorTheme.textColor;
		font.weight: 300;
		font.pixelSize: 18;
		wrapMode: Text.WordWrap;
	}
}
