Activity {
	id: nextActivityProto;
	width: 500;
	height: 500;
	name: "next";

	Rectangle {
		width: 100%;
		height: 100%;
		color: "blue";
	}

	Text {
		y: 10;
		width: 100%;
		color: "#fff";
		font.pixelSize: 32;
		horizontalAlignment: Text.AlignHCenter;
		text: parent.name;
	}

	WebItem {
		width: 150;
		height: 70;
		anchors.centerIn: parent;
		color: hover ? "white" : "grey";
		radius: 5;

		Text {
			width: 100%;
			height: 100%;
			color: "black";
			font.pixelSize: 21;
			verticalAlignment: Text.AlignVCenter;
			horizontalAlignment: Text.AlignHCenter;
			text: "Move back";
		}

		onClicked: { nextActivityProto.pop() }
	}

	onCompleted: { log("NEXT ACTIVITY CREATED") }
}
