WebLink {
	property string text;
	width: menuItemText.paintedWidth + 40;
	height: 100%;
	color: hover ? colorTheme.darkerPrimaryColor : colorTheme.primaryColor;

	onClicked(e): {
		e.preventDefault();
		this._context.location.pushState({ page: this.href }, this.href, this.href) 
	} 

	Text {
		id: menuItemText;
		anchors.centerIn: parent;
		horizontalAlignment: Text.AlignHCenter;
		text: parent.text;
		font.pointSize: 15;
		color: colorTheme.primaryTextColor;

		Behavior on opacity { Animation { duration: 300; } }
	}

	Behavior on background { Animation { duration: 300; } }
}
