Item {
	property string source;
	anchors.topMargin: 20;
	width: 100%;
	height: width * 9 / 16;
	clip: true;
	radius: 20;

	HoverMixin { id: showcaseHoverMixin; enabled: !head.mobileMode; }

	Image {
		width: 100% + (showcaseHoverMixin.value ? 32 : 0);
		height: 100% + (showcaseHoverMixin.value ? 18 : 0);
		x: showcaseHoverMixin.value ? -16 : 0;
		y: showcaseHoverMixin.value ? -9 : 0;
		source: parent.source;

		Behavior on x, y, width, height { Animation { duration: 1500; } }
	}
}
