SiteActivity {
	id: lessonsActivityProto;
	property bool active;
	name: "lessons";

	HistoryPage {
		id: lessonsPage;
		property Object state: context.location.state;
		height: content.height;

		onStateChanged: {
			if (!lessonsActivityProto.active)
				return
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

				PathPageColumn {
					path: "lessons/transform";
					title: "Transform";
					text: "Each items has a 'transform' property to change its perspective, position, scale, scew and rotation";
				}

				PathPageColumn {
					path: "lessons/sprite";
					title: "Sprites";
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
					basics: "lessons.BasicLesson",
					anchors: "lessons.AnchorsLesson",
					globals: "lessons.GlobalsLesson",
					layouts: "lessons.LayoutsLesson",
					signals: "lessons.SignalLesson",
					views: "lessons.ViewAndModelsLesson",
					focus: "lessons.FocusLesson",
					keyboard: "lessons.KeyboardLesson",
					gamepad: "lessons.GamepadLesson",
					inputs: "lessons.InputsLesson",
					mixins: "lessons.MixinLesson",
					effects: "lessons.EffectsLesson",
					transform: "lessons.TransformLesson",
					sprite: "lessons.SpriteLesson"
				}
			}

			log("Lessons update", this._state, "ready", this._loaderReady)
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

	onStarted: { this.active = true }
	onStopped: { this.active = false }
}
