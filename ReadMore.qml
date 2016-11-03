TextHover {
	property string url;
	anchors.left: parent.left;
	font.weight: 300;
	font.pixelSize: 23;
	color: colorTheme.primaryColor;
	text: "read more »";

	onClicked: {
		var url = this.url
		if (!url)
			return

		if (url && window.location.hostname)
			this._context.location.pushState(url, url, "?page=" + url)
	}
}
