Item {
	width: 200;
	height: 200;
	focus: true;

	Rectangle {
		id: rect;
		width: 100;
		height: 100;
		anchors.centerIn: parent;
		color: "red";
		focus: true;

		onSelectPressed: { this.visible = false }
	}

	onKeyPressed: {
		switch (key) {
		case "Select":
			rect.visible = true
			break
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
		}
	}
}
