SiteActivity {
	id: lessonsActivityProto;
	name: "lessons";

	HistoryPage {
		id: lessonsPage;
		property Object state: context.location.state;
		height: content.height;

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
					text: "Create your own signals, emit and handle them.";
				}

				PathPageColumn {
					path: "lessons/views";
					title: "Views and Models";
					text: "Use views to represent any collection of data via models.";
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
					text: "Various effects like shadow, blur etc.";
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

				PathPageColumn {
					path: "lessons/loader";
					title: "Loader";
					text: "How to load other components dynamically";
				}

				PathPageColumn {
					path: "lessons/localization";
					title: "Localization";
					text: "How to build a miltilanguage application";
				}

				PathPageColumn {
					path: "lessons/activitylesson";
					title: "Activities";
					text: "Very usefull pattern for app building";
				}

				PathPageColumn {
					path: "lessons/videoplayer";
					title: "VideoPlayer";
					text: "VideoPlayer usage example";
				}

				PathPageColumn {
					path: "lessons/drm";
					title: "DRM";
					text: "DRM video playing";
				}

				onFillMenu(data): { leftMenu.fillModel(data) }

				onCompleted: { log("main completed") }
			}

			Loader {
				id: lessonLoader;
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
				lessonLoader.source = url
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
					loader: "lessons.LoaderLesson",
					localization: "lessons.LocalizationLesson",
					sprite: "lessons.SpriteLesson",
					activitylesson: "lessons.ActivityLesson",
					videoplayer: "lessons.VideoPlayerLesson",
					drm: "lessons.DrmLesson"
				}
			}

			log("Lessons update", this._state, "ready", this._loaderReady)
			if (!this._state || !this._loaderReady)
				return

			var state = this._state
			content.currentIndex = 0
			if (state && state.page === "lessons") {
				var section = state.section.replace(".html", "")
				log("state", state, "page", state.page)
				if (section && section !== "") {
					log ("lessons", section, this._content[section])
					content.loadLesson(this._content[section])
					content.pageName = section;
				} else {
					content.pageName = "main"
				}
			}
		}

		processState(state): {
			if (!lessonsActivityProto.active)
				return
			this._state = state
			this.update()
		}

		onStateChanged: { this.processState(value) }

		onCompleted: {
			var location = this._context.location
			log("Lessons location", location)
			if (location && location.state) {
				this.processState(location.state)
			} else {
				var pathname = location.pathname
				var args = pathname.split('/')
				var state = {}
				if (args.length > 1)
					state.page = args[1]
				if (args.length > 2)
					state.section = args[2]
				if (args.length > 3)
					state.element = args[3]
				log("state", state, "Path", pathname)
				this.processState(state)
			}
		}
	}
}
