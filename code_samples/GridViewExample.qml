GridView {
	width: 330;
	height: 330;
	spacing: 10;
	model: ListModel {
		ListElement { text: "1"; }
		ListElement { text: "2"; }
		ListElement { text: "3"; }
		ListElement { text: "4"; }
		ListElement { text: "5"; }
		ListElement { text: "6"; }
	}
	delegate: Rectangle {
		width: parent.cellWidth;
		height: parent.cellHeight;
		color: "blue";

		Text {
			id: delegateText;
			anchors.centerIn: parent;
			text: model.text;
			color: "white";
			font.pixelSize: 24;
		}
	}
}
