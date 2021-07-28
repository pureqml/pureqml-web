WebLink {
	property string text;
	property string page;
	href: "https://pureqml.com/" + (page? page + ".html": "");
	width: menuItemText.paintedWidth + 40;
	height: 50;
	color: hover ? "#AED581" : "transparent";

	onClicked(e): {
		if (this.parent.parent.newWindow)
			return;

		this.parent.parent.open = false;
		this._context.location.pushState({ page: this.page }, "PureQML - " + this.text, this.href)
		e.preventDefault();
	}

	Text {
		id: menuItemText;
		width: 100%;
		anchors.verticalCenter: parent.verticalCenter;
		horizontalAlignment: Text.AlignHCenter;
		text: parent.text;
		font.pointSize: 15;
		color: parent.hover ? "#242424" : "#616161";

		Behavior on color { Animation { duration: 300; } }
	}

	Behavior on background { Animation { duration: 300; } }
}
