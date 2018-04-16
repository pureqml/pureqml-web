WebLink {
	property string icon;
	property string text;
	width: (height - 20) + buttonText.paintedWidth + 30;
	height: 100;
	radius: 10;
	color: hover ? colorTheme.primaryColor : colorTheme.panelColor;
	border.width: 1;
	border.color: !hover ? colorTheme.primaryColor : colorTheme.panelColor;
	effects.shadow.y: hover ? 2 : 0;
	effects.shadow.blur: hover ? 8 : 4;
	effects.shadow.color: colorTheme.shadowColor;
	effects.shadow.spread: 2;

	Image {
		width: height;
		height: parent.height - 20;
		anchors.verticalCenter: parent.verticalCenter;
		x: 10;
		source: colorTheme.resPath + (parent.hover ? "/" : "/colored_") + "icons/" + parent.icon;

		Behavior on background { Animation { duration: 300; } }
	}

	Text {
		id: buttonText;
		anchors.left: parent.left;
		anchors.verticalCenter: parent.verticalCenter;
		anchors.leftMargin: parent.height;
		color: !parent.hover ? colorTheme.primaryColor : colorTheme.panelColor;
		font.pixelSize: 21;
		text: parent.text;

		Behavior on color { Animation { duration: 300; } }
	}

	Behavior on background { Animation { duration: 300; } }
}
