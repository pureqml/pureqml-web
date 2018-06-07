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

	onCompleted: { this.push("main") }
}
