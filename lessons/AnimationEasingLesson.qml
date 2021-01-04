Item {
	width: 300;
	height: 360;

	Rectangle {
		property bool moved;
		x: moved ? 190 : 10;
		y: 10;
		width: 100;
		height: 100;
		color: "red";

		ClickMixin { }

		Text { color: "white"; text: "Linear"; }

		onClicked: { this.moved = !this.moved }

		Behavior on x { Animation { duration: 1000; easing: "linear"; } }
	}

	Rectangle {
		property bool moved;
		x: moved ? 190 : 10;
		y: 120;
		width: 100;
		height: 100;
		color: "green";

		ClickMixin { }

		Text { color: "white"; text: "Ease-in-out"; }

		onClicked: { this.moved = !this.moved }

		Behavior on x { Animation { duration: 1000; easing: "ease-in-out"; } }
	}

	Rectangle {
		property bool moved;
		x: moved ? 190 : 10;
		y: 240;
		width: 100;
		height: 100;
		color: "blue";

		ClickMixin { }

		Text { color: "white"; text: "Cubic-bezier"; }

		onClicked: { this.moved = !this.moved }

		Behavior on x { Animation { duration: 1000; easing: "cubic-bezier(0.1, -0.6, 0.2, 0)"; } }
	}
}
