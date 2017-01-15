HistoryPage {
	url: "docs";
	clip: true;

	property Object state: context.location.state;

	onStateChanged: {
		log("Docs onStateChanged", value)
		if (value && value.page === "docs"){
			if (value.section)
				dataLoader.url = "https://raw.githubusercontent.com/pureqml/pureqml-web/master/doc/json/" + (value.element ? value.section + "/" + value.element : value.section) + ".json"
			else
				dataLoader.url = "https://raw.githubusercontent.com/pureqml/pureqml-web/master/doc/json/core/Item.json"

			log("new url", dataLoader.url)
		}
	}

	SearchPanel {
		id: search;
		width: parent.width;

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
	}

	Column {
		width: parent.width < 840 ? parent.width : parent.width - 200;

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
				log("onChoosed", ref)
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
				data.push({"text": p, "depth": 0, "path": "docs/" + p})
				var content = pages[p].content
				for (var c in content) {
					data.push({"text": c, "depth": 1, "path": "docs/" + p + "/" + c})
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
			log("onDataChanged", data)
			content.fill(data)
		}
	}
}
