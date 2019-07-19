Item {
	width: 400;
	height: 400;
	clip: true;

	Image {
		id: icon;
		property int dx;
		property int dy;
		x: 175;
		y: 175;
		width: 50;
		height: 50;
		source: "https://pureqml.com/res/lessons/crosshair.png";

		Timer {
			interval: 20;
			running: true;
			repeat: true;

			onTriggered: { icon.move() }
		}

		move: {
			icon.x += 10 * icon.dx
			icon.y += 10 * icon.dy
		}
	}

	GamepadManager {
		id: gamepadManger;

		Gamepad {
			onLeftStickX(val, delta): { icon.dx = val }
			onLeftStickY(val, delta): { icon.dy = val }
			onRightStickX(val, delta): { icon.dx = val }
			onRightStickY(val, delta): { icon.dy = val }
		}
	}
}
