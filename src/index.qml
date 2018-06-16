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

	onStateChanged: { log("stateChanged", location, "window", window.location); this.replaceTopActivity(value.page ? value.page : "main") }

	onCompleted: {
		var location = this._context.location
		log("onCompleted", location, "window", window.location)
		this.push(location.state && location.state.page ? location.state.page : "main")
	}
}
