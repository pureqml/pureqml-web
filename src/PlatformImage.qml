WebLink {
	width: 80;
	height: 80;
	effects.shadow.color: "#0007";
	effects.shadow.y: hover;
	effects.shadow.blur: hover ? 10 : 0;
	effects.shadow.spread: 0;
	Behavior on boxshadow { Animation { duration: 200; }}
	property ImageMixin img: ImageMixin { 
		fillMode: Image.PreserveAspectFit;
	}
}