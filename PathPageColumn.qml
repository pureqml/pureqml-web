PageColumn {
	property string path;
	property string url;

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
		}
	}
}
