HistoryPage {
	height: contentRect.height;
	anchors.top: parent.top;
	anchors.left: parent.left;
	anchors.right: parent.right;
	url: "keyboard";

	LeftMenu {
		id: leftMenu;
		wide: !contentRect.wide;
		anchors.left: parent.left;
		anchors.leftMargin: !parent.bigScreen ? (parent.width - width - contentRect.width) / 2 - 10 : 0;

		onIndexChoosed(idx): { content.focusItem(idx) }
	}

	HistoryPageContent {
		id: contentRect;
		anchors.top: leftMenu.top;
		anchors.topMargin: !wide ? leftMenu.height + 10 : 0;
		height: content.contentHeight + 30;

		ContentColumn {
			id: content;
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

			onFillMenu(data): { leftMenu.fillModel(data) }
		}
	}
}
