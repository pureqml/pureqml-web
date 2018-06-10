SiteActivity {
	name: "docs";

	HistoryPage {
		property Object state: context.location.state;
		height: content.contentHeight;

		LeftMenu {
			id: leftMenu;
		}

		DocViewer {
			id: content;
			x: parent.width < 860 ? 20 : 256;
			width: parent.width < 860 ? 100% - 20 : Math.min(100% - 256, 860);
		}

		Resource {
			url: "https://raw.githubusercontent.com/pureqml/pureqml-web/master/doc/json/mkdocs.json";

			onDataChanged: {
				var docs = JSON.parse(value)
				var pages = docs.pages
				var data = []
				for (var p in pages) {
					if (p == "code_samples" || p == "lessons" || p == "src")
						continue
					data.push({"text": '<b>' + p + '</b>', "depth": 0, "path": "docs/" + p})
					var content = pages[p].content
					var sorted = Object.keys(content).sort()
					for (var c in sorted) {
						data.push({"text": sorted[c], "depth": 1, "path": "docs/" + p + "/" + sorted[c]})
					}
				}
				_globals._searchData = data

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

		processState(state): {
			if (state && state.page === "docs") {
				log("Docs state", state)
				if (state.section) {
					log("State changed section:", state.section, "element:", state.element)
					dataLoader.url = "https://raw.githubusercontent.com/pureqml/pureqml-web/master/doc/json/" + (state.element ? state.section + "/" + state.element : state.section) + ".json"
				} else
					dataLoader.url = "https://raw.githubusercontent.com/pureqml/pureqml-web/master/doc/json/core/Item.json"
			}
		}

		onStateChanged: { this.processState(value) }

		onCompleted: {
			var location = this._context.location
			log("Docs location", location)
			if (location && location.state)
				this.processState(location.state)
		}
	}
}
