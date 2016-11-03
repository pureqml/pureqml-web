WebItem {
	width: 200;
	height: 200;

	Rectangle {
		id: rect;
		width: 100;
		height: 100;
		anchors.centerIn: parent;
		color: "red";
		focus: true;

		onKeyPressed: {
			switch (key) {
			case "Left":
				rect.x -= 10 
				break
			case "Right":
				rect.x += 10 
				break
			case "Up":
				rect.y -= 10 
				break
			case "Down":
				rect.y += 10 
				break
			default:
				event.accepted = false
			}
		}
	}

	onClicked: { rect.setFocus() }
}
