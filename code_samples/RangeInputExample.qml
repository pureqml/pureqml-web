Item {
	width: 200;
	height: 200;

	RangeInput {
		id: rangeInput;
		width: 150;
		height: 30;
		min: -42;
		max: 42;
		step: 2;
		anchors.centerIn: parent;
	}

	Text {
		anchors.top: rangeInput.bottom;
		anchors.horizontalCenter: parent.horizontalCenter;
		text: rangeInput.value;
		color: "black";
	}
}
