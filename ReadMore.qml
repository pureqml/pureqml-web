WebItem {
	property string url;
	anchors.left: parent.left;
	height: innerText.height;

	Text {
		id: innerText;
		font.weight: 300;
		font.pixelSize: 23;
		color: parent.hover ? colorTheme.darkerPrimaryColor : colorTheme.primaryColor;
		text: "read more »";

		Behavior on color { ColorAnimation { duration: 300; } }
	}

	onClicked: {
		var url = this.url
		if (!url)
			return

		if (url && window.location.hostname)
			this._context.location.pushState(url, url, "?page=" + url)
	}
}
