Item {
	anchors.fill: context;
	property Object state: context.location.state;

	onStateChanged: {
		if (value && value.page)
			pages.pageName = value.page;
		else
			pages.pageName = 'about';
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

		this._context.location.pushState(state, window.location.pathname, window.location.pathname) 
	}

	Head { z: 1; }

	ColorTheme { id: colorTheme; }

	PageStack {
		id: pages;
		y: 100;
		width: parent.width;
		property string pageName;

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
}
