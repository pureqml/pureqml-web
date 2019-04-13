ActivityManager {
	anchors.fill: context;

	MainActivity { }
	NextActivity { }

	onCompleted: { this.push("main") }
}
