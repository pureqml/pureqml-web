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
				hash: "basics";
				title: "Basics";
				text: "Basic rules for pureqml developing";

				ReadMore { url: "basic"; }
			}

			PageColumn {
				hash: "anchors";
				title: "Anchors";
				text: "Each item can can be positionated with anchors. The PureqQML anchors are simillar to the Qt anchors. But has one more value...";

				ReadMore { url: "anchors"; }
			}

			PageColumn {
				hash: "globals";
				title: "Globals";
				text: "Using globals properties you can manipulate page features...";

				ReadMore { url: "globals"; }
			}

			PageColumn {
				hash: "layouts";
				title: "Layouts";
				text: "Usefull controls for content positioning.";

				ReadMore { url: "layouts"; }
			}

			PageColumn {
				hash: "signals";
				title: "Signals";
				text: "";

				ReadMore { url: "signal"; }
			}

			PageColumn {
				hash: "views";
				title: "Views and Models";
				text: "";

				ReadMore { url: "views"; }
			}

			PageColumn {
				hash: "focus";
				title: "Focus";
				text: "The biggest discrepancy with original QML is focus implementation. We're aiming to have \"always-consistent\" focus everywhere...";

				ReadMore { url: "focus"; }
			}

			PageColumn {
				hash: "keyboard";
				title: "Keyboard";
				text: "Keyboard pressing events handling...";

				ReadMore { url: "keyboard"; }
			}

			PageColumn {
				hash: "gamepad";
				title: "Gamepad";
				text: "PureQML support gamepad events handling. Specaial controls were designed to work with gamepads declrative way.";

				ReadMore { url: "gamepad"; }
			}

			PageColumn {
				hash: "inputs";
				title: "Inputs";
				text: "\"Controls\" library provide simple in use interface for using html5 inputs";

				ReadMore { url: "inputs"; }
			}

			PageColumn {
				hash: "mixins";
				title: "Mixins";
				text: "Mixins are very usefull and simple in use features for item extending.";

				ReadMore { url: "mixin"; }
			}

			PageColumn {
				hash: "effects";
				title: "Effects";
				text: "";

				ReadMore { url: "effects"; }
			}

			PageColumn {
				hash: "transforms";
				title: "Transforms";
				text: "";

				ReadMore { url: "effects"; }
			}

			onFillMenu(data): { leftMenu.fillModel(data) }
		}
	}
}
