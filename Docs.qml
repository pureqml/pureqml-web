HistoryPage {
	height: contentCol.contentHeight;
	url: "docs";
	clip: true;

	property Object state: context.location.state;

	onStateChanged: {
		if (value && value.page === "docs"){
			content.visible = true
			if (value.section)
				dataLoader.url = "https://raw.githubusercontent.com/pureqml/pureqml-web/master/doc/json/" + (value.element ? value.section + "/" + value.element : value.section) + ".json"
			else
				dataLoader.url = "https://raw.githubusercontent.com/pureqml/pureqml-web/master/doc/json/core/Item.json"
		}
	}

	LeftMenu {
		id: leftMenu;
	}

	Column {
		id: contentCol;
		x: leftMenu.width;
		width: parent.width < 840 ? 100% : 100% - 256;

		SearchPanel {
			width: 100%;

			onSearch(text): {
				var data = this.parent.parent._data
				if (!data) {
					log("No data")
					return
				}

				content.visible = false

				var res = []
				var txt = text.toLowerCase()
				for (var i in data) {
					var item = data[i]
					var idx = item.text.toLowerCase().indexOf(txt) 
					if (idx > -1) {
						var it = item.text
						var formatted = it.substr(0, idx) + '<b style="color:#43A047">' + it.substr(idx, text.length) + '</b>' + it.substr(idx + text.length)
						res.push({ "text": formatted, "path": item.path })
					}
				}
				searchResults.fill(res)
			}
		}

		DocViewer { id: content; }

		SearchResults {
			id: searchResults;
			visible: !content.visible;
		}
	}

	Resource {
		url: "https://raw.githubusercontent.com/pureqml/pureqml-web/master/doc/json/mkdocs.json";

		onDataChanged: {
			var docs = JSON.parse(value)
			var pages = docs.pages
			var data = []
			for (var p in pages) {
				if (p == "pureqml-web.code_samples" || p == "pureqml-web.lessons" || p == "pureqml-web")
					continue
				data.push({"text": p, "depth": 0, "path": "docs/" + p})
				var content = pages[p].content
				var sorted = Object.keys(content).sort()
				for (var c in sorted) {
					data.push({"text": sorted[c], "depth": 1, "path": "docs/" + p + "/" + sorted[c]})
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
			content.fill(data)
		}
	}
}
