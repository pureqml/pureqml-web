HistoryPage {
	height: contentRect.height;
	anchors.top: parent.top;
	anchors.left: parent.left;
	anchors.right: parent.right;
	url: "keyboard";

	LeftMenu { id: leftMenu; onIndexChoosed(idx): { keyboardContent.focusItem(idx) } }

	Rectangle {
		id: contentRect;
		height: keyboardContent.contentHeight + 30;
		anchors.top: parent.top;
		anchors.left: leftMenu.right;
		anchors.right: parent.right;
		anchors.leftMargin: 10;
		color: colorTheme.panelColor;

		ContentColumn {
			id: keyboardContent;
			anchors.top: parent.top;
			anchors.left: parent.left;
			anchors.right: parent.right;
			anchors.margins: 10;
			spacing: 30;

			PageColumn {
				title: "Keyboard";
				text: "Keyboard pressing events handling.";
			}

			PageColumn {
				title: "OnKeyPressed event";
				text: "This event triggered if any registered key is pressed. If key is not registered you will see such log line \"unknown key X\" where X is keycode of unknown key. Key pressed event will be handled only if corresponding item is focused.<be>See simple usage example below - press navigarion keys: Left, Right, Up, Down to move recctangle.<br>CLICK EXAMPLE AREA TO SET FOCUS ON IT!";

				CodeExample {
					codeWidth: parent.width - 20;
					exampleWidth: 200;
					exampleHeight: 200;
					sample: KeyPressLesson { }
					sourceFile: "code_samples/KeyPressLesson.qml";
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
					sourceFile: "code_samples/KeySelectLesson.qml";
				}
			}

			onFillMenu(data): { leftMenu.fillModel(data) }
		}
	}
}
