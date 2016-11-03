Item {
	width: 200;
	height: 200;

	Text {
		anchors.centerIn: parent;
		color: "#000";
		text: "Connected devices: " + gdManager.count;
	}

	GamepadManager { id: gdManager; }
}
