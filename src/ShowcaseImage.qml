WebItem {
	property string source;
	anchors.topMargin: 20;
	width: 100%;
	height: width * 9 / 16;
	clip: true;
	radius: 20;

	Image {
		width: 100% + (parent.hover ? 32 : 0);
		height: 100% + (parent.hover ? 18 : 0);
		x: parent.hover ? -16 : 0;
		y: parent.hover ? -9 : 0;
		source: parent.source;

		Behavior on x, y, width, height { Animation { duration: 1500; } }
	}
}
