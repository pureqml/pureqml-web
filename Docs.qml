HistoryPage {
	minWidth: 270;
	height: Math.max(leftMenu.height, contentRect.height) + 20;
	anchors.top: parent.top;
	anchors.left: parent.left;
	anchors.right: parent.right;
	url: "docs";

	LocationState {
		id: locationState;

		onStateChanged: {
			if (!this.parent.recursiveVisible)
				return

			var state = value

			if (state == this.parent.url) {
				dataLoader.url = "https://raw.githubusercontent.com/pureqml/pureqml-web/master/doc/json/core/Item.json"
			} else {
				state = state.replace(/_/g, "/");
				dataLoader.url = "https://raw.githubusercontent.com/pureqml/pureqml-web/master/doc/json/" + state + ".json"
			}
		}
	}

	SearchPanel {
		id: search;
		anchors.left: leftMenu.left;
		anchors.right: leftMenu.right;

		onSearch(text): {
			var data = this.parent._data
			if (!data) {
				log("No data")
				return
			}

			content.visible = false

			var res = []
			var txt = text.toLowerCase()
			for (var i in data) {
				var item = data[i]
				if (item.text.toLowerCase().indexOf(txt) > -1)
					res.push({ "text": item.text, "ref": item.path })
			}
			searchResults.fill(res)
		}
	}

	LeftMenu {
		id: leftMenu;
		minWidth: parent.minWidth;
		anchors.top: search.bottom;
		anchors.left: parent.left;
		anchors.topMargin: 10;
		anchors.leftMargin: !parent.bigScreen ? (parent.width - width - contentRect.width) / 2 - 10 : 0;
		wide: !contentRect.wide;

		onIndexChoosed(idx): {
			content.visible = true
			var row = this.getRow(idx)
			if (!row || !row.path)
				return
			dataLoader.url = "https://raw.githubusercontent.com/pureqml/pureqml-web/master/doc/json/" + (row.path.file ? row.path.file : row.path)
		}
	}

	HistoryPageContent {
		id: contentRect;
		anchors.top: search.top;
		anchors.topMargin: !wide ? leftMenu.height + search.height + 20 : 0;
		minWidth: parent.minWidth;
		height: (content.visible ? content.contentHeight : searchResults.contentHeight) + 30;
	
		DocViewer { id: content; }

		SearchResults {
			id: searchResults;
			visible: !content.visible;

			onChoosed(ref): {
				if (!ref) {
					log("ref is undefined")
					return
				}
				content.visible = true
				dataLoader.url = "https://raw.githubusercontent.com/pureqml/pureqml-web/master/doc/json/" + ref
			}
		}
	}

	Resource {
		url: "https://raw.githubusercontent.com/pureqml/pureqml-web/master/doc/json/mkdocs.json";

		onDataChanged: {
			var docs = JSON.parse(value)
			var pages = docs.pages
			var data = []
			for (var p in pages) {
				if (p == "code_samples" || p == "lessons" || p == "pureqml-web")
					continue
				data.push({"text": p, "depth": 0, "path": pages[p]})
				var content = pages[p].content
				for (var c in content) {
					data.push({"text": c, "depth": 1, "path": content[c]})
				}
			}
			this.parent._data = data

			leftMenu.fillModel(data)
		}
	}

	Resource {
		id: dataLoader;

		onDataChanged: {
			var data = JSON.parse(value)
			var name = "docs/" + data.name.replace(/\./g, '/');
			if (name && window.location.hostname)
				this._context.location.pushState(name, name, name)
			content.fill(data)
		}
	}

	onVisibleChanged: {
		if (value)
			dataLoader.url = "https://raw.githubusercontent.com/pureqml/pureqml-web/master/doc/json/core/Item.json"
	}
}
