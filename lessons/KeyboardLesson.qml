Lesson {
	url: "keyboard";

	PageColumn {
		title: "Keyboard";
		text: "Keyboard pressing events handling.";
	}

	PageColumn {
		title: "OnKeyPressed event";
		text: "This event triggered if any registered key is pressed. If key is not registered you will see such log line \"unknown key X\" where X is keycode of unknown key. Key pressed event will be handled only if corresponding item is focused.<be>See simple usage example below - press navigarion keys: Left, Right, Up, Down to move recctangle. To stop the key pressed event propagation add \"return true;\" by default this handler returns \"false\"<br>CLICK EXAMPLE AREA TO SET FOCUS ON IT!";

		CodeExample {
			codeWidth: parent.width - 20;
			exampleWidth: 200;
			exampleHeight: 200;
			sample: KeyPressLesson { }
		}
	}


	PageColumn {
		title: "Single Key Pressed event";
		text: "If you need to handle just one key it's more usefull to call its own handler:<br>CLICK EXAMPLE AREA TO SET FOCUS ON IT!";

		CodeExample {
			codeWidth: parent.width - 20;
			exampleWidth: 200;
			exampleHeight: 200;
			sample: KeySelectLesson { }
		}
	}
}
