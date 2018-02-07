Item {
	width: 250;
	height: 250;

	WebItem {
		x: 50;
		y: 50;
		width: 100;
		height: 100;
		color: "red";

		TextMixin {
			font.pixelSize: 18;
			color: "#fff";
			text: "CLICK ME!";
		}

		onClicked: { this.transform.translateX = this.transform.translateX ? 0 : 100; }

		Behavior on transform { Animation { duration: 300; easing: "linear"; }}
	}
}
