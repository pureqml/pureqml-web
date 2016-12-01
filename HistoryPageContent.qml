Rectangle {
	property int leftMenuWidth: wide ? 200 : 0;
	property int leftMarginvalue: (leftMenuWidth + parent.width - width) / 2;
	property bool wide: context.width > 600;
	width: parent.contentWidth;
	anchors.top: parent.top;
	anchors.left: parent.left;
	anchors.leftMargin: !wide ? 0 : (!parent.bigScreen ? leftMarginvalue : 210);
	color: colorTheme.panelColor;

	Behavior on y { Animation { duration: 300; } }
}
