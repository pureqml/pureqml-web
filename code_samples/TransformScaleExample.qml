Item {
	width: 350;
	height: 350;

	Image {
		y: 50;
		x: 50;
		width: 100;
		height: 100;
		source: "https://pureqml.com/res/lessons/grid.jpg";
	}

	Image {
		y: 50;
		x: 200;
		width: 100;
		height: 100;
		source: "https://pureqml.com/res/lessons/grid.jpg";
		transform.rotateX: 30;
		transform.rotateY: 45;
		transform.rotateZ: 60;
	}

	Image {
		y: 200;
		x: 50;
		width: 100;
		height: 100;
		source: "https://pureqml.com/res/lessons/grid.jpg";
		transform.skewX: 20;
		transform.skewY: 10;
	}

	Image {
		y: 200;
		x: 200;
		width: 100;
		height: 100;
		source: "https://pureqml.com/res/lessons/grid.jpg";
		transform.scaleX: 0.5;
		transform.scaleY: 1.5;
	}
}
