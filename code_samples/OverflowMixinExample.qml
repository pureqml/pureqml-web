Item {
	width: 200;
	height: 200;

	Item {
		width: 150;
		height: 120;
		anchors.centerIn: parent;

		OverflowMixin { value: OverflowMixin.ScrollX; }

		Row {
			height: 100;
			spacing: 10;

			Rectangle { width: 100; height: 100; color: "red"; }
			Rectangle { width: 100; height: 100; color: "blue"; }
			Rectangle { width: 100; height: 100; color: "green"; }
			Rectangle { width: 100; height: 100; color: "red"; }
			Rectangle { width: 100; height: 100; color: "blue"; }
			Rectangle { width: 100; height: 100; color: "green"; }
			Rectangle { width: 100; height: 100; color: "red"; }
			Rectangle { width: 100; height: 100; color: "blue"; }
			Rectangle { width: 100; height: 100; color: "green"; }
		}
	}
}
