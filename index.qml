Item {
	anchors.fill: context;

	LocationManager {
		onPathUpdated: {
			var path = this.getPath()
			if (path.length <= 0)
				return
			var first = path[0].toLowerCase()
			log("Path", path)
			switch (first) {
			case "docs":
				break
			default:
				pages.focusHistoryPage(first)
				break
			}
		}
	}

	LocationState {
		id: locationState;

		onStateChanged: { this.parent.focusHistoryPage() }
	}

	Rectangle {
		anchors.fill: context;
		color: colorTheme.backgroundColor;

		onCompleted: { this.style('position', 'fixed') }
	}

	ColorTheme { id: colorTheme; }

	PageStack {
		id: pages;
		height: contentHeight + 20;
		anchors.top: parent.top;
		anchors.left: parent.left;
		anchors.right: parent.right;
		anchors.topMargin: head.height + 20;
		anchors.leftMargin: 20;
		anchors.rightMargin: 20;

		About { }
		Download { }
		Lessons { }
		Docs { }

		//Lessons
		AnchorsLesson { }
		LayoutsLesson { }
		GamepadLesson { }
		KeyboardLesson { }
		SignalLesson { }
		ViewAndModelsLesson { }
		GlobalsLesson { }
		InputsLesson { }
		BasicLesson { }
		MixinLesson { }
		EffectsLesson { }

		focusHistoryPage(state): {
			var children = this.children
			log("focusHistoryPage", state, "pages", children)
			for (var i in children) {
				if (children[i].url == state) {
					this.currentIndex = i
					head.focusIndex(i)
					return
				}
			}
		}
	}

	Head {
		id: head;

		//onCountChanged: { head.focusIndex(pages.currentIndex) }
		onGoHome: { this._context.location.pushState("home", "home", "index.html") }
	}

	focusHistoryPage(page): {
		var state
		if (!page)
			state = window.history.state
		else
			state = page

		log("State", state)
		if (state)
			pages.focusHistoryPage(state)
	}

	onCompleted: { this.focusHistoryPage(window.location.pathname.replace("/", "")) }
}
