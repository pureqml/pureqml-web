Activity {
	id: mainActivityProto;
	width: 500;
	height: 500;
	name: "main";

	Rectangle {
		width: 100%;
		height: 100%;
		color: "red";
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
		width: 250;
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
			text: "Show next activity";
		}

		onClicked: { mainActivityProto.push("next") }
	}

	onCompleted: { log("MAIN ACTIVITY CREATED") }
}
