AnimatedSprite {
	property string state;//: "w";
	width: 232; height: 390;
	duration: 500;
	totalFrames: 6;
	repeat: true;
	property bool active;
	property bool walking;
	running: active && !drag.pressed;
	property string name;
	source: colorTheme.resPath + "/s" + name + state + ".png";
	HoverMixin { cursor: "move"; }
	property DragMixin drag: DragMixin { direction: DragMixin.Horizontal; }

	Behavior on x { Animation { duration: parent.drag.pressed || parent.active ? 0 : 100; }}
}
