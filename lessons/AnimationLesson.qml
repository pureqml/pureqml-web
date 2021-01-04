Item {
	width: 300;
	height: 120;

	Rectangle {
		property bool moved;
		x: moved ? 190 : 10;
		y: 10;
		width: 100;
		height: 100;
		color: "red";

		ClickMixin { }

		onClicked: { this.moved = !this.moved }

		Behavior on x { Animation { duration: 1000; } }
	}
}
