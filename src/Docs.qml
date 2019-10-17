SiteActivity {
	id: docsPageProto;
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
			log("Docs state", state, "active", docsPageProto.active)
			if (docsPageProto.active) {
				if (state.section) {
					log("State changed section:", state.section, "element:", state.element)
					var section = state.element ? state.section + "/" + state.element : state.section
					dataLoader.url = "https://raw.githubusercontent.com/pureqml/pureqml-web/master/doc/json/" + (section.indexOf(".html") >= 0 ? section.replace(".html", ".json") : (section + ".json"))
				} else {
					dataLoader.url = "https://raw.githubusercontent.com/pureqml/pureqml-web/master/doc/json/core/Item.json"
				}
			}
		}

		onStateChanged: { this.processState(value) }

		onCompleted: {
			var location = this._context.location
			if (location && location.state) {
				this.processState(location.state)
			} else {
				var pathname = location.pathname
				var args = pathname.split('/')
				var state = {}
				if (args.length > 1)
					state.page = args[1]
				if (args.length > 2)
					state.section = args[2]
				if (args.length > 3)
					state.element = args[3]
				this.processState(state)
			}
		}
	}
}
