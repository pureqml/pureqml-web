Item {
	signal search;
	height: 100%;
	z: 4;
	property Mixin hover: HoverMixin { cursor: "pointer"; }

	onClicked: { searchText.setFocus() }

	MaterialIcon {
		anchors.verticalCenter: parent.verticalCenter;
		icon: "search";
		color: parent.hover.value || searchText.activeFocus ? "#424242" : colorTheme.primaryTextColor;
		size: 22;
	}

	SearchInput {
		id: searchText;
		height: 28;
		width: 90%;
		x: 30;
		anchors.verticalCenter: parent.verticalCenter;
		font.pixelSize: 18;
		font.weight: 300;
		color: "#424242";
		placeholder: "Search";

		onTextChanged: {
			searchTimer.restart() 
		}
	}

	Rectangle {
		anchors.top: searchText.bottom;
		anchors.bottomMargin: -3;
		width: searchText.activeFocus ? searchText.width : 60;
		height: 1;
		x: 30;
		color: parent.hover.value || searchText.activeFocus ? "#424242" :"#AAAAAA";
		Behavior on width { Animation { duration: 400; }}
	}

	SearchResults {
		id: searchResults;
		anchors.top: searchText.bottom;
		x: 30;
		width: 90%;
		active: searchText.activeFocus || parent.hover.value;
		onClear: {
			searchText.text = "";
		}
	}

	onSearch(text): {
		var data = _globals._searchData
		if (!data) {
			log("No data")
			return
		}

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

	Timer {
		id: searchTimer;
		interval: 500;

		onTriggered: { this.parent.searchCall() }
	}

	searchCall: {
		if (searchText.text)
			this.search(searchText.text)
		else
			searchResults.fill()
	}
}
