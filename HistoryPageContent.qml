Rectangle {
	property int leftMenuWidth: 200;
	width: parent.contentWidth;
	anchors.top: parent.top;
	anchors.left: parent.left;
	anchors.leftMargin: (!parent.bigScreen ? (leftMenuWidth + parent.width - width) / 2 : leftMenuWidth + 10);
	color: colorTheme.panelColor;
}
