Column {
	width: parent.width < 840 ? 100% : 100% - 256;
	signal fillMenu;
	clip: true;

	Behavior on y { Animation { duration: 300; } }

	onCompleted: {
		var data = []
		var children = this.children
		for (var i in children) {
			var child = children[i]
			if (child && child.title)
				data.push({"text": child.title, "path": "#" + child.hash, "link": child.link})
		}

		this.fillMenu(data)
	}
}
