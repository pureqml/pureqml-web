Item {
	width: 330;
	height: 50;

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
			width: 100;
			height: 50;
			color: "blue";

			Text {
				id: delegateText;
				anchors.centerIn: parent;
				text: model.text;
				color: "white";
			}
		}
	}
}
