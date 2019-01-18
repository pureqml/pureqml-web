WebLink {
	property string icon;
	property string text;
	width: 300;
	height: 100;
	color: colorTheme.panelColor;
	effects.shadow.blur: hover ? 4 : 2;
	effects.shadow.color: colorTheme.primaryColor;
	effects.shadow.spread: hover ? 2 : 0;

	Image {
		x: 10;
		width: height;
		height: parent.height - 20;
		anchors.verticalCenter: parent.verticalCenter;
		source: colorTheme.resPath + "/colored_icons/" + parent.icon;
	}

	Text {
		id: buttonText;
		x: parent.height - 20;
		width: parent.width - x;
		anchors.verticalCenter: parent.verticalCenter;
		horizontalAlignment: Text.AlignHCenter;
		color: colorTheme.primaryColor;
		font.pixelSize: 23;
		text: parent.text;
	}
}
