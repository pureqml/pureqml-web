Lesson {
	url: "gamepad";

	PageColumn {
		title: "Gamepad";
		text: "PureQML support gamepad events handling. Specaial controls were designed to work with gamepads declrative way.";
	}

	PageColumn {
		title: "Gamepad Manager";
		text: "Main control for handling gamepad events. Handle if any gamepad is connected or disonnected and store connected gamepads count value.";

		KeyValueView {
			anchors.leftMargin: 20;
			model: ListModel {
				ListElement { key: "count"; value: "count of connected gamepads"; }
				ListElement { key: "connected"; value: "signal which triggered when any gamepad is connected"; }
				ListElement { key: "disconnected"; value: "signal which triggered when any gamepad is disconnected"; }
			}
		}

		CodeExample {
			codeWidth: parent.width - 20;
			exampleWidth: 200;
			exampleHeight: 200;
			sample: GamepadCodeLesson { }
		}
	}

	PageColumn {
		title: "Gamepad Item";
		text: "To handle each plugged gamepad event you must add \"Gamepad\" item into \"GamepadManager\" scope (see example below). Each gamepad has";

		KeyValueView {
			anchors.leftMargin: 20;
			model: ListModel {
				ListElement { key: "index"; value: "index of corresnoding device"; }
				ListElement { key: "axesCount"; value: "a count of supported axes"; }
				ListElement { key: "buttonsCount"; value: "a count of supported buttons"; }
				ListElement { key: "leftJoystickX"; value: "signal which triggered when left joystick moves horizontaly"; }
				ListElement { key: "leftJoystickY"; value: "signal which triggered when left joystick moves verticaly"; }
				ListElement { key: "rightJoystickX"; value: "signal which triggered when right joystick moves horizontaly"; }
				ListElement { key: "rightJoystickY"; value: "signal which triggered when right joystick moves verticaly"; }
			}
		}

		CodeExample {
			codeWidth: parent.width - 20;
			exampleWidth: 400;
			exampleHeight: 400;
			sample: GamepadHandleLesson { }
		}
	}
}