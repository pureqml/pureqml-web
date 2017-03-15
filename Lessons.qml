HistoryPage {
	property Object state: context.location.state;
	x: 20;
	url: "lessons";
	height: content.height;

	onStateChanged: {
		log("lessons", value)
		if (value && value.page === "lessons"){
			log("lessons", value.page)
			if (value.section && value.section !== "") {
				log ("lessons", value.section)
				content.pageName = value.section;
			} else {
				content.pageName = "main"
			}
		}
	}

	LeftMenu {
		id: leftMenu;
		y: nav.height;

		onOptionChoosed(option): { content.loadLesson(option.filePath) }
	}

	PageStack {
		id: content;
		property string pageName;
		x: parent.width < 860 ? 36 : 256;
		width: parent.width < 860 ? 100% - 36: 100% - 256;

		ContentColumn {
			property string url: "main";
			signal clicked;
			x: 0;
			width: 100%;
			spacing: 30;

			PathPageColumn {
				path: "lessons/basics";
				title: "Basics";
				text: "Basic rules for pureqml developing";
				url: "basics";
				filePath: "pureqml_web.lessons.BasicLesson";
			}

			PathPageColumn {
				path: "lessons/anchors";
				title: "Anchors";
				text: "Each item can can be positionated with anchors. The PureqQML anchors are simillar to the Qt anchors. But has one more value...";
				url: "anchors";
				filePath: "pureqml_web.lessons.AnchorsLesson";
			}

			PathPageColumn {
				path: "lessons/globals";
				title: "Globals";
				text: "Using globals properties you can manipulate page features...";
				url: "globals";
				filePath: "pureqml_web.lessons.GlobalsLesson";
			}

			PathPageColumn {
				path: "lessons/layouts";
				title: "Layouts";
				text: "Usefull controls for content positioning.";
				url: "layouts";
				filePath: "pureqml_web.lessons.LayoutsLesson";
			}

			PathPageColumn {
				path: "lessons/signals";
				title: "Signals";
				text: "";
				url: "signals";
				filePath: "pureqml_web.lessons.SignalLesson";
			}

			PathPageColumn {
				path: "lessons/views";
				title: "Views and Models";
				text: "";
				url: "views";
				filePath: "pureqml_web.lessons.ViewAndModelsLesson";
			}

			PathPageColumn {
				path: "lessons/focus";
				title: "Focus";
				text: "The biggest discrepancy with original QML is focus implementation. We're aiming to have \"always-consistent\" focus everywhere...";
				url: "focus";
				filePath: "pureqml_web.lessons.FocusLesson";
			}

			PathPageColumn {
				path: "lessons/keyboard";
				title: "Keyboard";
				text: "Keyboard pressing events handling...";
				url: "keyboard";
				filePath: "pureqml_web.lessons.KeyboardLesson";
			}

			PathPageColumn {
				path: "lessons/gamepad";
				title: "Gamepad";
				text: "PureQML support gamepad events handling. Specaial controls were designed to work with gamepads declrative way.";
				url: "gamepad";
				filePath: "pureqml_web.lessons.GamepadLesson";
			}

			PathPageColumn {
				path: "lessons/inputs";
				title: "Inputs";
				text: "\"Controls\" library provide simple in use interface for using html5 inputs";
				url: "inputs";
				filePath: "pureqml_web.lessons.InputsLesson";
			}

			PathPageColumn {
				path: "lessons/mixins";
				title: "Mixins";
				text: "Mixins are very usefull and simple in use features for item extending.";
				url: "mixin";
				filePath: "pureqml_web.lessons.MixinLesson";
			}

			PathPageColumn {
				path: "lessons/effects";
				title: "Effects";
				text: "";
				url: "effects";
				filePath: "pureqml_web.lessons.EffectsLesson";
			}

			onClicked(url): { this.parent.loadLesson(url) }

			onFillMenu(data): { log("DATA", data); leftMenu.fillModel(data) }
		}

		Loader {
			id: loader;
			anchors.fill: parent;
			clip: true;
		}

		loadLesson(url): {
			loader.source = url
			content.currentIndex = 1
		}

		onPageNameChanged: {
			var children = this.children
			for (var i in children) {
				if (children[i].url == value) {
					this.currentIndex = i
					return
				}
			}
		}
	}
}
