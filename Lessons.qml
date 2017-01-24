HistoryPage {
	url: "lessons";
	height: content.height;

	property Object state: context.location.state;

	onStateChanged: {
		log ("lessons", value)
		if (value && value.page === "lessons"){
			log ("lessons", value.page)
			if (value.section && value.section !== "") {
				log ("lessons", value.section)
				content.pageName = value.section;
			}
			else
				content.pageName = "main"
		}
	}

	LeftMenu {
		id: leftMenu;
	}

	PageStack { 
		id: content;
		x: parent.width < 860 ? 0 : 256;
		width: parent.width < 860 ? 100% : Math.min(100% - 256, 860);
		property string pageName;

		onPageNameChanged: {
			var children = this.children
			for (var i in children) {
				if (children[i].url == value) {
					this.currentIndex = i
					return
				}
			}
		}

		ContentColumn {
			width: 100%;
			x: 0;
			property string url: "main";
			spacing: 30;

			PathPageColumn {
				path: "lessons/basics";
				title: "Basics";
				text: "Basic rules for pureqml developing";

				ReadMore { url: "basics"; }
			}

			PathPageColumn {
				path: "lessons/anchors";
				title: "Anchors";
				text: "Each item can can be positionated with anchors. The PureqQML anchors are simillar to the Qt anchors. But has one more value...";

				ReadMore { url: "anchors"; }
			}

			PathPageColumn {
				path: "lessons/globals";
				title: "Globals";
				text: "Using globals properties you can manipulate page features...";

				ReadMore { url: "globals"; }
			}

			PathPageColumn {
				path: "lessons/layouts";
				title: "Layouts";
				text: "Usefull controls for content positioning.";

				ReadMore { url: "layouts"; }
			}

			PathPageColumn {
				path: "lessons/signals";
				title: "Signals";
				text: "";

				ReadMore { url: "signals"; }
			}

			PathPageColumn {
				path: "lessons/views";
				title: "Views and Models";
				text: "";

				ReadMore { url: "views"; }
			}

			PathPageColumn {
				path: "lessons/focus";
				title: "Focus";
				text: "The biggest discrepancy with original QML is focus implementation. We're aiming to have \"always-consistent\" focus everywhere...";

				ReadMore { url: "focus"; }
			}

			PathPageColumn {
				path: "lessons/keyboard";
				title: "Keyboard";
				text: "Keyboard pressing events handling...";

				ReadMore { url: "keyboard"; }
			}

			PathPageColumn {
				path: "lessons/gamepad";
				title: "Gamepad";
				text: "PureQML support gamepad events handling. Specaial controls were designed to work with gamepads declrative way.";

				ReadMore { url: "gamepad"; }
			}

			PathPageColumn {
				path: "lessons/inputs";
				title: "Inputs";
				text: "\"Controls\" library provide simple in use interface for using html5 inputs";

				ReadMore { url: "inputs"; }
			}

			PathPageColumn {
				path: "lessons/mixins";
				title: "Mixins";
				text: "Mixins are very usefull and simple in use features for item extending.";

				ReadMore { url: "mixin"; }
			}

			PathPageColumn {
				path: "lessons/effects";
				title: "Effects";
				text: "";

				ReadMore { url: "effects"; }
			}

			onFillMenu(data): { leftMenu.fillModel(data) }
		}
		//Lessons
		AnchorsLesson { }
		LayoutsLesson { }
		GamepadLesson { }
		KeyboardLesson { }
		SignalLesson { }
		ViewAndModelsLesson { }
		FocusLesson { }
		GlobalsLesson { }
		InputsLesson { }
		BasicLesson { }
		MixinLesson { }
		EffectsLesson { }
	}
}
