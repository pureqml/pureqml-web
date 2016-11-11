Item {
	width: 250;
	height: 250;

	Rectangle {
		x: 50;
		y: 50;
		z: 2;
		width: 100;
		height: 100;
		color: "red";
		border.width: 2;
		border.color: "black";
	}

	Rectangle {
		x: 100;
		y: 100;
		z: 1;
		width: 100;
		height: 100;
		radius: 10;
		gradient: Gradient {
			GradientStop { position: 0; color: "green"; }
			GradientStop { position: 1; color: "blue"; }
		}
	}
}
