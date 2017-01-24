WebLink {
	property string url;
	href: "http://pureqml.com/lessons/" + url;
	anchors.left: parent.left;
	height: innerText.height;

	Text {
		id: innerText;
		font.weight: 300;
		font.pixelSize: 23;
		color: parent.hover ? colorTheme.textColor : colorTheme.primaryColor;
		text: "read more »";

		Behavior on color { ColorAnimation { duration: 300; } }
	}

	onClicked(e): {
		e.preventDefault();

		this._context.location.pushState({ "page": "lessons", "section": this.url}, this.url, this.href) 
	}
}
