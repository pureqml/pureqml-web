Item {
	width: 200;
	height: 200;

	Text {
		id: rectText;
		anchors.centerIn: parent;
		color: "black";
		text: "Click on me";
	}

	WebItem {
		property int clickCount;
		anchors.fill: parent;

		onClicked: { ++this.clickCount }
		onClickCountChanged: { rectText.text = "Click count: " + this.clickCount }
	}
}
