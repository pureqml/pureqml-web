ActivityManager {
	width: 500;
	height: 500;

	MainActivity { }
	NextActivity { }

	onCompleted: { this.push("main") }
}
