Column {
	x: parent.width < 860 ? 36 : 256;
	width: parent.width < 860 ? 100% - 36 : Math.min(100% - 256, 860);
	clip: false;
	signal fillMenu;

	Behavior on y { Animation { duration: 300; } }

	onCompleted: {
		var data = []
		var children = this.children
		for (var i in children) {
			var child = children[i]
			var d = {}
			if (!child)
				return
			d.text = child.title
			if (child.path)
				d.path = child.path
			if (child.hash)
				d.hash = "#" + child.hash
			data.push(d)
		}

		this.fillMenu(data)
	}
}
