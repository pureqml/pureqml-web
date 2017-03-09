Item {
	anchors.fill: context;

	Head { id: nav; z: 2; newWindow: true; }
	ColorTheme { id: colorTheme; }

	LessonsItem {
		id: lessons;
		y: 70;
		width: 100%;
	}

	Item {
		anchors.top: lessons.bottom;
		width: 100%;
		height: 240;

		Rectangle {
			y: 100;
			width: 100%; height: 140;
			color: "#EDEDED";
		}
	}
}
