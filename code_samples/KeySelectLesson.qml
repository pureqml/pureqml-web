WebItem {
	width: 200;
	height: 200;

	Rectangle {
		id: rect;
		width: 100;
		height: 100;
		anchors.centerIn: parent;
		color: "red";
		focus: true;

		onSelectPressed: {
			this.color = this.color == "red" ? "blue" : "red"
		}
	}

	onClicked: { rect.setFocus() }
}
