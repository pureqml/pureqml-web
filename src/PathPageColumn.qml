Column {
	property string text;
	property string title;
	property string path;
	width: 100%;
	spacing: 10;

	WebLink {
		href: "https://pureqml.com/" + (parent.path? parent.path + ".html": "");
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
			var a = this.parent.path.split("/");

			this._context.location.pushState({ "page": "lessons", "section": a[1]}, this.href, this.href)
			e.preventDefault();
		}
	}

	MainP {
		text: parent.text;
		horizontalAlignment: Text.AlignLeft;
	}
}
