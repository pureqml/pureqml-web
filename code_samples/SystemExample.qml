Item {
	width: 200;
	height: 200;

	Image {
		anchors.fill: parent;
		source: "https://pureqml.com/res/lessons/system/" + (context.system.device == System.Mobile ? "mobile" : (
			context.system.browser == System.Tv ? "tv" : "desktop")) + ".png";

		Image {
			id: osIcon;
			width: 75;
			height: 75;
			anchors.centerIn: parent;
		}
	}

	onCompleted: {
		var os = this._context.system.os.toLowerCase()
		var resPath = "https://pureqml.com/res/lessons/system/"

		if (os.indexOf("android") >= 0)
			osIcon.source = resPath + "android.png"
		else if (os.indexOf("ios") >= 0)
			osIcon.source = resPath + "ios.png"
		else if (os.indexOf("linux") >= 0)
			osIcon.source = resPath + "linux.png"
		else
			osIcon.source = resPath + "windows.png"
	}
}
