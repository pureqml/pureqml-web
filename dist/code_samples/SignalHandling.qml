Item {
	width: 200;
	height: 200;

	Rectangle {
		id: rect;
		width: 100;
		height: 100;
		anchors.centerIn: parent;
		color: "red";
	}

	SignalTestItem {
		onMySignalOccured: {
			rect.color = rect.color == "red" ? "blue" : "red"
		}
	}
}
