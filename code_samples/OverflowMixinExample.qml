Item {
	width: 200;
	height: 200;

	Item {
		property Mixin overflow: OverflowMixin { }
		property alias overflowMode: overflow.value;
		width: 150;
		height: 150;
		anchors.centerIn: parent;
		overflowMode: OverflowMixin.ScrollX;

		Row {
			height: parent.height;
			spacin: 10;

			Rectangle { width: 100; height: 100; color: "red"; }
			Rectangle { width: 100; height: 100; color: "red"; }
			Rectangle { width: 100; height: 100; color: "red"; }
			Rectangle { width: 100; height: 100; color: "red"; }
			Rectangle { width: 100; height: 100; color: "red"; }
			Rectangle { width: 100; height: 100; color: "red"; }
			Rectangle { width: 100; height: 100; color: "red"; }
		}
	}
}
