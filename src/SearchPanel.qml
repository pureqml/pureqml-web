Item {
	signal search;
	height: 50;
	z: 4;
	property bool searchFocused: searchText.activeFocus || searchResults.visible;
	property Mixin hover: HoverClickMixin { cursor: "pointer"; }

	onClicked: { searchText.setFocus() }

	MaterialIcon {
		anchors.verticalCenter: parent.verticalCenter;
		icon: "search";
		color: parent.hover.value || searchText.activeFocus ? "#424242" : colorTheme.primaryTextColor;
		size: 18;
	}

	SearchInput {
		id: searchText;
		height: 28;
		width: 100% - 30;
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
		anchors.bottomMargin: -4;
		width: searchText.activeFocus ? searchText.width + 30 : 80;
		height: 1;
		x: 0;
		color: parent.hover.value || searchText.activeFocus ? "#A0B3A2" :"#AAAAAA";
		Behavior on width { Animation { duration: 400; }}
	}

	SearchResults {
		id: searchResults;
		anchors.top: searchText.bottom;
		x: 30;
		width: searchText.width;
		active: searchText.activeFocus || parent.hover.value;
		onClear: {
			searchText.text = "";
			this.parent.parent.parent.open = false;
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
