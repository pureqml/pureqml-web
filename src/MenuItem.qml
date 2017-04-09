WebLink {
	property string text;
	property string page;
	href: "http://pureqml.com/" + page;
	width: menuItemText.paintedWidth + 40;
	height: 50;
	color: hover ? "#AED581" : "transparent";

	onClicked(e): {
		if (this.parent.parent.newWindow)
			return;
		e.preventDefault();
		this.parent.parent.open = false;
		this._context.location.pushState({ page: this.page }, "PureQML - " + this.text, this.href) 
	} 

	Text {
		id: menuItemText;
		anchors.verticalCenter: parent.verticalCenter;
		x: 20;
		text: parent.text;
		font.pointSize: 15;
		color: parent.hover ? "#242424" : "#616161";

		Behavior on color { Animation { duration: 300; } }
	}

	Behavior on background { Animation { duration: 300; } }
}
