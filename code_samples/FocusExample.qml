Row {
	width: 300;
	height: 150;
	spacing: 10;

	WebItem {
		id: leftRect;
		width: 100;
		height: 100;
		anchors.verticalCenter: parent.verticalCenter;
		color: "green";
		focus: true;
		border.width: activeFocus ? 4 : 0;
		border.color: "red";

		Text {
			anchors.centerIn: parent;
			color: "white";
			text: "Click me";
			visible: !parent.activeFocus;
		}

		onClicked: { this.setFocus(); }
		onActiveFocusChanged: { log("Left rectangle is focused"); }
	}

	WebItem {
		id: rightRect;
		width: 100;
		height: 100;
		anchors.verticalCenter: parent.verticalCenter;
		focus: true;
		color: "green";
		border.width: activeFocus ? 4 : 0;
		border.color: "red";

		Text {
			anchors.centerIn: parent;
			color: "white";
			text: "Click me";
			visible: !parent.activeFocus;
		}

		onClicked: { this.setFocus(); }
		onActiveFocusChanged: { log("Right rectangle is focused"); }
	}
}
