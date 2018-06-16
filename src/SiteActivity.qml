Activity {
	property bool active;
	width: 100%;
	height: parent.height - head.height;
	anchors.top: parent.top;
	anchors.topMargin: head.height;

	OverflowMixin { value: OverflowMixin.ScrollY; }

	onStarted: { this.active = true }
	onStopped: { this.active = false }
}
