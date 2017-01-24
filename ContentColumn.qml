Column {
	width: parent.width < 860 ? 100% : Math.min(100% - 256, 860);
	x: parent.width < 860 ? 0 : (100% - 256 - width) / 3 + 256;
	clip: true;
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
