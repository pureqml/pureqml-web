PageColumn {
	property string path;

	WebLink {
		href: "http://pureqml.com/" + parent.path;
		anchors.top: parent.top;
		anchors.left: parent.left;
		anchors.right: parent.right;
		anchors.topMargin: 70;
		height: headText.height;

		onClicked(e): {
			e.preventDefault();
			var a = this.parent.path.split("/");

			this._context.location.pushState({ "page": "lessons", "section": a[1]}, this.href, this.href)
		}
	}
}
