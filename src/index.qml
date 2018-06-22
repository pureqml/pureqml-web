ActivityManager {
	property Object state: context.location.state;
	anchors.fill: context;

	Head { id: head; z: 2; }

	ColorTheme { id: colorTheme; }

	Main { }
	GettingStarted { }
	Download { }
	Lessons { }
	Docs { }

	onStateChanged: { this.replaceTopActivity(value.page ? value.page : "main") }

	onCompleted: {
		var location = this._context.location
		if (location.state) {
			var pageExist = this.findActivity(location.state.page)
			log("PageExist", pageExist, "page", location.state.page, "location")
			this.push(location.state.page && pageExist ? location.state.page : "main")
		} else {
			var pathname = location.pathname
			var args = pathname.split('/')
			if (args.length > 1) {
				var page = args[1]
				this.push(page ? page : "main")
			}
		}
	}
}
