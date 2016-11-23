HistoryPage {
	height: Math.max(leftMenu.height, contentRect.height) + 20;
	anchors.top: parent.top;
	anchors.left: parent.left;
	anchors.right: parent.right;
	url: "docs";

	LeftMenu {
		id: leftMenu;
		width: 300;
		anchors.right: contentRect.left;

		onIndexChoosed(idx): {
			var row = this.getRow(idx)
			if (!row || !row.path)
				return
			dataLoader.url = "https://raw.githubusercontent.com/pureqml/pureqml-web/master/doc/json/" + (row.path.file ? row.path.file : row.path)
		}
	}

	HistoryPageContent {
		id: contentRect;
		leftMenuWidth: leftMenu.width;
		height: content.contentHeight + 30;
	
		DocViewer {
			id: content;
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
