WebLink {
	property string text;
	property string page;
	href: "http://pureqml.com/" + page;
	width: menuItemText.paintedWidth + 40;
	height: 50;
	radius: 12;
	color: hover ? colorTheme.darkerPrimaryColor : colorTheme.panelColor;

	onClicked(e): {
		if (this.parent.parent.newWindow)
			return;
		e.preventDefault();
		this._context.location.pushState({ page: this.page }, this.text, this.href) 
	} 

	Text {
		id: menuItemText;
		anchors.verticalCenter: parent.verticalCenter;
		x: 20;
		text: parent.text;
		font.pointSize: 15;
		color: parent.hover ? "#424242" : colorTheme.primaryTextColor;

		Behavior on color { Animation { duration: 300; } }
	}

	Behavior on background { Animation { duration: 300; } }
}
