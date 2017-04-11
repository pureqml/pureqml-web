AnimatedSprite {
	width: 200;
	height: 200;
	duration: 600;
	frameCount: 8;
	running: parent.visible;
	source: "res/lessons/bug_sprite.png";
	repeat: running;

	updatePos: {
		var speed = 100
		this.transform.rotate += Math.round((Math.random() * 2 - 0.5) * 45)
		var angle = this.transform.rotate * 1.0 / 180 * 3.1415926
		var x = Math.sin(angle) * speed
		var y = Math.cos(angle) * speed
		this.x = this.x + x > 0 ? (this.x > this.parent.width - 100 ? this.parent.width - 100 : this.x + x) : 0
		this.y = this.y - y > 0 ? (this.y > this.parent.height - 100 ? this.parent.height - 100 : this.y - y) : 0
	}

	Timer {
		interval: 300;
		running: parent.running;
		repeat: running;

		onTriggered: { this.parent.updatePos() }
	}

	Behavior on x, y, transform { Animation { duration: 300; easing: "linear"; } }
}
