WebItem {
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
	effects.shadow.color: "#cccc";
	effects.shadow.spread: 2;

	Image {
		width: height;
		height: parent.height - 20;
		anchors.left: parent.left;
		anchors.verticalCenter: parent.verticalCenter;
		anchors.leftMargin: 10;
		source: "http://pureqml.com/res/colored_icons/" + parent.icon;
		opacity: parent.hover ? 0.0 : 1.0;

		Behavior on opacity { Animation { duration: 300; } }
	}

	Image {
		width: height;
		height: parent.height - 20;
		anchors.left: parent.left;
		anchors.verticalCenter: parent.verticalCenter;
		anchors.leftMargin: 10;
		source: "http://pureqml.com/res/icons/" + parent.icon;
		opacity: parent.hover ? 1.0 : 0.0;

		Behavior on opacity { Animation { duration: 300; } }
	}

	Text {
		id: buttonText;
		anchors.left: parent.left;
		anchors.verticalCenter: parent.verticalCenter;
		anchors.leftMargin: parent.height;
		color: !parent.hover ? colorTheme.primaryColor : colorTheme.panelColor;
		font.pixelSize: 21;
		text: parent.text;

		Behavior on color { ColorAnimation { duration: 300; } }
	}

	Behavior on color { ColorAnimation { duration: 300; } }
}
