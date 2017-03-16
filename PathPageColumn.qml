Column {
	property string text;
	property string title;
	property string path;
	width: 100%;
	spacing: 10;

	WebLink {
		href: "http://pureqml.com/" + parent.path;
		height: headText.height;
		anchors.topMargin: 50;
		H2 {
			id: headText;
			width: 100%;
			font.weight: 300;
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
