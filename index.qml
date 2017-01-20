Item {
	anchors.fill: context;
	property Object state: context.location.state;

	onStateChanged: {
		if (value && value.page && value.page !== "../")
			pages.pageName = value.page;
		else
			pages.pageName = 'main';
	}

	onCompleted: {
		if (!window.location.hostname)
			return
		
		var path = window.location.pathname.split("/")
		var state = {}
		if (path[0])
			state.page = path[0]
		if (path[1])
			state.section = path[1]
		if (path[2])
			state.element = path[2]

		log("pushState", state, window.location.pathname, window.location.pathname)
		this._context.location.pushState(state, window.location.pathname, window.location.pathname) 
	}

	Head { z: 2; }

	ColorTheme { id: colorTheme; }

	PageStack {
		id: pages;
		y: 70;
		width: 100%;
		property string pageName;

		Main { }
		About { }
		Download { }
		Lessons { }
		Docs { }

		//Lessons
		// AnchorsLesson { }
		// LayoutsLesson { }
		// GamepadLesson { }
		// KeyboardLesson { }
		// SignalLesson { }
		// ViewAndModelsLesson { }
		// GlobalsLesson { }
		// InputsLesson { }
		// BasicLesson { }
		// MixinLesson { }
		// EffectsLesson { }

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

	Item {
		anchors.top: pages.bottom;
		width: 100%;
		height: 240;

		Rectangle {
			y: 100;
			width: 100%; height: 140;
			color: "#EDEDED";
		}
	}
}
