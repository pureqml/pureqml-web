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
			pages.updatePage()
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

		log("pushState", state, "pathname", window.location.pathname)
		this._context.location.pushState(state, window.location.pathname, window.location.pathname)
	}

	Head { id: nav; z: 2; }

	ColorTheme { id: colorTheme; }

	PageStack {
		id: pages;
		property string pageName;
		y: 50;
		width: 100%;

		onPageNameChanged: { log("onPageNameChanged", value); this.updatePage() }

		updatePage: {
			var children = this.children
			log("updatePage", this.pageName, "children", children)
			for (var i in children) {
				log("url", children[i].url, "this.pageName", this.pageName)
				if (children[i].url == this.pageName) {
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

		onCompleted: { this.pageName = ""; log("onCompleted", this.pageName)  }
	}

	Item {
		anchors.top: pages.bottom;
		width: 100%;
		height: 140;
	}
}
