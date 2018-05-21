WebLink {
	property string icon;
	width: 80;
	height: 80;
	effects.shadow.color: "#0007";
	effects.shadow.y: hover;
	effects.shadow.blur: hover ? 10 : 0;
	effects.shadow.spread: 0;

	ImageMixin {
		width: 100%;
		height: 100%;
		source: parent.icon;
		fillMode: Image.PreserveAspectFit;
	}

	Behavior on boxshadow { Animation { duration: 200; }}
}
