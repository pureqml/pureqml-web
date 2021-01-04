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

		Text { color: "white"; text: "X"; }

		onClicked: { this.moved = !this.moved }

		Behavior on x { Animation { duration: 1000; easing: "linear"; } }
	}

	Rectangle {
		property bool moved;
		transform.translateX: moved ? 190 : 10;
		y: 120;
		width: 100;
		height: 100;
		color: "green";

		ClickMixin { }

		Text { color: "white"; text: "Translate X"; }

		onClicked: { this.moved = !this.moved }

		Behavior on transform { Animation { duration: 1000; easing: "linear"; } }
	}
}
