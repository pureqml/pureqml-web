WebItem {
	width: 200;
	height: 200;
	clip: true;

	Rectangle {
		id: rect;
		x: 50;
		y: 50;
		width: 100;
		height: 100;
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
				return false
			}
		}
	}

	onClicked: { rect.setFocus() }
}
