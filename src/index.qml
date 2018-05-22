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

		Main { }
		GettingStarted { }
		Download { }
		Lessons { }
		Docs { }

		updatePage: {
			var children = this.children
			log("upatePage children", children, "value", this.pageName)
			for (var i in children) {
				if (children[i].url == this.pageName) {
					this.currentIndex = i
					return
				}
			}
		}

		onCountChanged: {
			log("Count", value)
			if (value)
				this.updatePage()
		}

		onPageNameChanged: { log("onPageNameChanged", value); if (value) this.updatePage() }

		onCompleted: { this.pageName = ""; }
	}

	Item {
		anchors.top: pages.bottom;
		width: 100%;
		height: 140;
	}
}
