HistoryPage {
	id: lessonsPage;
	property Object state: context.location.state;
	url: "lessons";
	height: content.height;

	onStateChanged: {
		this._state = value
		this.update()
	}

	LeftMenu {
		id: leftMenu;
		y: 50;
	}

	PageStack {
		id: content;
		property string pageName;
		x: parent.width < 860 ? 36 : 276;
		width: parent.width < 860 ? 100% - 36 : Math.min(100% - 276, 960);

		ContentColumn {
			property string url: "main";
			x: 0;
			width: 100%;
			spacing: 30;

			PathPageColumn {
				path: "lessons/basics";
				title: "Basics";
				text: "Basic rules for pureqml development";
			}

			PathPageColumn {
				path: "lessons/anchors";
				title: "Anchors";
				text: "Each item can can be positionated with anchors. The PureqQML anchors are simillar to the Qt anchors. But have one more value...";
			}

			PathPageColumn {
				path: "lessons/globals";
				title: "Globals";
				text: "Using globals properties you can manipulate page features...";
			}

			PathPageColumn {
				path: "lessons/layouts";
				title: "Layouts";
				text: "Usefull controls for content positioning.";
			}

			PathPageColumn {
				path: "lessons/signals";
				title: "Signals";
				text: "";
			}

			PathPageColumn {
				path: "lessons/views";
				title: "Views and Models";
				text: "";
			}

			PathPageColumn {
				path: "lessons/focus";
				title: "Focus";
				text: "The biggest discrepancy with original QML is focus implementation. We're aiming to have \"always-consistent\" focus everywhere...";
			}

			PathPageColumn {
				path: "lessons/keyboard";
				title: "Keyboard";
				text: "Keyboard pressing events handling...";
			}

			PathPageColumn {
				path: "lessons/gamepad";
				title: "Gamepad";
				text: "PureQML support gamepad events handling. Specaial controls were designed to work with gamepads declrative way.";
			}

			PathPageColumn {
				path: "lessons/inputs";
				title: "Inputs";
				text: "\"Controls\" library provide simple in use interface for using html5 inputs";
			}

			PathPageColumn {
				path: "lessons/mixins";
				title: "Mixins";
				text: "Mixins are very usefull and simple in use features for item extending.";
			}

			PathPageColumn {
				path: "lessons/effects";
				title: "Effects";
				text: "";
			}

			onFillMenu(data): { leftMenu.fillModel(data) }

			onCompleted: { log("main completed") }
		}

		Loader {
			id: loader;
			clip: true;

			onLoaded: {
				if (this.item)
					this.anchors.fill = this.item
				this.anchors.top = this.parent.top;
				this.anchors.left = this.parent.left;
				this.anchors.right = this.parent.right;
			}

			onCompleted: { lessonsPage._loaderReady = true; lessonsPage.update() }
		}

		loadLesson(url): {
			content.currentIndex = 1
			loader.source = url
		}
	}

	update: {
		if (!this._content) {
			this._content = {
				basics: "pureqml_web.lessons.BasicLesson",
				anchors: "pureqml_web.lessons.AnchorsLesson",
				globals: "pureqml_web.lessons.GlobalsLesson",
				layouts: "pureqml_web.lessons.LayoutsLesson",
				signals: "pureqml_web.lessons.SignalLesson",
				views: "pureqml_web.lessons.ViewAndModelsLesson",
				focus: "pureqml_web.lessons.FocusLesson",
				keyboard: "pureqml_web.lessons.KeyboardLesson",
				gamepad: "pureqml_web.lessons.GamepadLesson",
				inputs: "pureqml_web.lessons.InputsLesson",
				mixins: "pureqml_web.lessons.MixinLesson",
				effects: "pureqml_web.lessons.EffectsLesson"
			}
		}
		if (!this._state || !this._loaderReady)
			return

		var state = this._state
		content.currentIndex = 0
		if (state && state.page === "lessons") {
			log("state", state, "page", state.page)
			if (state.section && state.section !== "") {
				log ("lessons", state.section, this._content[state.section])
				content.loadLesson(this._content[state.section])
				content.pageName = state.section;
			} else {
				content.pageName = "main"
			}
		}
	}
}
