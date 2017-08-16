ScrollView {
	anchors.fill: context;
	property Object state: context.location.state;

	onStateChanged: {
		log("State", value, "pageName", pages.pageName)
		if (value) {
			if (value.page && value.page !== "")
				pages.pageName = value.page;
			else
				pages.pageName = 'main';
			log("New pagename", pages.pageName)
			window.scrollTo(0, 0)
		}
	}

	onCompleted: {
		if (!window.location.hostname)
			return

		var path = window.location.pathname.split("/")
		var state = {}
		if (path[1])
			state.page = path[1]
		if (path[2])
			state.section = path[2]
		if (path[3])
			state.element = path[3]

		this._context.location.pushState(state, window.location.pathname, window.location.pathname)
	}

	Head { id: nav; z: 2; }

	ColorTheme { id: colorTheme; }

	PageStack {
		id: pages;
		property string pageName;
		y: 50;
		width: 100%;

		onPageNameChanged: {
			var children = this.children
			log("onPageNameChanged", value, "children", children)
			for (var i in children) {
				log("url", children[i].url, "value", value)
				if (children[i].url == value) {
					this.currentIndex = i
					return
				}
			}
			log("=============")
		}

		Main { }
		GettingStarted { }
		Download { }
		Lessons { }
		Docs { }
	}

	Item {
		anchors.top: pages.bottom;
		width: 100%;
		height: 140;
	}
}
