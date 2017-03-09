PageColumn {
	signal clicked;
	property string path;
	property string url;
	property string filePath;

	WebLink {
		href: "http://pureqml.com/lessons/" + parent.url;
		anchors.top: parent.top;
		anchors.left: parent.left;
		anchors.right: parent.right;
		anchors.topMargin: 70;
		height: headText.height;

		onClicked(e): {
			var url = this.parent.url
			e.preventDefault();

			this._context.location.pushState({ "page": "lessons", "section": url}, url, this.href)
			this.parent.clicked(this.parent.filePath);
		}
	}

	onClicked(url): {
		if (this.parent.clicked)
			this.parent.clicked(url)
	}
}
