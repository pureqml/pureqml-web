HistoryPage {
	height: lessonsRectContent.height;
	anchors.top: parent.top;
	anchors.left: parent.left;
	anchors.right: parent.right;
	url: "lessons";

	LeftMenu { id: leftMenu; onIndexChoosed(idx): { lessonsContent.focusItem(idx) } }

	Rectangle {
		id: lessonsRectContent;
		height: lessonsContent.contentHeight + 30;
		anchors.top: parent.top;
		anchors.left: leftMenu.right;
		anchors.right: parent.right;
		anchors.leftMargin: 10;
		color: colorTheme.panelColor;

		ContentColumn {
			id: lessonsContent;
			anchors.top: parent.top;
			anchors.left: parent.left;
			anchors.right: parent.right;
			anchors.margins: 10;
			spacing: 30;

			PageColumn {
				title: "Basic";
				text: "Basic rules for pureqml developing";

				ReadMore { url: "basic"; }
			}

			PageColumn {
				title: "Anchors";
				text: "Each item can can be positionated with anchors. The PureqQML anchors are simillar to the Qt anchors. But has one more value...";

				ReadMore { url: "anchors"; }
			}

			PageColumn {
				title: "Image";
				text: "Using images";

				ReadMore { url: "image"; }
			}

			PageColumn {
				title: "Globals";
				text: "Using globals properties you can manipulate page features...";

				ReadMore { url: "globals"; }
			}

			PageColumn {
				title: "Layouts";
				text: "Usefull controls for content positioning.";

				ReadMore { url: "layouts"; }
			}

			PageColumn {
				title: "Signals";
				text: "";

				ReadMore { url: "signal"; }
			}

			PageColumn {
				title: "Views and Models";
				text: "";

				ReadMore { url: "views"; }
			}

			PageColumn {
				title: "Focus";
				text: "The biggest discrepancy with original QML is focus implementation. We're aiming to have \"always-consistent\" focus everywhere...";

				ReadMore { url: "focus"; }
			}

			PageColumn {
				title: "Keyboard";
				text: "Keyboard pressing events handling...";

				ReadMore { url: "keyboard"; }
			}

			PageColumn {
				title: "Gamepad";
				text: "PureQML support gamepad events handling. Specaial controls were designed to work with gamepads declrative way.";

				ReadMore { url: "gamepad"; }
			}

			PageColumn {
				title: "Mixin";
				text: "Mixins are very usefull and simple in use features for item extending.";

				ReadMore { url: "mixin"; }
			}

			onFillMenu(data): { leftMenu.fillModel(data) }
		}
	}
}
