Column {
	x: parent.width < 860 ? 36 : 276;
	width: parent.width < 860 ? 100% - 36 : Math.min(100% - 276, 960);
	clip: false;
	signal fillMenu;

	Behavior on y { Animation { duration: 300; } }

	onCompleted: {
		var data = []
		var children = this.children
		log("Content location", this._context.location)
		for (var i in children) {
			var child = children[i]
			var d = {}
			if (!child)
				return
			d.text = child.title
			if (child.path)
				d.path = child.path
			if (child.hash)
				d.hash = this._context.location.origin + "/gettingstarted.html" + "#" + child.hash
			if (child.filePath)
				d.filePath = child.filePath
			data.push(d)
		}

		this.fillMenu(data)
	}
}
