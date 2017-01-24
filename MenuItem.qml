WebLink {
	property string text;
	property string page;
	href: "http://pureqml.com/" + page;
	width: menuItemText.paintedWidth + 40;
	height: 70;
	radius: 12;
	color: hover ? colorTheme.darkerPrimaryColor : colorTheme.panelColor;


	onClicked(e): {
		e.preventDefault();
		this._context.location.pushState({ page: this.page }, this.text, this.href) 
	} 

	Text {
		id: menuItemText;
		anchors.centerIn: parent;
		horizontalAlignment: Text.AlignHCenter;
		text: parent.text;
		font.pointSize: 15;
		color: parent.hover ? "#424242" : colorTheme.primaryTextColor;

		Behavior on color { Animation { duration: 300; } }
	}

	Behavior on background { Animation { duration: 300; } }
}
