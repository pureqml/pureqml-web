Column {
	signal fillMenu;

	focusItem(idx): {
		var children = this.children
		if (idx < 0 || idx >= children.length) {
			log("Bad index")
			return
		}
		window.scrollTo(0, children[idx].viewY)
	}

	onCompleted: {
		var data = []
		var children = this.children
		for (var i in children) {
			if (children[i] && children[i].title)
				data.push({"text": children[i].title, "hash": children[i].hash})
		}

		this.fillMenu(data)
	}
}
