HistoryPage {
	height: contentRect.height;
	anchors.top: parent.top;
	anchors.left: parent.left;
	anchors.right: parent.right;
	url: "lessons";

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
				title: "Inputs";
				text: "\"Controls\" library provide simple in use interface for using html5 inputs";

				ReadMore { url: "inputs"; }
			}

			PageColumn {
				title: "Mixin";
				text: "Mixins are very usefull and simple in use features for item extending.";

				ReadMore { url: "mixin"; }
			}

			PageColumn {
				title: "Effects";
				text: "";

				ReadMore { url: "effects"; }
			}

			PageColumn {
				title: "Transforms";
				text: "";

				ReadMore { url: "effects"; }
			}

			onFillMenu(data): { leftMenu.fillModel(data) }
		}
	}
}