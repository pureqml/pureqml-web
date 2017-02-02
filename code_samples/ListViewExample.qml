ListView {
	width: contentWidth;
	height: contentHeight;
	orientation: ListView.Horizontal;
	spacing: 10;
	model: ListModel {
		ListElement { text: "foo"; }
		ListElement { text: "bar"; }
		ListElement { text: "baz"; }
	}
	delegate: Rectangle {
		width: delegateText.width + 20;
		height: delegateText.height + 20;
		color: "blue";

		Text {
			id: delegateText;
			anchors.centerIn: parent;
			text: model.text;
			color: "white";
		}
	}
}
