Item {
	width: 400;
	height: 400;
	clip: true;

	Image {
		id: icon;
		property int dx;
		property int dy;
		width: 50;
		height: 50;
		anchors.centerIn: parent;
		source: "res/lessons/crosshair.png";

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
