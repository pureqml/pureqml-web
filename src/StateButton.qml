WebLink {
	property string relPath;
	property string text;
	href: "https://pureqml.com/" + (relPath? relPath + ".html": "");
	color: hover ? colorTheme.primaryColor : colorTheme.hTextColor;
	radius: 5;
	border.width: 1;
	border.color: colorTheme.primaryColor;
	width: innerText.width + 20;
	height: innerText.height + 20;

	Text {
		id: innerText;
		x: 10; y: 10;
		font.pointSize: 14;
		font.family: "Roboto Slab";
		color: parent.hover ? colorTheme.hTextColor : "#666666";
		text: parent.text;
	}

	onClicked(e): {
		if (this.relPath === "")
			return

		e.preventDefault();
		var a = this.relPath.split("/");
		var state = {}
		if (a[0])
			state.page = a[0]
		if (a[1])
			state.section = a[1]
		if (a[2])
			state.element = a[2]

		this._context.location.pushState(state, this.href, this.href)
	}

	Behavior on background, color { Animation { duration: 300; } }
}
