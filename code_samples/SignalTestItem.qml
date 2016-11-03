WebItem {
	signal mySignalOccured;

	anchors.fill: parent;

	onClicked: { this.mySignalOccured(1, "test") }
}
