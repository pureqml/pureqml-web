WebLink {
	property bool horizontal: true;
	property string text;
	width: horizontal ? menuItemText.paintedWidth + 40 : 200;
	height: horizontal ? 100 : 50;
	color: hover ? colorTheme.darkerPrimaryColor : colorTheme.primaryColor;

	onClicked(e): {
		e.preventDefault();
		this.parent.navigate(this.href) 
	} 

	Text {
		id: menuItemText;
		anchors.centerIn: parent;
		horizontalAlignment: Text.AlignHCenter;
		text: parent.text;
		font.pointSize: 15;
		color: colorTheme.primaryTextColor;
		opacity: parent.hover || parent.activeFocus ? 1.0 : 0.8;

		Behavior on opacity { Animation { duration: 300; } }
	}

	Behavior on color { ColorAnimation { duration: 300; } }
}
