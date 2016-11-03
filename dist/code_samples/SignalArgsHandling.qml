Item {
	width: 200;
	height: 200;

	Text {
		id: rectText;
		anchors.centerIn: parent;
		color: "black";
		text: "Click on me";
	}

	SignalTestItem {
		onMySignalOccured(idx, text): {
			rectText.text = "Index: " + idx + ", text: " + text
		}
	}
}
