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

	getStartPage(name): {
		var pageExist = this.findActivity(name)
		log("PageExist", pageExist, "page", location.state.page, "location")
		return name && pageExist ? name : "main"
	}

	onStateChanged: { this.replaceTopActivity(this.getStartPage(value)) }

	onCompleted: {
		var location = this._context.location
		if (location.state) {
			this.push(this.getStartPage(location.state.page))
		} else {
			var pathname = location.pathname
			var args = pathname.split('/')
			if (args.length > 1) {
				var page = args[1]
				this.push(this.getStartPage(page))
			}
		}
	}
}
