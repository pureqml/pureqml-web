Column {
	property string text;
	property string title;
	property string path;
	width: 100%;
	spacing: 10;

	WebLink {
		href: "http://pureqml.com/" + parent.path;
		height: headText.height;
		width: 100%;
		anchors.topMargin: 50;
		color: hover ? "#EEEEEE" : "transparent";
		H2 {
			id: headText;
			font.weight: 300;
			width: 100%;
			font.pixelSize: 36;
			text: parent.parent.title;
			color: colorTheme.primaryColor;
		}

		onClicked(e): {
			e.preventDefault();
			var a = this.parent.path.split("/");

			this._context.location.pushState({ "page": "lessons", "section": a[1]}, this.href, this.href)
		}
	}

	MainP {
		text: parent.text;
		horizontalAlignment: Text.AlignLeft;
	}
}
