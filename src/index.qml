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
		log("onCompleted", location, "window", window.location)
		if (location.state) {
			this.push(location.state.page ? location.state.page : "main")
		} else {
			var pathname = location.pathname
			var args = pathname.split('/')
			log("Args", args)
			if (args.length > 0) {
				var page = args[0]
				this.push(page ? page : "main")
			}
		}
	}
}
