HistoryPage {
	height: Math.max(leftMenu.height, contentRect.height) + 20;
	anchors.top: parent.top;
	anchors.left: parent.left;
	anchors.right: parent.right;
	url: "docs";

	SearchPanel {
		id: search;
		anchors.right: contentRect.left;

		onSearch(text): {
			var data = this.parent._data
			if (!data) {
				log("No data")
				return
			}

			content.visible = false

			var res = []
			for (var p in data.pages) {
				var pageContent = data.pages[p].content
				for (var i in pageContent)
					if (i.toLowerCase().indexOf(text) > -1)
						res.push({ "text": i, "ref": pageContent[i] })
			}

			searchResults.fill(res)
		}
	}

	LeftMenu {
		id: leftMenu;
		width: 300;
		anchors.top: search.bottom;
		anchors.right: contentRect.left;
		anchors.topMargin: 10;

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
		leftMenuWidth: leftMenu.width;
		height: (content.visible ? content.contentHeight : searchResults.contentHeight)+ 30;
	
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
			this.parent._data = JSON.parse(value)
			var docs = this.parent._data
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

			leftMenu.fillModel(data)
		}
	}

	Resource {
		id: dataLoader;

		onDataChanged: {
			var data = JSON.parse(value)
			content.fill(data)
		}
	}

	onCompleted: { dataLoader.url = "https://raw.githubusercontent.com/pureqml/pureqml-web/master/doc/json/core/Item.json" }
}
